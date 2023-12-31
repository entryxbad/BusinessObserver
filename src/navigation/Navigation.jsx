import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React, {useEffect, useState} from 'react'
import {HomeIcon} from 'react-native-heroicons/outline'
import {ChartPieIcon} from 'react-native-heroicons/outline'
import {DocumentTextIcon} from 'react-native-heroicons/outline'

import {getItem} from '../config/storeData'
import BalanceDetailScreen from '../screens/BalanceDetailScreen'
import ConsumptionDetailScreen from '../screens/ConsumptionDetailScreen'
import GraphicScreen from '../screens/GraphicScreen'
import HomeScreen from '../screens/HomeScreen'
import ReceiptsDetailScreen from '../screens/ReceiptsDetailScreen'
import RegistrationScreen from '../screens/RegistrationScreen'
import RetailScreen from '../screens/RetailScreen'
import SalesDetailScreen from '../screens/SalesDetailScreen'
import StartScreen from '../screens/StartScreen'
import WaitScreen from '../screens/WaitScreen'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HomeTab = ({navigation}) => {
  return <HomeScreen navigation={navigation} />
}

const RetailTab = () => {
  return <RetailScreen />
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

const MainTab = () => (
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
      name="RetailTab"
      component={RetailTab}
      options={{
        headerShown: false,
        tabBarLabel: () => null,
        tabBarIcon: () => <DocumentTextIcon color={'black'} size={28} />,
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
)

const Navigation = () => {
  const [isRegistered, setIsRegistered] = useState(false)

  useEffect(() => {
    // Проверяет значение в AsyncStorage при запуске приложения
    getItem('isRegistered').then(value => {
      if (value === 'true') {
        setIsRegistered(true)
      }
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isRegistered ? (
          <Stack.Screen name="StartScreen" component={StartScreen} />
        ) : (
          <>
            <Stack.Screen name="WaitScreen" component={WaitScreen} />
            <Stack.Screen name="MainTab" component={MainTab} />
          </>
        )}
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          initialParams={{
            onRegistrationSuccess: () => setIsRegistered(true),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
