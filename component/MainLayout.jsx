import React, { } from 'react';
import Head from 'next/head';



function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout