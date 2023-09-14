import {Text, TouchableOpacity, View} from 'react-native'
import {DocumentTextIcon} from 'react-native-heroicons/outline'

const CreateDocument = () => {
  return (
    <View className="flex-1 bg-white border border-gray-300 m-1 py-5">
      <View className="flex-1 px-5 space-y-10 justify-center">
        <View className="flex-row space-x-2">
          <DocumentTextIcon color={'black'} size={18} />
          <Text className="text-sm text-[#b2b2b2]">Документы</Text>
        </View>
        <TouchableOpacity className="bg-[#fddf59] rounded-md p-2 items-center">
          <Text className="text-sm text-black uppercase">Создать документ</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CreateDocument
