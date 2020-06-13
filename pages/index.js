import React from 'react'
import useRaffle from '../hooks/useRaffle'
import Layout from '../components/Layout'
import Countdown from '../components/Countdown'
import MemberList from '../components/MemberList'
import Winner from '../components/Winner'

function Home() {
  const [raffleData, actions] = useRaffle()
  return (
    <Layout title="Create Next App">
      {!raffleData.winner ? (
        <>
          <Countdown onTimeout={actions.draw} />
          <MemberList list={raffleData.memberList} />
        </>
      ) : (
        <Winner member={raffleData.winner} onClose={actions.reset} />
      )}
    </Layout>
  )
}

export default Home
