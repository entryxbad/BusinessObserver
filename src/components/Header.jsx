import {Text, View} from 'react-native'
import {UserCircleIcon} from 'react-native-heroicons/outline'

const Header = () => {
  return (
    <View className="flex-row bg-white w-full h-11 shadow-sm mb-3 items-center">
      <View className="p-2 w-0">
        <UserCircleIcon color={'red'} size={28} />
      </View>
      <View className="mx-auto">
        <Text>Ufarobotics Mobile</Text>
      </View>
    </View>
  )
}

export default Header
