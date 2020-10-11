import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import EditExercise from './screens/EditExercise'
import Session from './screens/Session'

import HistoyScreen from './screens/HistoryScreen'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

function Social() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Soical Screen</Text>
    </View>
  )
}

function AddSession() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Add Section</Text>
    </View>
  )
}

const HistoryStack = createStackNavigator()
const Tab = createBottomTabNavigator()

function HistoryStackScreen() {
  return (
    <HistoryStack.Navigator>
     <HistoryStack.Screen name="Home" component={HistoyScreen} />             
     <HistoryStack.Screen name="Session" component={Session} />
    </HistoryStack.Navigator>
);
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'Home') {
              iconName = focused ? 'ios-list-box' : 'ios-list'
            } else if (route.name === 'Social') {
              iconName = focused ? 'md-share' : 'md-share'
            } else if (route.name === 'Add') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline'
            } else if (route.name === 'Exercise') {
              iconName = focused ? 'md-star' : 'md-star-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="Home" component={HistoryStackScreen} />
        <Tab.Screen name="Add" component={AddSession} />
        <Tab.Screen name="Exercise" component={EditExercise} />
        <Tab.Screen name="Social" component={Social} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
