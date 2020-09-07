import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'

const FingerBoard = () => (
  <View style={{ width: 100, height: 100, backgroundColor: '#ff0000' }} />
)

const EditExercise = () => {
  const [notes, setNotes] = useState('asdf')

  return (
    <View>
      <FingerBoard />
      <View style={{ flexDirection: 'row' }}>
        <Text>Notes: </Text>
        <TextInput
          onChangeText={setNotes}
          value={notes}
          style={{
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#002200'
          }}
        />
      </View>
    </View>
  )
}

export default EditExercise
