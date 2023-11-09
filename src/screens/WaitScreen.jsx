import {Alert, Text, TouchableOpacity, View} from 'react-native'

import {fetchLicense1} from '../config/api'

const WaitScreen = ({navigation}) => {
  const handleCheckLicense = async () => {
    try {
      const licenseData = await fetchLicense1()
      console.log('Данные из fetchLicense1:', licenseData)

      if (licenseData[0].status === 'Действительна') {
        navigation.navigate('HomeTab')
      } else {
        Alert.alert('Ваша лицензия ещё не активирована.')
      }
    } catch (error) {
      console.error('Ошибка при проверке лицензии:', error)
    }
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-sm">
        Пожалуйста, подождите подтверждения регистрации.
      </Text>
      <TouchableOpacity
        onPress={() => handleCheckLicense()}
        className="mx-auto bg-[#0dd9e7] py-3 w-52 items-center px-10 rounded-full mt-5">
        <Text className="text-base font-semibold text-black">Войти</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WaitScreen
