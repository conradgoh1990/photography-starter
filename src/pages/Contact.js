import React, {useContext} from 'react';
//import images
import WomanImg from '../img/contact/woman.png'
//import motion
import {motion} from 'framer-motion';
import {useLocation} from "react-router-dom";
// import context
import {CursorContext} from '../context/CursorContext';
const Contact = () => {
  const location = useLocation();
  const {mouseEnterHandler,mouseLeaveHandler } = useContext(CursorContext)


  return(
    
  <motion.section 
  initial={{opacity: 0, y: '100%' }}
  animate={{opacity: 1, y:0 }}
  exit={{opacity: 0, y:'100%' }}
  transition={{
  duration: 1, 
  ease: [0.6, 0.01, 0.25, 0.9],
  }}
  className='section bg-white'>
    <div className='container mx-auto h-full'>
      <div className='flex flex-col lg:flex-row h-full
      items-center justify-start pt-36 gap-x-8 text-center
      lg:text-left'>
        {/*bg */}
        <motion.div 
          initial={{opacity: 0, y: '100%' }}
          animate={{opacity: 1, y:0 }}
          exit={{opacity: 0, y:'100%' }}
          transition={{
           duration: 1, 
           ease: [0.6, 0.01, 0.25, 0.9],
          }}
        className='hidden lg:flex bg-[#eef7f9]
        absolute bottom-0 left-0 right-0 top-72 -z-10'>  
          </motion.div>
        {/*text & form*/}
        <div 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler} 
        
        className='lg:flex-1 lg:pt-32 px-4'>
          <h1 className='h1'>Contact me</h1>
          <p className='mb-12'>I would love to get suggestion from you</p>
         {/*form */}
          <form className='flex flex-col gap-y-4'>
          <div className='flex gap-x-10'>
            <input 
            className='outline-none border-b border-b-primary h-[60px]
            bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
            type="text"
            placeholder='Your name' 
            />
            <input 
            className='outline-none border-b border-b-primary h-[60px]
            bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
            type="text"
            placeholder='Your email address' 
            />
            
          </div>

          <input 
            className='outline-none border-b
             border-b-primary h-[60px] bg-transparent
              font-secondary w-full pl-3
               placeholder:text-[#757879]'
            type="text"
            placeholder='Your message' 
            />
            <button className='btn mb-[30px] mx-auto
            lg:mx-0 self-start'>
              send it
            </button>


          </form>
        </div>
        {/*image */}
        <motion.div 
         onMouseEnter={mouseEnterHandler}
         onMouseLeave={mouseLeaveHandler} 
          initial={{opacity: 0, y: '100%' }}
          animate={{opacity: 1, y:0 }}
          exit={{opacity: 0, y:'100%' }}
          transition={{
           duration: 1.5, 
           ease: [0.6, 0.01, 0.25, 0.9],
          }}
        className='lg:flex-1'>
          <img src={WomanImg} alt="" />
          </motion.div>
      </div>
    </div>
    
  Contact</motion.section>
  
  ); 
};

export default Contact;
