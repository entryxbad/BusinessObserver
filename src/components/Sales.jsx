import {Text, View} from 'react-native'
import {BanknotesIcon} from 'react-native-heroicons/outline'

const Sales = () => {
  return (
    // Main block
    <View className="flex-1 bg-white border border-gray-300 m-1 py-5">
      {/* Header */}
      <View className="space-y-4 px-5">
        <View className="flex-row items-center space-x-2">
          <BanknotesIcon color={'black'} size={18} />
          <Text className="text-sm text-[#b2b2b2]">Продажи</Text>
        </View>

        {/* Column division */}
        <View className="flex-row">
          {/* First col */}
          <View className="flex-1 border-r border-gray-300">
            <Text className="text-lg font-bold text-black">
              8 346 789{' '}
              <Text style={{fontSize: 14, color: '#b2b2b2', fontWeight: '300'}}>
                {'\u20BD'}
              </Text>
            </Text>

            <Text className="text-xs text-[#b2b2b2]">Сумма</Text>
          </View>

          {/* Second col */}
          <View className="flex-1 pl-5">
            <Text className="text-lg font-bold text-black">
              1200{' '}
              <Text style={{fontSize: 14, color: '#b2b2b2', fontWeight: '300'}}>
                {'\u20BD'}
              </Text>
            </Text>
            <Text className="text-xs text-[#b2b2b2]">По номен. группам</Text>
          </View>
        </View>
      </View>
      <View className="flex-1 justify-center"></View>
    </View>
  )
}

export default Sales
