import React, {useEffect, useState} from 'react'
import {Dimensions, Text, View} from 'react-native'
import {LineChart} from 'react-native-chart-kit'

import Loading from '../components/Loading'
import {fetchSalesChart} from '../config/api'

const GraphicScreen = () => {
  const [salesChart, setSalesChart] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const updateSalesChart = async () => {
    try {
      const response = await fetchSalesChart()
      const formattedData = response.map(item => ({
        date: new Date(item.date).getDate(),
        total: item.total,
      }))
      setSalesChart(formattedData)
      setIsLoading(false)
    } catch (error) {
      console.log('Ошибка в GraphicScreen.jsx:', error)
    }
  }

  useEffect(() => {
    updateSalesChart()
  }, [])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <View className="flex-1 items-center">
          <Text className="mt-5">Продажи</Text>
          <LineChart
            data={{
              labels: salesChart.map(item => String(item.date)),
              datasets: [
                {
                  data: salesChart.map(item => item.total),
                },
              ],
            }}
            width={Dimensions.get('window').width}
            height={220}
            yAxisLabel="₽"
            // yAxisSuffix="т."
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: '#80B3FF',
              backgroundGradientFrom: '#687EFF',
              backgroundGradientTo: '#80B3FF',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
      )}
    </>
  )
}

export default GraphicScreen
