import React from 'react'
import Head from 'next/head'

function Layout({ children, title }) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  )
}

export default Layout
