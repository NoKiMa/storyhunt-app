import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import FetchOne from './FetchOne'
import ICard from '../../Components/ICard'

// This state is common to all the "user" module, and can be modified by any "user" reducers
const sliceInitialState = {
  item: [] as ICard[],
}

export default buildSlice('user', [FetchOne], sliceInitialState).reducer

export interface UserState {
  // item: {
  //   name: string
  // }
  item: ICard[]
  fetchOne: {
    loading: boolean
    error: any
  }
}
