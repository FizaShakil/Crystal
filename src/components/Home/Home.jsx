import React from 'react'
import TechnologyFeatures from './TechnologyFeatures'
import Contact from './Contact'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='h-[60vh]'>
        <p className='font-extrabold text-3xl mx-[5%] w-[90%] md:text-5xl text-center mt-32'>
          The Smarter Way to Handle Physical Mail
        </p>
        <p className='text-center text-sm mx-[10%] w-[80%] mt-4'>
          Scan, classify, and store every letter with AI-powered precision — seamlessly delivered to your cloud inbox.
        </p>
       <div className="flex flex-row items-center justify-center gap-2 sm:gap-6 mt-14">
         <button className="rounded-full border-[1px] py-1 px-8 md:border-[2px] md:py-[5px] md:px-12 border-orange-600 bg-orange-600 hover:bg-[#151515] duration-300 hover:text-white transition"
            onClick={() => navigate("/about")}>
               Explore
        </button>
        <button className="rounded-full border-[1px] py-1 px-8 md:border-[2px] md:py-[5px] md:px-12 border-orange-600 hover:bg-orange-600 duration-300 hover:text-white transition"
             onClick={() => navigate("/contact")}>
              Contact
         </button>
      </div>

      </div>
      <TechnologyFeatures/>
      <Contact/>
    </div>
  )
}

export default Home