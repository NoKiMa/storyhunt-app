import { StyleSheet } from 'react-native'
import { ThemeCommonParams } from '@/Theme/theme.type'

export default function ({ Colors, Gutters, Layout }: ThemeCommonParams) {
  const base = {
    ...Layout.center,
    ...Gutters.largeHPadding,
    height: 400,
    width: 250,
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderWidth: 2,
  }
  const rounded = {
    ...base,
    borderRadius: 15,
  }

  return StyleSheet.create({
    base,
    rounded,
    outline: {
      ...base,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
  })
}
