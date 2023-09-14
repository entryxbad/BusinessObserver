import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {HomeIcon} from 'react-native-heroicons/outline'
import {CalendarDaysIcon} from 'react-native-heroicons/outline'
import {ChatBubbleLeftRightIcon} from 'react-native-heroicons/outline'
import {DocumentTextIcon} from 'react-native-heroicons/outline'
import {InboxArrowDownIcon} from 'react-native-heroicons/outline'

import CalendarScreen from '../../screens/CalendarScreen'
import HomeScreen from '../../screens/HomeScreen'

const Tab = createBottomTabNavigator()

const Home = () => {
  return <HomeScreen />
}

const Calendar = () => {
  return <CalendarScreen />
}

const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: () => <HomeIcon color={'black'} size={28} />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
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
