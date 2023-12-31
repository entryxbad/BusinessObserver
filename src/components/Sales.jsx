import {useEffect, useState} from 'react'
import {Alert, Text, TouchableOpacity, View} from 'react-native'
import {BanknotesIcon} from 'react-native-heroicons/outline'

import {fetchLicense2, fetchSales} from '../config/api'
import {formatBalance} from '../config/functions'

const Sales = ({navigation, refreshKey}) => {
  const [sales, setSales] = useState(0)

  const updateSales = async () => {
    try {
      const response = await fetchSales()
      setSales(response)
    } catch (error) {
      console.log('Error from Sales.jsx:', error)
    }
  }

  useEffect(() => {
    updateSales()
  }, [refreshKey])

  // const checkLic = async () => {
  //   try {
  //     const response = await fetchLicense2()
  //     return response[0].status === 'Действительна'
  //   } catch (error) {
  //     console.log('Error from SalesLic', error)
  //     return false
  //   }
  // }

  const handleButtonClick = async () => {
    navigation.navigate('SalesDetail')

    // const licenseValid = await checkLic()

    // if (licenseValid) {
    //   Alert.alert('Поздравляю', 'У вас есть лицензия')

    // } else {
    //   Alert.alert('Ошибка', 'Купите лицензию')
    // }
  }

  return (
    // Main block
    <View className="flex-1 bg-white border border-gray-300 m-1 py-3">
      {/* Header */}
      <View className="space-y-4 px-5">
        <View className="flex-row items-center justify-between">
          <View className="flex-row space-x-2">
            <BanknotesIcon color={'black'} size={18} />
            <Text className="text-sm text-[#b2b2b2]">Продажи</Text>
          </View>
          <TouchableOpacity onPress={handleButtonClick}>
            <Text className="text-sm">Подробно</Text>
          </TouchableOpacity>
        </View>

        {/* Column division */}
        <View className="flex-row">
          {/* First col */}
          <View className="flex-1 border-r border-gray-300">
            <Text className="text-lg font-bold text-black">
              {formatBalance(sales.length && sales[0] ? sales[0].sales : '0')}
              <Text style={{fontSize: 14, color: '#b2b2b2', fontWeight: '300'}}>
                {' '}
                {'\u20BD'}
              </Text>
            </Text>

            <Text className="text-xs text-[#b2b2b2]">Сумма</Text>
          </View>

          {/* Second col */}
          <View className="flex-1 pl-5">
            <Text className="text-lg font-bold text-black">
              <Text
                style={{
                  fontSize: 14,
                  color: '#b2b2b2',
                  fontWeight: '300',
                }}></Text>
            </Text>
            <Text className="text-xs text-[#b2b2b2]">По номенк. группам</Text>
          </View>
        </View>
      </View>
      <View className="flex-1 items-center mt-3">
        <Text className="text-xs text-[#b2b2b2]">Данные за текущий день</Text>
      </View>
    </View>
  )
}

export default Sales
