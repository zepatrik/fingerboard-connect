import React, { Component, useState } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  FlatList,
  Dimensions
} from 'react-native'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'

let screenwidth = Dimensions.get('window').width
function HistoyScreen({navigation}) {
  const sessions = [
    {
      name: 'Sesstion1',
      dates: [new Date('11.01.2020'), new Date('11.01.2020')],
      exercises: []
    },
    {
      name: 'Sesstion2',
      dates: [new Date('11.01.2020'), new Date('11.01.2020')],
      exercises: []
    },
    {
      name: 'Sesstion3',
      dates: [new Date('11.01.2020'), new Date('11.01.2020')],
      exercises: []
    },
    {
      name: 'Sesstion4',
      dates: [new Date('11.01.2020'), new Date('11.01.2020')],
      exercises: []
    },
    {
      name: 'Sesstion5',
      dates: [new Date('11.01.2020'), new Date('11.01.2020')],
      exercises: []
    },
    {
      name: 'Sesstion6',
      dates: [new Date('11.01.2020'), new Date('11.01.2020')],
      exercises: []
    },
    {
      name: 'Sesstion7',
      dates: [new Date('11.01.2020'), new Date('11.01.2020')],
      exercises: []
    }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <IoniconsIcon name="md-time" style={styles.icon}></IoniconsIcon>
        <Text style={styles.history}>History</Text>
      </View>
      <FlatList
        overScrollMode={'always'}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        style={{ width: '100%' }}
        data={sessions}
        renderItem={({ item }) => (
          <View style={styles.cards}  onStartShouldSetResponder={()=>navigation.navigate('Session')}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.dates}>
              {item.dates[0].toLocaleDateString()}
            </Text>
            <IoniconsIcon
              name="ios-time"
              style={styles.icontime}
            ></IoniconsIcon>
            <Text style={styles.mins}>22min</Text>
            <IoniconsIcon
              name="md-trophy"
              style={styles.icontimes}
            ></IoniconsIcon>
            <Text style={styles.times}>{item.dates.length}</Text>
            <Text style={styles.exercises}>Exercises</Text>
          </View>
        )}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
    //alignItems: 'center',
    //justifyContent: 'center'
  },

  icon: {
    top: 44,
    left: 32,
    position: 'absolute',
    color: 'rgba(0,0,0,1)',
    fontSize: 40
  },
  history: {
    top: 52,
    left: 80,
    fontFamily: 'sans-serif',
    position: 'absolute',
    color: '#121212',
    height: 32,
    width: 94,
    fontSize: 25
  },
  topbar: {
    width: '100%',
    height: 100,
    backgroundColor: '#E6E6E6',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 45,
    shadowOpacity: 0.12,
    shadowRadius: 15
  },

  name: {
    top: 20,
    position: 'absolute',
    fontFamily: 'sans-serif',
    left: 19
  },
  icontime: {
    top: 60,
    position: 'absolute',
    left: 19,
    opacity: 0.9,
    color: 'rgba(0,0,0,0.4)'
  },

  icontimes: {
    top: 60,
    position: 'absolute',
    left: 65,
    opacity: 0.9,
    color: 'rgba(0,0,0,0.4)'
  },

  exercises: {
    top: 80,
    position: 'absolute',
    fontFamily: 'sans-serif',
    left: 19,
    fontSize: 8
  },

  times: {
    top: 62,
    position: 'absolute',
    fontFamily: 'sans-serif',
    left: 80,
    fontSize: 9,
    color: '#121212'
  },

  mins: {
    top: 62,
    position: 'absolute',
    fontFamily: 'sans-serif',
    left: 33,
    fontSize: 9,
    color: '#121212'
  },

  dates: {
    top: 40,
    position: 'absolute',
    fontFamily: 'sans-serif',
    left: 19,
    fontSize: 9,
    color: '#121212'
  },

  cards: {
    width: screenwidth * 0.9,
    margin: 5,
    height: 130,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 15,
    shadowOpacity: 0.08,
    shadowRadius: 15
  }
})

export default HistoyScreen
