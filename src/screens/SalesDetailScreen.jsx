import {useEffect, useState} from 'react'
import {ScrollView, Text, View} from 'react-native'

import Loading from '../components/Loading'
import {fetchSalesOrgs} from '../config/api'
import {formatBalance} from '../config/functions'

const SalesDetailScreen = () => {
  const [salesDetail, setSalesDetail] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const updateSalesOrgs = async () => {
    try {
      const response = await fetchSalesOrgs()
      setSalesDetail(response)
      setIsLoading(false)
    } catch (error) {
      console.log('Error from SalesDetailScreen.jsx:', error)
    }
  }

  useEffect(() => {
    updateSalesOrgs()
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView className="flex-1 px-2 mb-1">
          {/* Остальной контент */}
          {salesDetail.map((item, index) => (
            <View className="mt-2" key={index}>
              <View className="flex-1 justify-between bg-white border border-gray-300 p-2 mt-2">
                <Text className="text-gray-400 text-lg">{item.partner}</Text>
                <View className="flex-row items-center justify-between">
                  <Text className="text-black text-lg font-bold">
                    {formatBalance(item.sales)} {'\u20BD'}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </>
  )
}

export default SalesDetailScreen
