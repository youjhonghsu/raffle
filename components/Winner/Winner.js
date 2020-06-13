import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import styles from './Winner.module.css'

const Winner = ({ member, onClose }) => {
  if (!member) return null
  const [canClose, setCanClose] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setCanClose(true)
    }, 6000)
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={classnames(styles.envelope, styles.open)}>
          <div className={classnames(styles.flap, styles.front)}></div>
          <div className={classnames(styles.flap, styles.top)}></div>
          <div className={classnames(styles.letter)}>
            <div className={styles.member}>
              <div className={styles.avatar}>
                <img src={member.avatar}></img>
              </div>
              <div>{member.name}</div>
            </div>
          </div>
        </div>
      </div>
      {canClose && (
        <button className={styles.button} onClick={onClose}>
          再一次
        </button>
      )}
    </div>
  )
}

export default Winner
