import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import SaveAuthData from './Auth'

export default buildSlice('auth', [SaveAuthData]).reducer

// export interface StartupState {
//   loading: boolean
//   error: any
// }