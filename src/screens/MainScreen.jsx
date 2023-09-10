import {ScrollView, View} from 'react-native'

import Balance from '../components/Balance'
import Documents from '../components/Documents'
import Expense from '../components/Expense'
import Header from '../components/Header'
import Receipts from '../components/Receipts'
import Sales from '../components/Sales'

const MainScreen = () => {
  return (
    <View className="bg-[#f5f5f5] flex-1 relative">
      <Header />
      <ScrollView>
        <Documents />
        <Balance />
        <Receipts />
        <Expense />
        <Sales />
      </ScrollView>
    </View>
  )
}

export default MainScreen
