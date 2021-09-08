import AsyncStorage from '@react-native-async-storage/async-storage'

export default async (login: string, password: string) => {
  const data = { login, password }
  AsyncStorage.setItem('user', JSON.stringify(data))
  console.log('value', await AsyncStorage.getItem('user'))
}
