import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { Brand } from '@/Components'
import { useTheme } from '@/Theme'
import Auth from '@/Store/Authorization/Auth'
import { useTranslation } from 'react-i18next'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Login = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const saveAuthData = () => {
    if (login.length !== 0 && password.length !== 0) {
      dispatch(Auth.action({ login, password }))
      setLogin('')
      setPassword('')
    } else if (login.length === 0) {
      Alert.alert('Fill in login field correctly')
    } else if (password.length === 0) {
      Alert.alert('Fill in password field correctly')
    } else {
      Alert.alert('Fill in the all fields correctly')
    }
  }

  return (
    <View style={[Layout.colCenter, Gutters.smallHPadding]}>
      <View style={[[Layout.colCenter, Gutters.largeVMargin]]}>
        <Brand />
      </View>
      <View
        style={[
          Layout.row,
          Layout.rowHCenter,
          Gutters.smallHPadding,
          Gutters.smallVMargin,
          Common.backgroundPrimary,
          { borderRadius: 10 },
        ]}
      >
        <Text
          style={[
            Layout.fill,
            Fonts.textCenter,
            Fonts.textSmall,
            { color: Colors.white },
          ]}
        >
          {t('login.labels.login')}
        </Text>
        <TextInput
          onChangeText={setLogin}
          value={login}
          selectTextOnFocus
          style={[
            Layout.fill,
            Common.textInput,
            { borderRadius: 5 },
            Fonts.textLeft,
            Gutters.smallHPadding,
          ]}
        />
      </View>
      <View
        style={[
          Layout.row,
          Layout.rowHCenter,
          Gutters.smallHPadding,
          Gutters.largeVMargin,
          Common.backgroundPrimary,
          { borderRadius: 10 },
        ]}
      >
        <Text
          style={[
            Layout.fill,
            Fonts.textCenter,
            Fonts.textSmall,
            { color: Colors.white },
          ]}
        >
          {t('login.labels.password')}
        </Text>
        <TextInput
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          style={[
            Layout.fill,
            Common.textInput,
            { borderRadius: 5 },
            Fonts.textLeft,
            Gutters.smallHPadding,
          ]}
        />
      </View>

      <TouchableOpacity
        style={[Common.button.rounded, Gutters.regularBMargin]}
        onPress={saveAuthData}
      >
        <Text style={[Fonts.textRegular, { color: Colors.white }]}>
          {t('login.buttons.enter')}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login
