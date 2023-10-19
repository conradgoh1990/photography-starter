import React, {useContext} from 'react';
// import images
import WomanImg from '../img/about/woman.png';
// import Link
import { Link } from 'react-router-dom';
// import motion
import {motion} from 'framer-motion'
// import cursor context
import {CursorContext} from '../context/CursorContext';

const About = () => {
  const  { mouseEnterHandler, mouseLeaveHandler } = useContext
  (CursorContext);
  return (
  <motion.section 
    initial={{opacity: 0, y: '100%'}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y:'100%'}}
    transition={{duration: 1, ease: [0.6, 0.01, 0.25, 0.9]}}
    className='section'
    
    >
    <div className="container mx-auto h-full relative">
      {/* text & img wrapper */}
      <div className='flex flex-col lg:flex-row h-full
      items-center justify-center gap-x-24 text-center
      lg:text-left lg:pt-16'>
         {/* image */}
         <div className='flex-1 max-h-96 lg:max-h-max
         order-2 lg:order-none overflow-hidden'>
          <img src={WomanImg} alt="" />
         </div>
           {/* text */}
           <motion.div 
            initial={{opacity: 0, y: '-80%'}}
            animate={{opacity: 1, y: 0}}
            exit= {{ opacity: 0, y: '-80%' }}
            transition={{duration: 1, ease: [0.6, 0.01, 0.25, 0.9]}}
           className='flex-1 pt-36 pb-14 lg:pt-0
           lg:w-auto z-10 flex flex-col justify-center
           items-center lg:items-start'>
            <h1 className='h1'> About me</h1>
            <p className= 'mb-12 max-w-sm'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit.
               <b>Exercitation veniam consequat</b>sunt nostrud amet.Amet minim mollit non deserunt.  
               duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim 
               mollit non deserunt. 
               </p>
               <br />
               <br />
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe
                quo corrupti neque omnis,  quasi molestiae laborum fugiat. Illo natus explicabo facere 
                consequatur hic exercitationem nam earum et molestiae maxime?
                </p>
                <Link to={'/portfolio'} className='btn'>View my work</Link>
           </motion.div>
      </div>
    </div>
   </motion.section>
  );
};

export default About;
