import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// import { IndexExampleContainer } from '@/Containers'
// import Login from '@/Containers/Login/Index'
import Cards from '@/Containers/Cards'
import { useTheme } from '@/Theme'

const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = () => {
  const { NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      {/* <Stack.Screen name="Login" component={IndexExampleContainer} /> */}
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: '',
        }}
      /> */}
      <Stack.Screen
        name="Cards"
        component={Cards}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator
