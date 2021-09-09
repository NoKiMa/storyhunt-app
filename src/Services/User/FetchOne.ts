import api from '@/Services'
import handleError from '@/Services/utils/handleError'
// import fetchPhoto from './FetchPhoto'
import ICard from '../../Components/ICard'

export default async (userId: string) => {
  if (!userId) {
    return handleError({ message: 'User ID is required' })
  }
  const response = await api.get(`users/${userId}/posts`)
  const dataWithImage: ICard[] = response.data.map((post: any) => {
    // return { ...post, url: 'https://picsum.photos/150?random=1' }
    return {
      id: post.id,
      title: post.title,
      body: post.body,
      url: `https://picsum.photos/150?random=${post.id}`,
    }
  })
  console.log('dataWithImage', dataWithImage)
  return dataWithImage
}
