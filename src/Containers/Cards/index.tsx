import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { View, Text } from 'react-native'
import { useTheme } from '@/Theme'
import Card from '../../Components/Card'
import { UserState } from '@/Store/User'

const Cards = () => {
  const cards = useSelector((state: { user: UserState }) => state.user.item)
  // console.log('user', user);
  const { Gutters, Layout } = useTheme()

  const heandelDelete = (id: number) => {
    console.log('delete')
  }

  return (
    <View style={[Layout.fill, Gutters.largePadding, Layout.colCenter]}>
      <View style={[Layout.colCenter]}>
        {cards.map(card => (
          <View key={card.id}>
            <Card card={card} isFinish={heandelDelete(card.id)} />
          </View>
        ))}
      </View>
    </View>
  )
}

export default Cards
