import React, { useCallback, useEffect } from 'react'
import useCountdown from '../../hooks/useCountdown'
import styles from './Countdown.module.css'

const MINUTE = 60
const SECOND = 1

const MAXIMUM_SECOND = 180

const Countdown = ({ onTimeout }) => {
  const [timer, actions, status] = useCountdown(MAXIMUM_SECOND)

  const handleStartClick = useCallback(() => {
    actions.start()
  }, [actions])

  const handleStopClick = useCallback(() => {
    actions.stop()
  }, [actions])

  const [minute, second] = [MINUTE, SECOND].map((unit) => {
    return ('0' + (Math.floor(timer / unit) % 60)).slice(-2)
  })

  const handleChange = (event) => {
    if (event.target.value === 0) {
      return
    }
    actions.reset(event.target.value)
  }

  useEffect(() => {
    if (timer === 0 && onTimeout) onTimeout()
  }, [timer, onTimeout])

  return (
    <div className={styles.root}>
      <div className={styles['slider-wrapper']}>
        <div className={styles.bar}>
          <div className={styles.time}>{`${minute}:${second}`}</div>
          {!status.isStart ? (
            <button onClick={handleStartClick}> 開始 </button>
          ) : (
            <button onClick={handleStopClick}> 暫停 </button>
          )}
        </div>
        <input
          className={styles.slider}
          type="range"
          min="0"
          max={MAXIMUM_SECOND}
          step="1"
          value={timer}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Countdown
