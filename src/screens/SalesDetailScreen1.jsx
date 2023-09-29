import {useEffect, useState} from 'react'
import {ScrollView, Text, View} from 'react-native'

import {fetchSalesOrgs} from '../config/api'

const SalesDetailScreen = () => {
  const [salesDetail, setSalesDetail] = useState([])

  const updateSalesOrgs = async () => {
    try {
      const response = await fetchSalesOrgs()
      setSalesDetail(response)
    } catch (error) {
      console.log('Error from BalanceDetailScreen.jsx:', error)
    }
  }

  useEffect(() => {
    updateSalesOrgs()
  }, [])

  return (
    <ScrollView className="flex-1 px-2 mb-1">
      {/* Organization */}

      <View className="mt-2">
        <View className="flex-1 justify-between bg-white border border-gray-300 p-2 mt-2">
          <Text className="text-black text-lg font-bold">
            45 465 {'\u20BD'}
          </Text>
          <Text className="text-gray-400 text-lg">ООО"Солнышко"</Text>
          <Text className="text-black text-base">
            Предоплата по договору поставки №234
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default SalesDetailScreen
