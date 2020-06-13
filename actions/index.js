import { createAction } from 'redux-actions'
import { memberListSelector } from '../selector'

export const DRAW = 'DRAW'
export const RESET_WINNER = 'RESET_WINNER'

const getRandom = (x) => {
  return Math.floor(Math.random() * x)
}

export const draw = () => (dispatch, getState) => {
  const memberList = memberListSelector(getState())

  const winner = memberList[getRandom(memberList.length)]

  dispatch(createAction(DRAW)(winner))
}

export const resetWinner = createAction(RESET_WINNER)
