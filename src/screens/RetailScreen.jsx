import {useEffect, useState} from 'react'
import {ScrollView, Text, View, SafeAreaView} from 'react-native'

import Loading from '../components/Loading'
import {fetchRetailOrgs} from '../config/api'
import {formatBalance} from '../config/functions'
// import { Header } from '@react-navigation/stack'

const RetailScreen = () => {
  const [retailDetail, setRetailDetail] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const updateRetailOrgs = async () => {
    try {
      const response = await fetchRetailOrgs()
      setRetailDetail(response)
      setIsLoading(false)
    } catch (error) {
      console.log('Error from SalesDetailScreen.jsx:', error)
    }
  }

  useEffect(() => {
    updateRetailOrgs()
  }, [])


  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView className="flex-1 px-2 mb-1">
          {/* Остальной контент */}
          {retailDetail.map((item, index) => (
            <View className="mt-2" key={index}>
              <View className="flex-1 justify-between bg-white border border-gray-300 p-2 mt-2">
                <Text className="text-gray-400 text-lg">{item.magazine}</Text>
                <View className="flex-row items-center justify-between">
                  <Text className="text-black text-lg font-bold">
                    {formatBalance(item.sum)} {'\u20BD'}
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

export default RetailScreen
