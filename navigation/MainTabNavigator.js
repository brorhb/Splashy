import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { TabNavigator, TabBarBottom } from 'react-navigation'

import Colors from '../constants/Colors'

import HomeScreen from '../screens/HomeScreen'

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case 'Home':
            iconName = 'library-books'
        }
        return (
          <MaterialIcons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    style: {backgroundColor: 'pink'}
  }
)
