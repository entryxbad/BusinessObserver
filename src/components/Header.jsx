import {Image, TouchableOpacity, View} from 'react-native'
import {ArrowPathIcon, UserCircleIcon} from 'react-native-heroicons/outline'

import {logo} from '../config/images'

const Header = ({handleRefresh}) => {
  return (
    <View className="flex-row bg-white w-full h-11 shadow-sm mb-3 items-center justify-between px-2">
      <TouchableOpacity>
        <UserCircleIcon color={'#0dd9e7'} size={28} />
      </TouchableOpacity>
      <View>
        <Image className="w-48 h-12" source={logo} />
      </View>
      <View>
        <TouchableOpacity onPress={handleRefresh}>
          <ArrowPathIcon color={'black'} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header
