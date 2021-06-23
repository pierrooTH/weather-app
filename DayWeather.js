import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function DayWeather({day}) {
    const dt = day.dt
    const unMeilleurFormat = new Date(dt*1000);
    const maDateEnFr = unMeilleurFormat.toLocaleString('fr-FR',{
        timeZone: 'Europe/Paris',
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })

    const styleDayTemperatureMin = () => {
        if (day.temp.min > 25) {
            return styles.dayTempMinHot
        } else if (day.temp.min > 15 && day.temp.min < 25 ) {
            return styles.dayTempMinMedium
        } else {
            return styles.dayTempMinCold
        } 
    } 

    const styleDayTemperatureMax = () => {
        if (day.temp.max > 25) {
            return styles.dayTempMaxHot
        } else if (day.temp.max > 15 && day.temp.max < 25 ) {
            return styles.dayTempMaxMedium
        } else {
            return styles.dayTempMaxCold
        } 
    } 

    return (
        <View>
            <Text style={styles.dates}>{maDateEnFr}</Text>
        <View style={styles.window}>
            <View style={styles.description}>
            <Text style={styles.dayDescr}>{day.weather[0].description}</Text>
            </View>
            <View style={styles.img}>
            <Image source={{ uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}} style={styles.myImg} />
            </View>
            <View style={styles.temp}>
            <Text style={styles.min}>Min :</Text>
            <Text style={styleDayTemperatureMin()}>{Math.round(day.temp.min)} °C</Text>
            <Text style={styles.max}>Max :</Text>
            <Text style={styleDayTemperatureMax()}>{Math.round(day.temp.max)} °C</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        //margin: 20,
        paddingBottom: 30,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    dayTempMinHot: {
        fontWeight: 'bold', 
        fontSize: 25,
        color: '#b91f1f'
    },
    dayTempMinMedium: {
        fontWeight: 'bold', 
        fontSize: 25,
        color: 'lightgreen'
    },
    dayTempMinCold: {
        fontWeight: 'bold', 
        fontSize: 25,
        color: '#2244ae'
    },
    dayTempMaxHot: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#b91f1f'
    },
    dayTempMaxMedium: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'lightgreen'
    },
    dayTempMaxCold: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#2244ae'
    },
    dayDescr: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    dates: {
        textAlign: 'center',
        fontSize: 20,
        padding: 20,
        margin: 10,
        color: '#537bcf',
        fontWeight: 'bold'
    },
    description: {
        justifyContent: 'center'
    }, 
    temp: {
        justifyContent: 'center'
    },
    img: {
        justifyContent: 'center'
    }, 
    min: {
        fontWeight: 'bold',
        fontSize: 18,
    }, 
    max: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});