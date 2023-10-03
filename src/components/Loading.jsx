import {ActivityIndicator, Text, View} from 'react-native'

const Loading = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size={'large'} color={'#0dd9e7'} />
      <Text className="text-xl text-black font-semibold">
        Загрузка данных...
      </Text>
    </View>
  )
}

export default Loading
