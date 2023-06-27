import React from 'react'
import TopHeader from '.'
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
