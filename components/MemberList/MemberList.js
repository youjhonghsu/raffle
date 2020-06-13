import React, { useCallback } from 'react'
import { FixedSizeList } from 'react-window'
import styles from './MemberList.module.css'

const MemberList = ({ list = [] }) => {
  const row = useCallback(
    ({ index, style }) => {
      const member = list[index]
      return (
        <div
          className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}
          style={style}
        >
          <li className={styles.member}>
            <div className={styles.avatar}>
              <img src={member.avatar} />
            </div>
            <div>{member.name}</div>
          </li>
        </div>
      )
    },
    [list]
  )

  return (
    <div className={styles.root}>
      <FixedSizeList
        className={styles['member-list']}
        itemCount={list.length}
        height={500}
        itemSize={70}
      >
        {row}
      </FixedSizeList>
    </div>
  )
}

export default MemberList
