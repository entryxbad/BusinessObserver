import {useRoute} from '@react-navigation/native'
import {useEffect, useState} from 'react'
import {ScrollView, Text, View} from 'react-native'

import Loading from '../components/Loading'
import {fetchBalanceOrgs} from '../config/api'
import {formatBalance} from '../config/functions'

const BalanceDetailScreen = () => {
  const [balanceDetail, setBalanceDetail] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const route = useRoute()

  const balanceData = route.params?.balanceData || null

  const updateBalanceOrgs = async () => {
    try {
      const response = await fetchBalanceOrgs()
      setBalanceDetail(response)
      setIsLoading(false)
    } catch (error) {
      console.error('Error from BalanceDetailScreen.jsx:', error)
    }
  }

  useEffect(() => {
    updateBalanceOrgs()
  }, [])

  const groupedData = {}
  balanceDetail.forEach(account => {
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
        <ScrollView className="flex-1 mt-5 px-2 mb-1">
          {/* Header */}
          <View className="bg-white border border-gray-300 px-2">
            <View className="flex-row justify-between">
              <Text className="text-black text-lg font-bold">Банк</Text>
              <Text className="text-black text-lg font-bold">Касса</Text>
            </View>
            {/* Total */}
            <View className="mt-2">
              <View className="items-center">
                <Text className="text-black font-bold text-xl">Итого</Text>
              </View>
              {balanceData.map((item, index) => {
                if (item.bank !== undefined && item.checkout !== undefined) {
                  return (
                    <View className="flex-row justify-between" key={index}>
                      <Text className="text-black font-bold text-lg">
                        {formatBalance(
                          item.bank !== undefined ? item.bank : item.account,
                        )}{' '}
                        {'\u20BD'}
                      </Text>
                      <Text className="text-black font-bold text-lg">
                        {item.checkout.toFixed(2)} {'\u20BD'}
                      </Text>
                    </View>
                  )
                }
                return null
              })}
            </View>
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
              )
            }
            return null
          })}
        </ScrollView>
      )}
    </>
  )
}

export default BalanceDetailScreen
