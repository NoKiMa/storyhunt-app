import React from 'react'
import { View, Text, Animated } from 'react-native'
import { useTheme } from '@/Theme'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import Cards from '@/Containers/Cards'

interface CardProps {
  id: number
  title: string
  description: string
}

const Card = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()

  return (
    <View
      style={[
        Common.card.rounded,
        Gutters.regularBMargin,
        // { backgroundColor: 'green' },
      ]}
    >
      <View style={[Layout.fill, Layout.fullWidth, Layout.row]}>
        <View style={[Gutters.largeVMargin, Layout.fill]}>
          <Text
            // style={[Gutters.largeVMargin]}
          >
            Imege
          </Text>
        </View>
        <View style={[Gutters.largeVMargin, Layout.fill]}>
          <CountdownCircleTimer
            isPlaying
            size={110}
            duration={10}
            colors={[['#4EC5F1', 0.33], ['#F7B801', 0.33], ['#A30000']]}
          >
            {({ remainingTime, animatedColor }) => (
              <Animated.Text style={{ color: animatedColor }}>
                {remainingTime}
              </Animated.Text>
            )}
          </CountdownCircleTimer>
        </View>
      </View>
      <View style={[Layout.fill, Layout.fullWidth, Layout.colHCenter]}>
        <Text style={[Fonts.textLeft, Layout.fillWidth]}>TITLE</Text>
        <Text> Description</Text>
      </View>
    </View>
  )
}

export default Card
