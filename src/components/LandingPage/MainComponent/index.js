import React from 'react';
import Button from "../../Common/Button";
import "./style.css";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/hot-pink-to-bright-yellow-gradient.jpg";
import {motion} from "framer-motion";
// https://css-tricks.com/adding-stroke-to-web-text/
// https://www.framer.com/motion/examples/ - for animation
function MainComponent() {
  return (
    <div className='flex-info'>
      <div className='left-component'>
        <motion.h1 className='track-crypto-heading' initial={{opacity:0,rotate:"180deg"}} animate={{opacity:1,rotate:"0deg"}} transition={{duration:1.5}}>Track Crypto</motion.h1>
        <motion.h1 className='realtime-heading'initial={{opacity:0,scale:1.3}} animate={{opacity:1,scale:1}} transition={{duration:1.2,delay:0.5}}>Real Time.</motion.h1>
        <motion.p className='info-text' initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:2}}>Track crypto through a public api in real time. Visit the dashboard to do so! </motion.p>
      <motion.div className='btn-flex' initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:2}}>
        <Button text={"Dashboard"}/>
        <Button text={"Share"} outlined={true}/>
      </motion.div>
      </div>
      <div className='right-component'>
        <motion.img src={iphone} className='iphone' initial={{y:-10}} animate={{y:10}} transition={{type:"smooth",repeatType:"mirror",duration:2,repeat:Infinity}} />
        <img src={gradient} className='gradient'/>
      </div>
      </div>
  )
}

export default MainComponent;