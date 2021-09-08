import React from 'react'
import { View, Text } from 'react-native'

interface CardProps {
  id: number
  title: string
  description: string
}

const Card = () => {
  return (
    <View>
      <Text>TEXT FOR CARD</Text>
    </View>
  )
}

export default Card
