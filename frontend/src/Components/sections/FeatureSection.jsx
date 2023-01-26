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
 
    <section>
        <div className="w-full z-1 md:w-4/5  absolute grid grid-row-4 md:grid-flow-col gap-2 md:gap-0 md:ml-32 place-items-center ">
            <div className="w-4/5 md:w-full flex flex-col justify-center content-center items-center h-40 mt-3 md:-mt-20
             bg-herpaBlueLight1 font-bold font-mono text-xl text-white"> <MdCastForEducation style={style} /> 
             We Educate</div>
            <div className="w-4/5 md:w-full flex flex-col justify-center content-center items-center h-40 mt-3 md:-mt-20
             bg-herpaMainBlue font-bold font-mono text-xl text-white"> <GiInspiration style={style} />  
             We Inspire</div>
            <div className="w-4/5 md:w-full flex flex-col justify-center content-center items-center h-40 mt-3 md:-mt-20
             bg-herpaBlueLight1 font-bold font-mono text-xl text-white"> <SiInformatica style={style} /> 
             We Inform</div>
            <div className="w-4/5 md:w-full flex flex-col justify-center content-center items-center h-40 mt-3 md:-mt-20
             bg-herpaBlue font-bold font-mono text-xl text-white"> <BiDonateHeart style={style} /> 
             Donate Us</div>
        </div>
         
    </section>
    
  )
}

export default FeatureSection
