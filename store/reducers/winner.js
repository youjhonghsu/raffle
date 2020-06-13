import { handleActions } from 'redux-actions'
import { DRAW, RESET_WINNER } from '../../actions'

const initState = null

export default handleActions(
  {
    [DRAW]: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      }
    },
    [RESET_WINNER]: () => {
      return initState
    },
  },
  initState
)
