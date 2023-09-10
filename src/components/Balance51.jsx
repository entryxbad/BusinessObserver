import React, {useEffect, useState} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

import {fetchBalance} from '../config/api'

const Balance51 = () => {
  const [balance, setBalance] = useState(0)

  const updateBalance = async () => {
    try {
      const response = await fetchBalance()
      setBalance(response)
    } catch (error) {
      console.log('Error from Balance.jsx:', error)
    }
  }

  useEffect(() => {
    updateBalance()
  }, [])

  const handleRefresh = () => {
    updateBalance()
    console.log(balance[1])
  }

  return (
    <View className="flex-1 bg-white border border-gray-300 m-1 py-5">
      <View className="flex-1 px-5 space-y-10 justify-center ">
        <View>
          <Text className="text-sm text-[#b2b2b2]">
            Счёт {balance && balance[1] ? balance[1].Счет : 'Нет данных'}
          </Text>
          <TouchableOpacity
            className="bg-[#fddf59] rounded-md p-2 items-center w-24"
            onPress={handleRefresh}>
            <Text className="text-sm text-black">Обновить</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text className="text-sm font-bold text-black">
            {balance && balance[1] ? balance[1].СуммаОстаток : 'Нет данных'}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Balance51
