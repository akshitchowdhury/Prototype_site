import React from 'react'
// import "../side bar/SideBar"
// import "../Context/Context"
import SideBar from '../side bar/SideBar'
import Context from '../Context/Context'
import Footer from '../Footer/Footer'

const BodyBlock = () => {
  return (
    <div className='main'>
        <SideBar className="child"/>
        {/* <Context className="child"/> */}
        {/* <Footer/> */}
    </div>
  )
}

export default BodyBlock
