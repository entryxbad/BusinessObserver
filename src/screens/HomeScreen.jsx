import React from 'react'
import {ScrollView, View} from 'react-native'

import Balance from '../components/Balance'
import Consumption from '../components/Consumption'
import Header from '../components/Header'
import Receipts from '../components/Receipts'
import Sales from '../components/Sales'

const HomeScreen = ({navigation}) => {
  return (
    <View className="bg-[#f5f5f5] flex-1 relative">
      <Header />
      <ScrollView>
        <Balance navigation={navigation} />
        <Receipts />
        <Consumption />
        <Sales />
      </ScrollView>
    </View>
  )
}

export default HomeScreen
