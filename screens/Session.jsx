import React, { useState } from 'react'
import {  Text, Button,View,StyleSheet,Dimensions } from 'react-native'
import ExerciseDetails from '../components/ExerciseDetails'
import ExerciseTimeline from '../components/ExerciseTimeline'
import expData from '../example_sessions.json'
import { FAB } from 'react-native-paper';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:'row',
      height: ScreenHeight,
      //alignItems: 'center',
      //justifyContent: 'center'
    },
    fab: {
      
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor:"blue"

    }
  
  
  
  })


const SessionScreen = ({ session }) => {
  const [activeExercise, setActiveExercise] = useState(0)

  return (
    <View style={styles.container}>
    {//<ExerciseTimeline activeExercise={activeExercise} setActiveExercise={setActiveExercise} />
    }
    <View style={{
      //flex:1, 
      width: ScreenWidth*0.2,
      height:ScreenHeight,
      backgroundColor: 'red'
    }

    }
    ><Text>View 1</Text></View>
    <ExerciseDetails session={expData} activeExercise={activeExercise} setActiveExercise={setActiveExercise} />
    <FAB
      style={styles.fab}
      icon="play"
      onPress={() => console.log('Pressed')}>

    </FAB>
    </View>)
}

export default SessionScreen
