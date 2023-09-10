import {ScrollView, Text, View} from 'react-native'

import Balance from '../components/Balance'
import Balance51 from '../components/Balance51'
import Documents from '../components/Documents'
import Expense from '../components/Expense'
import Receipts from '../components/Receipts'
import Sales from '../components/Sales'

const MainScreen = () => {
  return (
    <ScrollView className="bg-[#f5f5f5] flex-1 relative">
      <Documents />
      <Balance />
      <Balance51 />
      <Receipts />
      <Expense />
      <Sales />
    </ScrollView>
  )
}

export default MainScreen
