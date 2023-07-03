import React from 'react'
import TopHeader from './TopHeader/TopHeader'
import Header from './Header'
import Footer from './Footer'


const Layout = ({ children }) => {
  return (
    <>
    
    <Header/>
        
        {children}
<Footer />
    </>
  )
}

export default Layout
