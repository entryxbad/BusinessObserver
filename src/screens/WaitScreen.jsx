import {Text, TouchableOpacity, View} from 'react-native'

const WaitScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-sm">
        Пожалуйста, подождите подтверждения регистрации.
      </Text>
      <TouchableOpacity className="mx-auto bg-[#0dd9e7] py-3 w-52 items-center px-10 rounded-full mt-5">
        <Text className="text-base font-semibold text-black">Войти</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WaitScreen
