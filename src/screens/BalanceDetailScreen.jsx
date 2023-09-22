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
    <ScrollView className="flex-1 mt-5 px-5 mb-1">
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
        {balanceData.map((item, index) => {
          if (item.bank !== undefined && item.checkout !== undefined) {
            return (
              <View className="flex-row justify-between" key={index}>
                <Text className="text-black font-bold text-lg">
                  {item.bank !== undefined ? item.bank : item.account}
                </Text>
                <Text className="text-black font-bold text-lg">
                  {item.checkout}
                </Text>
              </View>
            )
          }
          return null
        })}
      </View>

      {/* Organization */}
      {Object.keys(groupedData).map((organization, index) => {
        const hasAccountName = groupedData[organization].some(
          item =>
            item.accountName === 'Расчетные счета' ||
            item.accountName === 'Касса организации',
        )

        if (hasAccountName) {
          return (
            <View className="mt-5" key={index}>
              <View className="items-center">
                <Text className="text-black font-bold text-xl mb-3">
                  {organization}
                </Text>
              </View>

              <View className="flex-row justify-between border-dashed border-b">
                <Text className="text-black text-lg">
                  {`${
                    groupedData[organization].find(
                      item => item.accountName === 'Расчетные счета',
                    )?.balance || 'Нет данных'
                  }`}
                </Text>
                <Text className="text-black text-lg">
                  {`${
                    groupedData[organization].find(
                      item => item.accountName === 'Касса организации',
                    )?.balance || 'Нет данных'
                  }`}
                </Text>
              </View>
            </View>
          )
        }
        return null
      })}
    </ScrollView>
  )
}

export default BalanceDetailScreen
