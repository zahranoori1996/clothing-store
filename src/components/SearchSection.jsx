import React from 'react'
import search from './../assets/icons/search.svg';
import user from './../assets/icons/user.svg';
import heart from './../assets/icons/heart.svg';
import bag from './../assets/icons/shopping-bag.svg';

export default function SearchSection() {
  return (
  <div className='border-b-2 border-b-[#EDEDED]'>
      <div className='container flex justify-between'>
        <div className="logo">
          <h2 className='text-2xl text-black font-bold'>UrbanMart</h2>
        </div>
      <div className="flex justify-between searchBox border-[#EDEDED] border-2 w-[50%] text-left rounded-lg p-2">
        <input className='w-[90%] focus:outline-0' placeholder='Enter your product name.... '/>
        <button><img src={search}/></button>
      </div>
      <div className="info flex w-[150px] justify-between">
        <img src={user}/>
        <img src={heart}/>
        <img src={bag}/>
      </div>
    </div>
  </div>
  )
}
