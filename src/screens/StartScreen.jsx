import {useEffect, useState} from 'react'
import {Alert, Text, TouchableOpacity, View} from 'react-native'
import DeviceInfo from 'react-native-device-info'

import Loading from '../components/Loading'
import {fetchLicense1} from '../config/api'
import {getItem, setItem} from '../config/storeData'

const StartScreen = ({navigation}) => {
  const [deviceUniqueId, setDeviceUniqueId] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchDeviceId = async () => {
      try {
        const storedDeviceId = await getItem('deviceUniqueId')
        if (storedDeviceId) {
          setDeviceUniqueId(storedDeviceId)
        } else {
          const deviceId = await DeviceInfo.getUniqueId()
          setDeviceUniqueId(deviceId)
          setTimeout(() => setItem('deviceUniqueId', deviceId), 100)
        }
      } catch (error) {
        console.error(
          'Ошибка при получении/сохранении уникального идентификатора устройства:',
          error,
        )
      }
    }

    fetchDeviceId()
  }, [])

  const handleRegistration = () => {
    navigation.navigate('RegistrationScreen')
  }

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      const licenseData = await fetchLicense1()
      console.log('Данные из fetchLicense1:', licenseData)

      // Извлекаем адрес сервера из данных о лицензии
      const serverAddress = licenseData[0].serverAddress

      // Сохраняем адрес сервера в AsyncStorage
      await setItem('serverAddress', serverAddress)

      if (licenseData[0].status === 'Действительна' && serverAddress) {
        navigation.navigate('MainTab')
      } else {
        Alert.alert('Ваше устройство пока не зарегистрировано')
      }
    } catch (error) {
      console.error('Ошибка при проверке лицензии:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View className="flex-1 justify-center items-center w-full">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <View className="w-96 items-center">
            <Text className="text-black text-xl font-bold text-center mb-4">
              Добро пожаловать!
            </Text>
            <Text className="text-black text-base text-center mb-4">
              Если у Вас ещё нет аккаунта, тогда приступите к регистрации.
            </Text>
            <Text className="text-black text-base text-center mb-4">
              Если Вы регистрировались ранее, просто нажмите на кнопку "Войти".
            </Text>
          </View>

          <TouchableOpacity
            className=" bg-[#0dd9e7] py-3 px-10 w-48 rounded-full mt-5 items-center"
            onPress={handleRegistration}>
            <Text className="text-base font-semibold text-black">
              Регистрация
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="mx-auto bg-[#0dd9e7] py-3 px-10 w-48 rounded-full mt-5 items-center"
            onPress={handleLogin}>
            <Text className="text-base font-semibold text-black">Войти</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  )
}

export default StartScreen
