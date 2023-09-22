import {Text, TouchableOpacity, View} from 'react-native'
import {UserCircleIcon} from 'react-native-heroicons/outline'

const Header = () => {
  return (
    <View className="flex-row bg-white w-full h-11 shadow-sm mb-3 items-center justify-between px-2">
      <View className="w-0">
        <UserCircleIcon color={'red'} size={28} />
      </View>
      <View>
        <Text>Ufarobotics Mobile</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header
