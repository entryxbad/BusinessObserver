import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {ScrollView, Text, View} from 'react-native'
import {HomeIcon} from 'react-native-heroicons/outline'
import {CalendarDaysIcon} from 'react-native-heroicons/outline'
import {ChatBubbleLeftRightIcon} from 'react-native-heroicons/outline'
import {DocumentTextIcon} from 'react-native-heroicons/outline'
import {InboxArrowDownIcon} from 'react-native-heroicons/outline'

import Balance from '../Balance'
import Consumption from '../Consumption'
import Header from '../Header'
import Receipts from '../Receipts'
import Sales from '../Sales'

const Tab = createBottomTabNavigator()

const HomeScreen = () => {
  return (
    <View className="bg-[#f5f5f5] flex-1 relative">
      <Header />
      <ScrollView>
        <Balance />
        <Receipts />
        <Consumption />
        <Consumption />
        <Sales />
      </ScrollView>
    </View>
  )
}

const CalendarScreen = () => {
  return (
    <View>
      <Text>CalendarScreen</Text>
    </View>
  )
}

const DocumentsScreen = () => {
  return (
    <View>
      <Text>DocumentsScreen</Text>
    </View>
  )
}

const MessengerScreen = () => {
  return (
    <View>
      <Text>MessengerScreen</Text>
    </View>
  )
}

const InboxScreen = () => {
  return (
    <View>
      <Text>InboxScreen</Text>
    </View>
  )
}

const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: () => <HomeIcon color={'black'} size={28} />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: () => <CalendarDaysIcon color={'black'} size={28} />,
        }}
      />
      {/* <Tab.Screen
        name="Messenger"
        component={MessengerScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <ChatBubbleLeftRightIcon color={'black'} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Documents"
        component={DocumentsScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: () => <DocumentTextIcon color={'black'} size={28} />,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: () => <InboxArrowDownIcon color={'black'} size={28} />,
        }}
      /> */}
    </Tab.Navigator>
  </NavigationContainer>
)

export default Navigation
