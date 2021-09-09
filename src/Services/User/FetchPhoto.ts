import axios from 'axios'
import { Config } from '@/Config'

export default async () => {
  // const response = await axios.create({
  //   baseURL: Config.POTO_API_URL,
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   timeout: 3000,
  // })
  const response = await axios.get('https://picsum.photos/200')
  const data = await response.data
  console.log('response.data', data)
  return response.data
}
