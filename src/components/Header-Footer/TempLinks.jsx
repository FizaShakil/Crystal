import React from 'react'
// import { Link } from 'react-router-dom';

const FooterLink = ({link})=>{
    return(
        <div>
           <li className='list-none'>{link}</li>
        </div>
    )
}
const LinkMain = ({main}) => {
  return (
    <div>
      <h1 className='text-2xl footerHead mt-4'>{main}</h1>
    </div>
  )
}

export {FooterLink, LinkMain}