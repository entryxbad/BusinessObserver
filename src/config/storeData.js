import AsyncStorage from '@react-native-async-storage/async-storage'

const getItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (!value) {
      return null
    }
    return JSON.parse(value)
  } catch (error) {
    return null
  }
}

const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.log('Ошибка сохранения в локальное хранилище')
  }
}

export {getItem, setItem}
