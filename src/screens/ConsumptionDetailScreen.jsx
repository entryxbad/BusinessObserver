import {useEffect, useState} from 'react'
import {Text, View} from 'react-native'

import Loading from '../components/Loading'
import {fetchConsumptionOrgs} from '../config/api'
import {formatBalance} from '../config/functions'

const ConsumptionDetailScreen = () => {
  const [consumptionDetail, setConsumptionDetail] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const updateConsumptionOrgs = async () => {
    try {
      const response = await fetchConsumptionOrgs()
      setConsumptionDetail(response)
      setIsLoading(false)
    } catch (error) {
      console.error('Error from ConsumptionDetailScreen.jsx:', error)
    }
  }

  useEffect(() => {
    updateConsumptionOrgs()
  }, [])

  const groupedData = {}
  consumptionDetail.forEach(account => {
    if (!groupedData[account.organization]) {
      groupedData[account.organization] = []
    }
    const existingAccount = groupedData[account.organization].find(
      item => item.accountName === account.accountName,
    )
    if (existingAccount) {
      existingAccount.consumption = account.consumption
    } else {
      groupedData[account.organization].push({
        accountName: account.accountName,
        balance: account.consumption,
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
                  {formatBalance(
                    groupedData[organization].find(
                      item => item.accountName === 'Расчетные счета',
                    )?.balance || 0,
                  )}{' '}
                  {'\u20BD'}
                </Text>
                <Text className="text-black text-lg">
                  {formatBalance(
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

export default ConsumptionDetailScreen
