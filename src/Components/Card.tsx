import React from 'react'
import { View, Text, Animated, Image } from 'react-native'
import { useTheme } from '@/Theme'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import ICard from './ICard'

interface CardProps {
  card: ICard
  isFinish: () => null
}

const Card = (props: CardProps) => {
  const { Common, Fonts, Gutters, Layout, Images } = useTheme()

  return (
    <View
      style={[
        Common.card.rounded,
        Gutters.regularBMargin,
        // { backgroundColor: 'green' },
      ]}
    >
      <View style={[Layout.fill, Layout.fullWidth, Layout.row]}>
        <View
          style={[
            Gutters.smallVMargin,
            Gutters.largeRMargin,
            Gutters.smallVMargin,
            Layout.fill,
            Layout.colCenter,
            // { backgroundColor: 'red' },
          ]}
        >
          <Image
            source={{ uri: `${props.card.url}`, width: 100, height: 100 }}
            // style={[Gutters.largeVMargin, Gutters.largeRMargin]}
            resizeMode={'contain'}
          />
        </View>
        <View style={[Gutters.largeVMargin, Layout.fill, Layout.colCenter]}>
          <CountdownCircleTimer
            isPlaying
            size={100}
            duration={5} ///need 20
            onComplete={() => {
              // do your stuff here
              props.isFinish
              // return [true, 1000] // repeat animation in 1.5 seconds
            }}
            colors={[['#4EC5F1', 0.5], ['#F7B801', 0.3], ['#A30000']]}
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
        <Text
          style={[
            Fonts.textLeft,
            Layout.fillWidth,
            Gutters.smallVMargin,
            Fonts.textRegular,
          ]}
        >
          {props.card.title}
        </Text>
        <Text> {props.card.body}</Text>
      </View>
    </View>
  )
}

export default Card
