import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import FingerBoard from '../src/assets/fingerboard-web.jsx'

const EditExercise = () => {
  const [notes, setNotes] = useState('asdf')

  return (
    <View style={styles.container}>
      <FingerBoard style={styles.FingerBoard} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  FingerBoard: {}
})

export default EditExercise
