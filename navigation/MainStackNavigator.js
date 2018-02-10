import React from 'react'
import { StackNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'
import {
  View,
  StatusBar
} from 'react-native'

const MainStackNavigator = StackNavigator(
  {
    Home: {
      screen: MainTabNavigator
    }
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal'
      },
      headerStyle: { backgroundColor: '#FFF', borderWidth: 0, borderBottomColor: '#FFF' }
    })
  }
)

export default class RootNavigator extends React.Component {
  render () {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <StatusBar barstyle='light-content' />
        <MainStackNavigator />
      </View>
    )
  }
}
