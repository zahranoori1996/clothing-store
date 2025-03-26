import React from 'react';
import facebook from './../assets/icons/icons8-facebook.svg'
import twitter from './../assets/icons/icons8-twitter-bird.svg'
import instagram from './../assets/icons/icons8-instagram.svg'
import linkedin from './../assets/icons/icons8-linkedin.svg'
import arrowDown from './../assets/icons/arrow-down.svg'



export default function SocialMedia() {
  return (
    <div className='flex justify-between w-[100vw]'>
    <div className='flex'>
        <img src={facebook} alt='facebook'/>
        <img src={twitter} alt='twitter'/>
        <img src={instagram} alt='instagram'/>
        <img src={linkedin} alt='linkedin'/>
    </div>
    <h4 className='text-[#707070] font-semibold'>FREE SHIPPING THIS WEEK ORDER OVER - $55</h4>
    <div className='text-[#707070] flex gap-1'>
        <div className="flex">
            <span>USD $</span>
            <img src={arrowDown} />
        </div>
        <div className="flex">
        <span>ENGLISH</span>
        <img src={arrowDown} />
        </div>
    </div>
    </div>
  )
}
