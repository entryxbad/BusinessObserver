import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {HomeIcon} from 'react-native-heroicons/outline'
import {CalendarDaysIcon} from 'react-native-heroicons/outline'
import {ChatBubbleLeftRightIcon} from 'react-native-heroicons/outline'
import {DocumentTextIcon} from 'react-native-heroicons/outline'
import {InboxArrowDownIcon} from 'react-native-heroicons/outline'

import BalanceDetailScreen from '../../screens/BalanceDetailScreen'
import CalendarScreen from '../../screens/CalendarScreen'
import ConsumptionDetailScreen from '../../screens/ConsumptionDetailScreen'
import HomeScreen from '../../screens/HomeScreen'
import ReceiptsDetailScreen from '../../screens/ReceiptsDetailScreen'
import SalesDetailScreen from '../../screens/SalesDetailScreen'

const Tab = createBottomTabNavigator()

const HomeTab = ({navigation}) => {
  return <HomeScreen navigation={navigation} />
}

const CalendarTab = () => {
  return <CalendarScreen />
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
        options={{headerTitle: 'Продажи'}}
      />
    </HomeStack.Navigator>
  )
}

const Navigation = () => (
  <NavigationContainer>
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
        name="CalendarTab"
        component={CalendarTab}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: () => <CalendarDaysIcon color={'black'} size={28} />,
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
)

export default Navigation

{
  /* <Tab.Screen
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
/> */
}
