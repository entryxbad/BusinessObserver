import {useEffect, useState} from 'react'
import {Text, View} from 'react-native'

import {fetchBalanceOrgs} from '../config/api'

const BalanceDetailScreen = () => {
  const [balanceDetail, setBalanceDetail] = useState(0)

  const updateBalanceOrgs = async () => {
    try {
      const response = await fetchBalanceOrgs()
      setBalanceDetail(response)
      console.log('res', response)
    } catch (error) {
      console.log('Error from BalanceDetailScreen.jsx:', error)
    }
  }

  useEffect(() => {
    updateBalanceOrgs()
  }, [])

  return (
    <View className="flex-1 mx-5 mt-5">
      {/* Header */}
      <View className="flex-row justify-between border-dashed border-b">
        <Text className="text-black text-lg">Банк</Text>
        <Text className="text-black text-lg">Касса</Text>
      </View>

      {/* Total */}
      <View className="mt-5 border-dashed border-b">
        <View className="items-center">
          <Text className="text-black font-bold text-xl">Итого</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-black font-bold text-lg">100000</Text>
          <Text className="text-black font-bold text-lg">23112340</Text>
        </View>
      </View>

      {/* Company */}
      <View className="mt-5">
        <View className="items-center">
          <Text className="text-black font-bold text-xl">ООО "Солнышко"</Text>
        </View>
        <View className="flex-row justify-between border-dashed border-b">
          <Text className="text-black text-lg">1000</Text>
          <Text className="text-black text-lg">34233</Text>
        </View>
      </View>
    </View>
  )
}

export default BalanceDetailScreen
