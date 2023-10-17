import {encode as base64Encode} from 'base-64'
import React, {useEffect, useState} from 'react'
import {Text, TextInput, TouchableOpacity, View} from 'react-native'
import DeviceInfo from 'react-native-device-info'

import {registerDeviceUrl} from '../constants/Constants'

const RegistrationScreen = ({navigation}) => {
  const [user, setUser] = useState({
    id: '',
    surName: '',
    name: '',
    middleName: '',
    inn: '',
    configuration: 'БухгалтерияПредприятия',
  })

  useEffect(() => {
    DeviceInfo.getUniqueId()
      .then(deviceId => {
        setUser({...user, id: deviceId})
      })
      .catch(error => {
        console.error(
          'Ошибка получения уникального идентификатора устройства:',
          error,
        )
      })
  }, [])

  const handleRegistration = () => {
    const username = 'admin'
    const password = '12345An'

    console.log('Отправляем на сервер:', user)
    fetch(`${registerDeviceUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${base64Encode(`${username}:${password}`)}`,
      },
      body: JSON.stringify(user),
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          console.error('HTTP-запрос не успешен, статус:', response.status)
          throw new Error('Ошибка сети или сервера')
        }
      })
      .then(data => {
        console.log('Успешный ответ от сервера:', data)
        navigation.navigate('HomeTab')
      })
      .catch(error => {
        console.error('Ошибка регистрации:', error)
        console.error('Ошибка сети или сервера:', error.message)
      })
  }

  return (
    <View className="flex-1 justify-center px-2 space-y-3">
      <Text className="text-black text-bold text-3xl mx-auto">Регистрация</Text>
      <TextInput
        className="border-gray-300 border rounded-full pl-5"
        placeholder="Фамилия"
        value={user.surName}
        onChangeText={text => setUser({...user, surName: text})}
      />
      <TextInput
        className="border-gray-300 border rounded-full pl-5"
        placeholder="Имя"
        value={user.name}
        onChangeText={text => setUser({...user, name: text})}
      />
      <TextInput
        className="border-gray-300 border rounded-full pl-5"
        placeholder="Отчество"
        value={user.middleName}
        onChangeText={text => setUser({...user, middleName: text})}
      />
      <TextInput
        className="border-gray-300 border rounded-full pl-5"
        placeholder="ИНН"
        value={user.inn}
        onChangeText={text => setUser({...user, inn: text})}
      />

      <TouchableOpacity
        onPress={() => {
          handleRegistration()
        }}
        className="mx-auto bg-[#0dd9e7] py-3 px-10 rounded-full">
        <Text className="text-base font-semibold text-black">Регистрация</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RegistrationScreen
