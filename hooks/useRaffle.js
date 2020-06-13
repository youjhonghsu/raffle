import { useMemo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { draw, resetWinner } from '../actions'
import { memberListSelector, winnerSelector } from '../selector'

export default () => {
  const dispatch = useDispatch()
  const memberList = useSelector(memberListSelector)
  const winner = useSelector(winnerSelector)

  const handleDraw = useCallback(() => {
    dispatch(draw())
  }, [])

  const handleResetWinner = useCallback(() => {
    dispatch(resetWinner())
  }, [])

  const data = useMemo(() => {
    return {
      memberList,
      winner,
    }
  }, [memberList, winner])

  const actions = useMemo(() => {
    return {
      draw: handleDraw,
      reset: handleResetWinner,
    }
  }, [])

  return [data, actions]
}
