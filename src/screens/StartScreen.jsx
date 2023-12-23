import {Text, TouchableOpacity, View} from 'react-native'

const StartScreen = ({navigation}) => {
  const handleRegistration = () => {
    navigation.navigate('RegistrationScreen')
  }

  return (
    <View className="flex-1 justify-center items-center w-full">
      <TouchableOpacity
        className=" bg-[#0dd9e7] py-3 px-10 w-48 rounded-full mt-5 items-center"
        onPress={handleRegistration}>
        <Text className="text-base font-semibold text-black">Регистрация</Text>
      </TouchableOpacity>
      <TouchableOpacity className="mx-auto bg-[#0dd9e7] py-3 px-10 w-48 rounded-full mt-5 items-center">
        <Text className="text-base font-semibold text-black">Войти</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StartScreen
