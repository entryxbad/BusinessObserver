import React from 'react'
import {Text, View} from 'react-native'

const Expense = () => {
  return (
    <View className="flex-1 bg-white border border-gray-300 m-1 py-5">
      <View className="flex-1 px-5 space-y-10 justify-center ">
        <View>
          <Text className="text-sm text-[#b2b2b2]">Расход</Text>
        </View>
        <View>
          <Text className="text-sm font-bold text-red-600">-1 500 000</Text>
        </View>
      </View>
    </View>
  )
}

export default Expense
