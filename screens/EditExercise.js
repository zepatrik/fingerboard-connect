import React, { useState } from 'react'
import { View, TextInput, Text, Switch, Button } from 'react-native'
import Svg, { Rect } from 'react-native-svg'

const FingerBoard = ({ pattern, setPattern }) => {
  const onPressHandler = (id) => () =>
    setPattern(
      pattern.indexOf(id) >= 0
        ? pattern.filter((x) => x !== id)
        : [...pattern, id]
    )
  const getFill = (id) => (pattern.indexOf(id) >= 0 ? 'red' : 'white')

  return (
    <Svg height="50%" width="50%" viewBox="0 0 100 100">
      <Rect
        x="20"
        y="20"
        width="50"
        height="20"
        stroke="black"
        strokeWidth="2"
        fill={getFill(0)}
        rx="10"
        onPress={onPressHandler(0)}
      />
      <Rect
        x="0"
        y="0"
        width="30"
        height="20"
        stroke="black"
        strokeWidth="2"
        fill={getFill(1)}
        rx="10"
        onPress={onPressHandler(1)}
      />
    </Svg>
  )
}

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
      <FingerBoard pattern={pattern} setPattern={setPattern} />
      <View style={styles.inputRow}>
        <Text>{durationType}</Text>
        <Switch
          value={type === repetitionType}
          onValueChange={(v) => setType(v ? repetitionType : durationType)}
        />
        <Text>{repetitionType}</Text>
      </View>
      <View style={styles.inputRow}>
        <Text>Count: </Text>
        <TextInput
          value={count}
          onChangeText={(t) => setCount(parseInt(t))}
          style={styles.textInput}
        />
        <Button title="+" onPress={() => setCount((c) => c + 1)} />
        <Button title="-" onPress={() => setCount((c) => c - 1)} />
      </View>
      <View style={styles.inputRow}>
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

export default EditExercise
