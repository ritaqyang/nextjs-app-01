import React from 'react'; 
import Menuitem from './Menuitem';
import {AiFillHome } from 'react-icons/ai'; 
import {BsFillInfoCircleFill} from 'react-icons/bs'; 
import Link from 'next/link';

import Testimonials from './Testimonials'; 
import Testimonial from './Testimonial'; 



export default function Header() {
  return (
    <div>
        <div className="flex">
            <Menuitem title="Home" address="/" Icon={ AiFillHome} /> 
            <Menuitem title="About" address="/about" Icon={BsFillInfoCircleFill}/>
        </div>

        <Testimonial name="Annie B" quote="lalallalalla" img="/claire/AB.jpeg" /> 

       
        
    </div>
  )
};
