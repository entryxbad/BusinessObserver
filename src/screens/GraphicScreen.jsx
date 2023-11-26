import React, {useEffect, useState} from 'react'
import {Dimensions, ScrollView, Text, View} from 'react-native'
import {LineChart} from 'react-native-chart-kit'

import Loading from '../components/Loading'
import {fetchSalesChart} from '../config/api'

const GraphicScreen = () => {
  const [salesChart, setSalesChart] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [labels, setLabels] = useState([])

  const updateSalesChart = async () => {
    try {
      const response = await fetchSalesChart()
      const formattedData = response.map(item => ({
        date: new Date(item.date).getDate(),
        total: item.total,
      }))

      // Находим максимальный день в массиве данных
      const maxDay = Math.max(...formattedData.map(item => item.date))

      // Создаем массив меток от 1 до максимального дня
      const labelsArray = Array.from({length: maxDay}, (_, i) => String(i + 1))
      setLabels(labelsArray)

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
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <LineChart
              data={{
                labels: labels,
                datasets: [
                  {
                    data: labels.map(day => {
                      const dataForDay = salesChart.find(
                        item => item.date == day,
                      )
                      return dataForDay ? dataForDay.total : 0
                    }),
                  },
                ],
              }}
              width={Dimensions.get('window').width * 1.5}
              height={220}
              yAxisLabel="₽"
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
                fromZero: true,
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </ScrollView>
        </View>
      )}
    </>
  )
}

export default GraphicScreen
