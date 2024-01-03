import React from 'react'
import Search from '../components/Search'
import { PhotoCard, ProfileCard } from '../components/Card'
// import Login from '../components/Login'

const Home = () => {
  return (
   <>
   <Search />
   <div className='ml-14'>
    <ProfileCard />
   </div>
   
   {/* <Login /> */}
   <div></div>
   </>
  )
}

export default Home