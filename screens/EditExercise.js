import React, { useState } from 'react'
import { View, TextInput, Text, Switch, Button } from 'react-native'
import Svg, { Rect } from 'react-native-svg'
import { View, TextInput, Text,StyleSheet } from 'react-native'
import FingerBoard from "../src/assets/fingerboard-web.jsx"


const repetitionType = 'repetition'
const durationType = 'duration'

const styles = {
  inputRow: { flexDirection: 'row' },
  textInput: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#002200'
  }
}

const EditExercise = (
  { onSubmit = console.log } = { onSubmit: console.log }
) => {
  const [notes, setNotes] = useState('asdf')
  const [type, setType] = useState(repetitionType)
  const [pattern, setPattern] = useState([])
  const [count, setCount] = useState(1)

  return (
    <View>
      <FingerBoard />
      <View style={{ flexDirection: 'row' }}>
        <Text>Notes: </Text>
        <TextInput
          onChangeText={setNotes}
          value={notes}
          style={styles.textInput}
        />
      </View>
      <View style={styles.inputRow}>
        <Button
          title="Save"
          onPress={() => onSubmit({ notes, [type]: count, pattern })}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'center', 
		alignSelf: 'center'
	},
  FingerBoard: {


  }



})



export default EditExercise
