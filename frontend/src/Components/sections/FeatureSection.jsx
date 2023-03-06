import React from 'react'
import {MdCastForEducation,} from 'react-icons/md'
import {GiInspiration} from 'react-icons/gi'
import {SiInformatica} from 'react-icons/si'
import {BiDonateHeart} from  'react-icons/bi'

const FeatureSection = () => {


  const style = { color: "#ffff", 
                  fontSize: '3.5rem',
                marginTop: '2.5rem',
                marginBottom: '0.5rem'  }

  return (
 
    <section className=' h-[100vh] z-1 bg-gray-500 '>
        <div className="w-full relative md:w-[85vw] grid grid-row-4 md:grid-flow-col gap-2 md:gap-0  place-items-center ">
            <div className="w-4/5 md:w-full flex flex-col justify-center content-center items-center 
             bg-herpaBlueLight1 font-bold font-mono text-xl text-white"> <MdCastForEducation style={style} /> 
             We Educate</div>
            <div className="w-4/5 md:w-full flex flex-col justify-center content-center items-center 
             bg-herpaMainBlue font-bold font-mono text-xl text-white"> <GiInspiration style={style} />  
             We Inspire</div>
            <div className="w-4/5 md:w-full flex flex-col justify-center content-center items-center 
             bg-herpaBlueLight1 font-bold font-mono text-xl text-white"> <SiInformatica style={style} /> 
             We Inform</div>
            <div className="w-4/5 md:w-full flex flex-col justify-center content-center items-center 
             bg-herpaBlue font-bold font-mono text-xl text-white"> <BiDonateHeart style={style} /> 
             Donate Us</div>
        </div>
         
        <div className="w-[85vw] mx-auto grid grid-row-3 md:grid-flow-col gap-4 mt-6 bg-sky-300 ">
            <div className="w-full">OUR PROJECTS</div>
            <div className="w-full">RUNNING CAUSE</div>
            <div className="w-full">UPCOMING EVENTS/PROJECTS</div>
        </div>
    </section>
    
  )
}

export default FeatureSection
