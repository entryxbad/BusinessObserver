import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React, {useState} from 'react'
import {HomeIcon} from 'react-native-heroicons/outline'
import {ChartPieIcon} from 'react-native-heroicons/outline'

import BalanceDetailScreen from '../screens/BalanceDetailScreen'
import ConsumptionDetailScreen from '../screens/ConsumptionDetailScreen'
import GraphicScreen from '../screens/GraphicScreen'
import HomeScreen from '../screens/HomeScreen'
import ReceiptsDetailScreen from '../screens/ReceiptsDetailScreen'
import RegistrationScreen from '../screens/RegistrationScreen'
import SalesDetailScreen from '../screens/SalesDetailScreen'

const Tab = createBottomTabNavigator()

const HomeTab = ({navigation}) => {
  return <HomeScreen navigation={navigation} />
}

const GraphicTab = () => {
  return <GraphicScreen />
}

const HomeStack = createNativeStackNavigator()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeTab}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="BalanceDetail"
        component={BalanceDetailScreen}
        options={{headerTitle: 'Остаток'}}
      />
      <HomeStack.Screen
        name="ReceiptsDetail"
        component={ReceiptsDetailScreen}
        options={{headerTitle: 'Поступления'}}
      />
      <HomeStack.Screen
        name="ConsumptionDetail"
        component={ConsumptionDetailScreen}
        options={{headerTitle: 'Расход'}}
      />
      <HomeStack.Screen
        name="SalesDetail"
        component={SalesDetailScreen}
        options={{headerTitle: 'Продажи за текущий день'}}
      />
    </HomeStack.Navigator>
  )
}

const Navigation = () => {
  const [isRegistered, setIsRegistered] = useState(false)

  const handleRegistrationSuccess = () => {
    setIsRegistered(true)
  }

  return (
    <NavigationContainer>
      {isRegistered ? (
        <Tab.Navigator>
          <Tab.Screen
            name="HomeTab"
            component={HomeStackScreen}
            options={{
              headerShown: false,
              tabBarLabel: () => null,
              tabBarIcon: () => <HomeIcon color={'black'} size={28} />,
            }}
          />
          <Tab.Screen
            name="GraphicTab"
            component={GraphicTab}
            options={{
              headerShown: false,
              tabBarLabel: () => null,
              tabBarIcon: () => <ChartPieIcon color={'black'} size={28} />,
            }}
          />
        </Tab.Navigator>
      ) : (
        <RegistrationScreen onRegistrationSuccess={handleRegistrationSuccess} />
      )}
    </NavigationContainer>
  )
}

export default Navigation
