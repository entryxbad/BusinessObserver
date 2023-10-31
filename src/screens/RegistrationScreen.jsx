// Ваш компонент RegistrationScreen
import {useNavigation} from '@react-navigation/native'
import {encode as base64Encode} from 'base-64'
import React, {useEffect, useState} from 'react'
import {Text, TextInput, TouchableOpacity, View} from 'react-native'
import DeviceInfo from 'react-native-device-info'

import {registerDeviceUrl} from '../constants/Constants'

const RegistrationScreen = ({onRegistrationSuccess}) => {
  const navigation = useNavigation()

  const [step, setStep] = useState(1)
  const [user, setUser] = useState({
    id: '',
    surName: '',
    name: '',
    middleName: '',
    inn: '',
    email: '',
    phoneNumber: '',
    time: '',
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

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handleTimeInput = text => {
    // Удаляем все символы, кроме цифр
    const cleanedText = text.replace(/[^0-9]/g, '')

    // Ограничиваем ввод до 4 символов (например, "2359")
    if (cleanedText.length > 4) {
      return
    }

    // Разделяем текст на часы и минуты
    let hours = cleanedText.slice(0, 2)
    let minutes = cleanedText.slice(2, 4)

    // Проверяем, что часы и минуты являются числами и соответствуют допустимым значениям
    if (
      hours !== '' &&
      (isNaN(hours) || parseInt(hours) < 0 || parseInt(hours) > 23)
    ) {
      hours = ''
    }

    if (
      minutes !== '' &&
      (isNaN(minutes) || parseInt(minutes) < 0 || parseInt(minutes) > 59)
    ) {
      minutes = ''
    }

    // Форматируем ввод с разделителем ":" и обновляем состояние
    const formattedTime = hours + (minutes !== '' ? ':' : '') + minutes
    setUser({...user, time: formattedTime})
  }

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
        onRegistrationSuccess()
        navigation.navigate('WaitScreen')
      })
      .catch(error => {
        console.error('Ошибка регистрации:', error)
        console.error('Ошибка сети или сервера:', error.message)
      })
  }

  const validateTextInput = text => {
    const regex = /^[A-Za-zА-Яа-я ]+$/
    if (regex.test(text) || text === '') {
      return text
    } else {
      return user.surName
    }
  }

  const validateNumberInput = (text, maxChars) => {
    const regex = /^\d+$/
    if (regex.test(text) && text.length <= maxChars) {
      return text
    } else {
      return text.slice(0, -1)
    }
  }

  return (
    <View className="flex-1 justify-center px-2">
      <Text className="text-black text-bold text-3xl mx-auto mb-5">
        Регистрация
      </Text>
      {step === 1 && (
        <View className="space-y-5">
          <TextInput
            className="border-gray-300 border rounded-full pl-5"
            placeholder="Фамилия"
            value={user.surName}
            onChangeText={text =>
              setUser({...user, surName: validateTextInput(text)})
            }
          />
          <TextInput
            className="border-gray-300 border rounded-full pl-5"
            placeholder="Имя"
            value={user.name}
            onChangeText={text =>
              setUser({...user, name: validateTextInput(text)})
            }
          />
          <TextInput
            className="border-gray-300 border rounded-full pl-5"
            placeholder="Отчество"
            value={user.middleName}
            onChangeText={text =>
              setUser({...user, middleName: validateTextInput(text)})
            }
          />
          <TouchableOpacity
            onPress={handleNextStep}
            className="mx-auto bg-[#0dd9e7] py-3 w-52 items-center rounded-full">
            <Text className="text-base font-semibold text-black">Далее</Text>
          </TouchableOpacity>
        </View>
      )}
      {step === 2 && (
        <View className="space-y-5">
          {/* Экран для ввода инн и email */}
          <TextInput
            className="border-gray-300 border rounded-full pl-5"
            placeholder="ИНН"
            value={user.inn}
            onChangeText={text =>
              setUser({...user, inn: validateNumberInput(text, 12)})
            }
            keyboardType="numeric"
          />
          <TextInput
            className="border-gray-300 border rounded-full pl-5"
            placeholder="Email"
            value={user.email}
            onChangeText={text =>
              setUser({...user, email: validateTextInput(text)})
            }
            keyboardType="email-address"
          />
          {/* Другие поля для инн и email */}
          <TouchableOpacity
            onPress={handleNextStep}
            className="mx-auto bg-[#0dd9e7] py-3 px-10 rounded-full">
            <Text className="text-base font-semibold text-black">Далее</Text>
          </TouchableOpacity>
        </View>
      )}
      {step === 3 && (
        <View className="space-y-5">
          {/* Экран для ввода номера телефона и времени для обратной связи */}
          <TextInput
            className="border-gray-300 border rounded-full pl-5"
            placeholder="Номер телефона"
            value={user.phoneNumber}
            onChangeText={text =>
              setUser({...user, phoneNumber: validateNumberInput(text, 12)})
            }
            keyboardType="numeric"
          />
          <TextInput
            className="border-gray-300 border rounded-full pl-5"
            placeholder="Время (HH:mm)"
            value={user.time}
            onChangeText={text => handleTimeInput(text)}
            maxLength={5}
            keyboardType="numeric"
          />
          {/* Другие поля для номера телефона и времени для обратной связи */}
          <TouchableOpacity
            onPress={handleRegistration}
            className="mx-auto bg-[#0dd9e7] py-3 px-10 rounded-full">
            <Text className="text-base font-semibold text-black">
              Зарегистрироваться
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default RegistrationScreen
