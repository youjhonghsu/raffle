import { useState, useEffect, useMemo, useCallback, useRef } from 'react'

const STATE = {
  START: 'start',
  STOP: 'stop',
}

export default (defaultTimer) => {
  const [timer, setTimer] = useState(defaultTimer)
  const [state, setState] = useState(STATE.STOP)
  const stateRef = useRef(null)

  const handleStopCountdown = useCallback(() => {
    setState(STATE.STOP)
  }, [])

  const handleStartCountdown = useCallback(() => {
    setState(STATE.START)
  }, [])

  const handleResetCountdown = useCallback(
    (t) => {
      setTimer(t || defaultTimer)
      setState(STATE.STOP)
    },
    [defaultTimer]
  )

  useEffect(() => {
    const clkInterval = setInterval(() => {
      switch (stateRef.current) {
        case STATE.START: {
          setTimer((timer) => (timer > 0 ? timer - 1 : 0))
          break
        }
        case STATE.STOP: {
          break
        }
      }
    }, 1000)

    return () => {
      clearInterval(clkInterval)
    }
  }, [])

  useEffect(() => {
    stateRef.current = state
  }, [state])

  const actions = useMemo(() => {
    return {
      start: handleStartCountdown,
      stop: handleStopCountdown,
      reset: handleResetCountdown,
    }
  }, [])

  const status = useMemo(() => {
    return { isStart: state === STATE.START }
  }, [state])

  return [timer, actions, status]
}
