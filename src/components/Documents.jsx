import {Text, TouchableOpacity, View} from 'react-native'

const Documents = () => {
  return (
    <View className="flex-1 bg-white border border-gray-300 m-1 py-5">
      <View className="flex-1 px-5 space-y-10 justify-center">
        <View>
          <Text className="text-sm text-[#b2b2b2]">Документы</Text>
        </View>
        <TouchableOpacity className="bg-[#fddf59] rounded-md p-2 items-center">
          <Text className="text-sm text-black uppercase">Создать документ</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Documents
