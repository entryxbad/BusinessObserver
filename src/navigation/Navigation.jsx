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
import WaitScreen from '../screens/WaitScreen'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HomeTab = () => {
  return <HomeScreen />
}

const GraphicTab = () => {
  return <GraphicScreen />
}

const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BalanceDetail"
        component={BalanceDetailScreen}
        options={{headerTitle: 'Остаток'}}
      />
      <Stack.Screen
        name="ReceiptsDetail"
        component={ReceiptsDetailScreen}
        options={{headerTitle: 'Поступления'}}
      />
      <Stack.Screen
        name="ConsumptionDetail"
        component={ConsumptionDetailScreen}
        options={{headerTitle: 'Расход'}}
      />
      <Stack.Screen
        name="SalesDetail"
        component={SalesDetailScreen}
        options={{headerTitle: 'Продажи за текущий день'}}
      />
    </Stack.Navigator>
  )
}

const Navigation = () => {
  const [isRegistered, setIsRegistered] = useState(true)

  const handleRegistrationSuccess = () => {
    setIsRegistered(true)
  }

  return (
    <NavigationContainer>
      {isRegistered ? (
        <Stack.Navigator>
          <Stack.Screen
            name="RegistrationScreen"
            component={RegistrationScreen}
            options={{headerShown: false}}
            initialParams={{onRegistrationSuccess: handleRegistrationSuccess}}
          />
          <Stack.Screen
            name="WaitScreen"
            component={WaitScreen}
            options={{headerTitle: 'Ожидание регистрации'}}
          />
        </Stack.Navigator>
      ) : (
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
      )}
    </NavigationContainer>
  )
}

export default Navigation
