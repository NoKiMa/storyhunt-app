import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@/Theme'
import Card from '../../Components/Card'

const Cards = () => {
  const { Gutters, Layout } = useTheme()
  return (
    <View style={[Layout.fill, Gutters.largePadding, Layout.colCenter]}>
      <View style={[Layout.colCenter]}>
        <Card />
      </View>
    </View>
  )
}

export default Cards
