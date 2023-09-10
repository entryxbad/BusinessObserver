import React from 'react'
import {Text, View} from 'react-native'

const Sales = () => {
  return (
    <View className="flex-1 bg-white border border-gray-300 m-1 py-5">
      <View className="flex-1 px-5 space-y-10 justify-center ">
        <View>
          <Text className="text-sm text-[#b2b2b2]">Продажи</Text>
        </View>
        <View>
          <Text className="text-sm font-bold text-black">38 200 000</Text>
        </View>
      </View>
    </View>
  )
}

export default Sales
