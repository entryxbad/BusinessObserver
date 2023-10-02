import {useEffect, useState} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {CircleStackIcon} from 'react-native-heroicons/outline'

import {fetchBalance} from '../config/api'
import {formatNumber} from '../config/functions'

const Balance = ({navigation, refreshKey}) => {
  const [balance, setBalance] = useState([])

  const updateBalance = async () => {
    try {
      const response = await fetchBalance()
      setBalance(response)
    } catch (error) {
      console.log('Error from Balance.jsx:', error)
    }
  }

  useEffect(() => {
    updateBalance()
  }, [refreshKey])

  return (
    // Main block
    <View className="flex-1 bg-white border border-gray-300 m-1 py-3">
      {/* Header */}
      <View className="space-y-4 px-5">
        <View className="flex-row items-center justify-between">
          <View className="flex-row space-x-2">
            <CircleStackIcon color={'black'} size={18} />
            <Text className="text-sm text-[#b2b2b2]">Остаток</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('BalanceDetail', {balanceData: balance})
            }>
            <Text>Подробно</Text>
          </TouchableOpacity>
        </View>

        {/* Column division */}
        <View className="flex-row">
          {/* First col */}
          <View className="flex-1 border-r border-gray-300">
            <Text className="text-lg font-bold text-black">
              {formatNumber(
                balance.find(item => item.accountName === 'Расчетные счета')
                  ?.balance,
              )}{' '}
              <Text style={{fontSize: 14, color: '#b2b2b2', fontWeight: '300'}}>
                {'\u20BD'}
              </Text>
            </Text>
            <Text className="text-xs text-[#b2b2b2]">Банк</Text>
          </View>

          {/* Second col */}
          <View className="flex-1 pl-5">
            <Text className="text-lg font-bold text-black">
              {formatNumber(
                balance.find(item => item.accountName === 'Касса организации')
                  ?.balance || 0,
              )}{' '}
              <Text style={{fontSize: 14, color: '#b2b2b2', fontWeight: '300'}}>
                {'\u20BD'}
              </Text>
            </Text>
            <Text className="text-xs text-[#b2b2b2]">Касса</Text>
          </View>
        </View>
      </View>
      <View className="flex-1 items-center mt-3">
        <Text className="text-xs text-[#b2b2b2]">Данные за текущий день</Text>
      </View>
    </View>
  )
}

export default Balance
