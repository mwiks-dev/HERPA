import React from 'react';
import {useState, useEffect} from 'react';
import ButtonLearn from '../button/button';
import {GoArrowSmallLeft, GoArrowSmallRight} from 'react-icons/go';



const HeroSection = ({slider}) => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() =>{
      const slideInterval = setInterval(() =>{
        setSlideIndex((slideIndex + 1) % slider.length);
      }, 6000)


      return () => clearInterval(slideInterval)

    }, [slideIndex, slider.length])

     const style = { height: '38px',
                    width: '38px',
                    position: 'absolute',
                    top: '34%',
                    left : '1.5rem',
                    color:'#ffff',
                    borderWidth: '1px',
                    borderColor: '#ffff',
                    borderRadius: '9999px',
                    
                    zIndex: 'auto',
                    cursor: 'pointer',
                    }

  return (
    <section className='h-[100vh]'>
        <div className="w-full  relative ">
          <GoArrowSmallLeft style={style} />
          <GoArrowSmallRight className='arrow next' />
          <img className="w-full h-2/5 inset-0 bg-center object-cover "
           src={slider[slideIndex].slideImage} alt={slider[slideIndex].alt} />


           <div className="absolute w-4/5 md:w-3/6 h-3/4 md:h-2/5 top-12 left-11 md:top-36 md:left-40 
            text-white p-11  bg-gray-800/40">

            <h4 className='flex justify-start w-5/6 md:w-3/5 -mt-9 md:mt-2 p-1 md:p-2 text-sm md:text-2xl font-bold 
            bg-white text-herpaMainBlue rounded-md'>{slider[slideIndex].textSpan}</h4>

            <h1 className='w-full md:w-4/5 font-mono text-white font-black
             text-3xl md:text-7xl mt-1 md:mt-4 mb-1 md:mb-3'>
              {slider[slideIndex].heading}
              </h1>

            <p className='md:w-3/4 mb-1 md:mb-4 text-xs md:text-sm'>{slider[slideIndex].description}</p>

            <hr className='w-1/2 h-1 bg-white mt-2 mb-2 md:mb-3'/>

            <ButtonLearn className="font-semibold font-mono text-sm md:text-lg">
              {slider[slideIndex].buttonText}
              </ButtonLearn>
           </div>

        </div>
        
    </section>
  )
}

export default HeroSection;

