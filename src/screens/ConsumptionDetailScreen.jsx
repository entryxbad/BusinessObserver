import {useEffect, useState} from 'react'
import {Text, View} from 'react-native'

import Loading from '../components/Loading'
import {fetchConsumptionOrgs} from '../config/api'
import {formatNumber} from '../config/functions'

const BalanceDetailScreen = () => {
  const [consumptionDetail, setConsumptionDetail] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const updateConsumptionOrgs = async () => {
    try {
      const response = await fetchConsumptionOrgs()
      setConsumptionDetail(response)
      setIsLoading(false)
    } catch (error) {
      console.log('Error from ConsumptionDetailScreen.jsx:', error)
    }
  }

  useEffect(() => {
    updateConsumptionOrgs()
  }, [])

  const groupedData = {}
  consumptionDetail.forEach(org => {
    if (!groupedData[org.organization]) {
      groupedData[org.organization] = []
    }
    const existingOrg = groupedData[org.organization].find(
      item => item.accountName === org.accountName,
    )
    if (existingOrg) {
      existingOrg.consumption = org.consumption
    } else {
      groupedData[org.organization].push({
        accountName: org.accountName,
        balance: org.consumption,
      })
    }
  })

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <View className="flex-1 px-2 mt-5">
          {/* Header */}
          <View className="flex-row justify-between bg-white border border-gray-300 px-2">
            <Text className="text-black text-lg font-bold">Банк</Text>
            <Text className="text-black text-lg font-bold">Касса</Text>
          </View>

          {/* Organization */}
          {Object.keys(groupedData).map((organization, index) => (
            <View
              className="mt-5 bg-white border border-gray-300 px-2"
              key={index}>
              <View className="items-center">
                <Text className="text-black font-bold text-xl mb-3">
                  {organization}
                </Text>
              </View>

              <View className="flex-row justify-between">
                <Text className="text-black text-lg">
                  {formatNumber(
                    groupedData[organization].find(
                      item => item.accountName === 'Расчетные счета',
                    )?.balance || 0,
                  )}{' '}
                  {'\u20BD'}
                </Text>
                <Text className="text-black text-lg">
                  {formatNumber(
                    groupedData[organization].find(
                      item => item.accountName === 'Касса организации',
                    )?.balance || 0,
                  )}{' '}
                  {'\u20BD'}
                </Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </>
  )
}

export default BalanceDetailScreen
