import {useState} from 'react'
import {ScrollView, SafeAreaView} from 'react-native'

import Balance from '../components/Balance'
import Consumption from '../components/Consumption'
import Header from '../components/Header'
import Receipts from '../components/Receipts'
import Sales from '../components/Sales'

const HomeScreen = ({navigation}) => {
  const [refreshKey, setRefreshKey] = useState(0)

  const handleRefresh = () => {
    setRefreshKey(prevKey => prevKey + 1)
  }
  return (
    <SafeAreaView className="bg-[#f5f5f5] flex-1 relative">
      <Header handleRefresh={handleRefresh} />
      <ScrollView>
        <Balance navigation={navigation} refreshKey={refreshKey} />
        <Receipts navigation={navigation} refreshKey={refreshKey} />
        <Consumption navigation={navigation} refreshKey={refreshKey} />
        <Sales navigation={navigation} refreshKey={refreshKey} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
