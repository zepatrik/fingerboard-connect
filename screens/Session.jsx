import React, { useState } from 'react'
import {  Text, Button,View } from 'react-native'
import ExerciseDetails from '../components/ExerciseDetails'
import ExerciseTimeline from '../components/ExerciseTimeline'
import expData from '../example_sessions.json'

const SessionScreen = ({ session }) => {
  const [activeExercise, setActiveExercise] = useState(0)

  return (<View>
    <Text>Test</Text>
    {//<ExerciseTimeline activeExercise={activeExercise} setActiveExercise={setActiveExercise} />
    }
    <ExerciseDetails session={expData} activeExercise={activeExercise} setActiveExercise={setActiveExercise} />
    <Button onPress={console.log} title="Start" />
  </View>)
}

export default SessionScreen
