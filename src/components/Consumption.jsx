import {useEffect, useState} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {CreditCardIcon} from 'react-native-heroicons/outline'

import {fetchConsumption} from '../config/api'

const Consumption = ({navigation}) => {
  const [consumption, setConsumption] = useState(0)

  const updateConsumption = async () => {
    try {
      const response = await fetchConsumption()
      setConsumption(response)
    } catch (error) {
      console.log('Error from Consumption.jsx:', error)
    }
  }

  useEffect(() => {
    updateConsumption()
  }, [])

  return (
    // Main block
    <View className="flex-1 bg-white border border-gray-300 m-1 py-5">
      {/* Header */}
      <View className="space-y-4 px-5">
        <View className="flex-row items-center justify-between">
          <View className="flex-row space-x-2">
            <CreditCardIcon color={'black'} size={18} />
            <Text className="text-sm text-[#b2b2b2]">Расход</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ConsumptionDetail')}>
            <Text>Подробно</Text>
          </TouchableOpacity>
        </View>

        {/* Column division */}
        <View className="flex-row">
          {/* First col */}
          <View className="flex-1 border-r border-gray-300">
            <Text className="text-lg font-bold text-red-500">
              {consumption.length && consumption[0]
                ? consumption[0].consumption
                : 'Нет данных'}{' '}
              <Text style={{fontSize: 14, color: '#b2b2b2', fontWeight: '300'}}>
                {'\u20BD'}
              </Text>
            </Text>
            <Text className="text-xs text-[#b2b2b2]">Банк</Text>
          </View>

          {/* Second col */}
          <View className="flex-1 pl-5">
            <Text className="text-lg font-bold text-red-500">
              {consumption.length && consumption[0]
                ? consumption[0].consumption
                : 'Нет данных'}{' '}
              <Text style={{fontSize: 14, color: '#b2b2b2', fontWeight: '300'}}>
                {'\u20BD'}
              </Text>
            </Text>
            <Text className="text-xs text-[#b2b2b2]">Касса</Text>
          </View>
        </View>
      </View>
      <View className="flex-1 justify-center"></View>
    </View>
  )
}

export default Consumption
