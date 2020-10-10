import React, { useState } from 'react'
import {  Text, Button } from 'react-native'
import ExerciseDetails from '../components/ExerciseDetails'
import ExerciseTimeline from '../components/ExerciseTimeline'

const SessionScreen = ({ session }) => {
  const [activeExercise, setActiveExercise] = useState(0)

  return (<>
    <Text>{session.name}</Text>
    <ExerciseTimeline session={session} activeExercise={activeExercise} setActiveExercise={setActiveExercise} />
    <ExerciseDetails session={session} activeExercise={activeExercise} setActiveExercise={setActiveExercise} />
    <Button onPress={console.log} title="Start" />
  </>)
}

export default SessionScreen
