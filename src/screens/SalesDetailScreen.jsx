import {useEffect, useState} from 'react'
import {ScrollView, Text, View} from 'react-native'

import {fetchSalesOrgs} from '../config/api'
import {formatNumber} from '../config/functions'

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
      {salesDetail.map((item, index) => (
        <View className="mt-2" key={index}>
          <View className="flex-1 justify-between bg-white border border-gray-300 p-2 mt-2">
            <Text className="text-gray-400 text-lg">{item.partner}</Text>
            <View className="flex-row items-center justify-between">
              <Text className="text-black text-lg font-bold">
                {formatNumber(item.sales)} {'\u20BD'}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

export default SalesDetailScreen
