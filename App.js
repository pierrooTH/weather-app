import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { data } from 'browserslist';
import CurrentWeather from './CurrentWeather';
import DayWeather from './DayWeather';

export default function App() {

  const [currentDatas, setCurrentDatas] = useState({});

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.42893&lon=2.83183&lang=fr&units=metric&exclude=minutely,hourly&appid=8a32e4779a0d2a498915208dcdb0f8ca')
  .then(res => {
    setCurrentDatas(res.data)
    console.log(currentDatas);
  })
  }, [])

  // cas où les données sont chargées
  // dans currentDatas, j'ai bien des infos si 
  // la longueur des propriétés vaut plus que 0
  if (Object.entries(currentDatas).length > 0) {
    
    const datasJSX = currentDatas.daily.map(currentData => {
      return <View style={styles.container}>
        <DayWeather day={currentData} />
  
      </View>
    })
    return (
      <View style={styles.container}>
        <CurrentWeather current={currentDatas.current}/>
      <View>
        <ScrollView>
        {datasJSX}
        </ScrollView>
      </View>
      
    
    </View>
    );
  // cas où les données ne sont pas encore chargées de l'API
  // currentData est à sa valeur par défaut : {}
  } else {
    return <Text style={styles.container}>
      Loading...
    </Text>
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  }
});
