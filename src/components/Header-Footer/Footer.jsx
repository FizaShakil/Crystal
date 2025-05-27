import React from 'react'
import SubscribeToNewsletter from './SubscribeToNewsletter'
import { LinkMain, FooterLink } from './TempLinks'
import Logo from '../Reusable/Logo'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div>
        <SubscribeToNewsletter/>
        <div className='ml-6 mb-10 md:flex mt-8 md:justify-between'>
    <div className="text-2xl font-bold md:relative mt-2 md:top-2">
      <div className='mb-8'>
           <Logo/>
      </div>
            <div className='flex w-[150px] justify-between gap-3'>
              <Link to={'https://www.facebook.com'} target="_blank">
                 <i className='fa-facebook fa-brands border-2 p-3 rounded-full border-orange-600'></i>
              </Link>
              <Link to={'https://www.twitter.com'} target="_blank">
                 <i className='fa-twitter fa-brands border-2 p-3 rounded-full border-orange-600'></i>
              </Link>
              <Link to={'https://www.tiktok.com'} target="_blank">
                 <i className='fa-tiktok fa-brands border-2 p-3 rounded-full border-orange-600'></i>
              </Link>
               <Link to={'https://www.instagram.com'} target="_blank">  
                 <i className='fa-instagram fa-brands border-2 p-3 rounded-full border-orange-600'></i>
              </Link>
            </div>
    </div>
    <div className='sm:flex sm:justify-evenly md:w-[75%]'>
      <div>
    <LinkMain main={"Home"}/>
            <FooterLink link={"Products"}/>
            <FooterLink link={"Pricing"}/>
            <FooterLink link={"Technology"}/>
            <FooterLink link={"Browse Category"}/>
       </div>
       <div>
      <LinkMain main={"Company"}/>
            <FooterLink link={"About"}/>
            <FooterLink link={"Features"}/>
            <FooterLink link={"Careers"}/>
            <FooterLink link={"Works"}/>
       </div>
       <div>
      <LinkMain main={"FAQ"}/>
            <FooterLink link={"Account"}/>
            <FooterLink link={"Tracking"}/>
            <FooterLink link={"Payments"}/>
            <FooterLink link={"Report Issue"}/>
        </div>
        <div>
      <LinkMain main={"Help"}/>
            <FooterLink link={"Customer Support"}/>
            <FooterLink link={"Details"}/>
            <FooterLink link={"Privacy Policy"}/>
            <FooterLink link={"Terms of Service"}/>
        </div>
    </div>
    </div>
    <hr />
    <p className='text-center my-5 text-xs sm:text-sm '>Crystal @2025 - Developed by Fiza Shakil - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer