import {useEffect, useState} from 'react'
import {Text, View} from 'react-native'

import {fetchReceiptsOrgs} from '../config/api'

const BalanceDetailScreen = () => {
  const [receiptsDetail, setReceiptsDetail] = useState([])

  const updateReceiptsOrgs = async () => {
    try {
      const response = await fetchReceiptsOrgs()
      setReceiptsDetail(response)
    } catch (error) {
      console.log('Error from ReceiptsDetailScreen.jsx:', error)
    }
  }

  useEffect(() => {
    updateReceiptsOrgs()
  }, [])

  const groupedData = {}
  receiptsDetail.forEach(org => {
    if (!groupedData[org.organization]) {
      groupedData[org.organization] = []
    }
    const existingOrg = groupedData[org.organization].find(
      item => item.accountName === org.accountName,
    )
    if (existingOrg) {
      existingOrg.receipts = org.receipts
    } else {
      groupedData[org.organization].push({
        accountName: org.accountName,
        balance: org.receipts,
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