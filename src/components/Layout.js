import React from 'react'
import TopHeader from './TopHeader/TopHeader'
import Header from './Header'


const Layout = ({ children }) => {
  return (
    <>
    
    <Header/>
        
        {children}

    </>
  )
}

export default Layout
