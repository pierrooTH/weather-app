import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function CurrentWeather({current}) {

    const styleCurrentTemperature = () => {
        if (current.temp > 25) {
            return styles.currentTemp
        } else if (current.temp > 15 && current.temp < 25 ) {
            return styles.currentTempMedium
        } else {
            return styles.currentTempCold
        } 
    } 
    
    const styleCurrentFeelsLikeTemperature = () => {
        if (current.feels_like > 25) {
            return styles.currentFeelsLike
        } else if (current.feels_like > 15 && current.feels_like < 25 ) {
            return styles.currentFeelsLikeMedium
        } else {
            return styles.currentFeelsLikeCold
        } 
    }  
    //{current.temp > 25 ? styles.currentTemp : styles.currentTempCold}

    return (<View>

<Text style={styles.actually}>Actuellement</Text>
    <View style={styles.window}>
        <View style={styles.description}>
            <Text style={styles.currentDescr}>{current.weather[0].description}</Text>
        </View>
        <View style={styles.img}>
            <Image source={{ uri: `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}} style={styles.myImg} />
        </View>
        <View style={styles.temp}>
            <Text style={styleCurrentTemperature()}>{current.temp} °C</Text>
            <Text style={styleCurrentFeelsLikeTemperature()}>{current.feels_like} °C</Text>
        </View>
      </View>
      </View>
    )
}
const styles = StyleSheet.create({

    myImg: {
      width: 80,
      height: 80
    },
    window: {
        alignSelf: 'stretch',
        backgroundColor: '#5888ec',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 30,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    
    currentDescr: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },

    currentTemp: {
        fontWeight: 'bold', 
        fontSize: 25,
        color: "#b91f1f"
        
    },
    currentTempMedium: {
        fontWeight: 'bold', 
        fontSize: 25,
        color: "lightgreen"
        
    },
    currentTempCold: {
        fontWeight: 'bold', 
        fontSize: 25,
        color: "#2244ae"
    },
    currentFeelsLike: {
        fontWeight: 'bold',
        fontSize: 25,
        color:  '#b91f1f'
    },
    currentFeelsLikeCold: {
        fontWeight: 'bold',
        fontSize: 25,
        color: "#2244ae"
    },
    currentFeelsLikeMedium: {
        fontWeight: 'bold',
        fontSize: 25,
        color: "lightgreen"
    },
    description: {
        justifyContent: 'center',
        borderRadius: 15,
        padding: 15,
        backgroundColor: '#2e426a'
    },
    actually: {
        paddingTop: 70,
        textAlign: 'center',
        backgroundColor: '#5888ec',
        padding: 20,
        fontSize: 25,
        fontWeight: 'bold', 
        color: '#1c1b1b'
    },
    img: {
        justifyContent: 'center'
    },
    temp: {
        justifyContent: 'center',
    }
  });