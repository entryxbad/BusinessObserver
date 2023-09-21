import {useEffect, useState} from 'react'
import {Text, View} from 'react-native'

import {fetchBalanceOrgs} from '../config/api'

const BalanceDetailScreen = () => {
  const [balanceDetail, setBalanceDetail] = useState([])

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

      {/* Organization */}
      {Object.keys(groupedData).map((organization, index) => (
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
      ))}
    </View>
  )
}

export default BalanceDetailScreen
