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
    <ScrollView className="flex-1 px-5 mb-1">
      {/* Organization */}
      {salesDetail.map((item, index) => (
        <View className="mt-2" key={index}>
          <View className="items-center">
            <Text className="text-black font-bold text-xl mb-3">
              {item.partner}
            </Text>
          </View>

          <View className="flex-row justify-between border-dashed border-b">
            <Text className="text-black text-lg">Продажа:</Text>
            <Text className="text-black text-lg">{item.sales}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

export default SalesDetailScreen
