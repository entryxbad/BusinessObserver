import {Text, TouchableOpacity, View} from 'react-native'

const AuthScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity className="bg-[#0dd9e7] rounded-full p-3">
        <Text className="text-2xl text-black">Получить доступ</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AuthScreen
