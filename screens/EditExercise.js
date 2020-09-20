import React, { useState } from 'react'
import { View, TextInput, Text, Switch, Button } from 'react-native'

const FingerBoard = () => (
  <View style={{ width: 100, height: 100, backgroundColor: '#ff0000' }} />
)

const repetitionType = "repetition"
const durationType = 'duration'

const styles =  {
  inputRow: { flexDirection: 'row' },
  textInput: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#002200'
  }
}

const EditExercise = ({ onSubmit = console.log } = { onSubmit: console.log }) => {
  const [notes, setNotes] = useState('asdf')
  const [type, setType] = useState('')
  const [pattern, setPattern] = useState([-1, -1])
  const [count, setCount] = useState(1)

  return (
    <View>
      <FingerBoard />
      <View style={styles.inputRow}>
        <Text>{repetitionType}</Text>
        <Switch value={type === repetitionType} onValueChange={(v) => setType(v ? repetitionType : durationType)}/>
        <Text>{durationType}</Text>
      </View>
      <View style={styles.inputRow}>
        <Text>Count: </Text>
        <TextInput
          value={count}
          onChangeText={t => setCount(parseInt(t))}
          style={styles.textInput}
        />
        <Button title="+" onPress={() => setCount(c => c + 1)} />
        <Button title="-" onPress={() => setCount(c => c - 1)} />
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
        <Button title="Save" onPress={() => onSubmit({ notes, [type]: count, pattern })} />
      </View>
    </View>
  )
}

export default EditExercise
