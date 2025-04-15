import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
   <section className="topBarSection">
        <div className="companyTitle">
            <Link to='/' className='link'>
            <h1>7 HILLS FOOD DELIVERY</h1>
            </Link>
        </div>
        
       
   </section>
  )
}

export default TopBar
