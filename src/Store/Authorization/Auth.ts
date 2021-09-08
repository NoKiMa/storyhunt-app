import {
  buildAsyncState,
  buildAsyncActions,
  buildAsyncReducers,
} from '@thecodingmachine/redux-toolkit-wrapper'
import { navigate } from '@/Navigators/Root'
import saveAuthDataService from '@/Services/User/SaveLoginData'

interface SaveLoginDataProps {
  login: string
  password: string
}

export default {
  initialState: buildAsyncState(),
  action: buildAsyncActions(
    'auth/save_data',
    async (props: SaveLoginDataProps) => {
      console.log('props', props)
      saveAuthDataService(props.login, props.password)
      navigate('Cards')
    },
  ),
  reducers: buildAsyncReducers({ itemKey: null }),
}
