import {useRoute} from '@react-navigation/native'
import {useEffect, useState} from 'react'
import {ScrollView, Text, View} from 'react-native'

import {fetchBalanceOrgs} from '../config/api'

const BalanceDetailScreen = () => {
  const [balanceDetail, setBalanceDetail] = useState([])
  const route = useRoute()

  const balanceData = route.params?.balanceData || null

  const updateBalanceOrgs = async () => {
    try {
      const response = await fetchBalanceOrgs()
      setBalanceDetail(response)
    } catch (error) {
      console.log('Error from BalanceDetailScreen.jsx:', error)
    }
  }

  useEffect(() => {
    updateBalanceOrgs()
  }, [])

  const groupedData = {}
  balanceDetail.forEach(org => {
    if (!groupedData[org.organization]) {
      groupedData[org.organization] = []
    }
    const existingOrg = groupedData[org.organization].find(
      item => item.accountName === org.accountName,
    )
    if (existingOrg) {
      existingOrg.balance = org.balance
    } else {
      groupedData[org.organization].push({
        accountName: org.accountName,
        balance: org.balance,
      })
    }
  })

  return (
    <ScrollView className="mt-5 px-5 mb-1">
      {/* Header */}
      <View className="bg-white border border-gray-300 px-2">
        <View className="flex-row justify-between">
          <Text className="text-black text-lg font-bold">Банк</Text>
          <Text className="text-black text-lg font-bold">Касса</Text>
        </View>

        {/* Total */}
        <View className="flex-1">
          <View className="items-center">
            <Text className="text-black font-bold text-xl">Итого</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-black font-bold text-lg">1212</Text>
            <Text className="text-black font-bold text-lg">1212</Text>
          </View>
        </View>
      </View>

      {/* Organization */}

      <View className="mt-5 bg-white border border-gray-300 px-2">
        <View className="items-center">
          <Text className="text-black font-bold text-xl mb-3">Malina</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-black text-lg">232323</Text>
          <Text className="text-black text-lg">78678678</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default BalanceDetailScreen
