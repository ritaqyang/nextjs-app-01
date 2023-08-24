import React from 'react'; 
import Menuitem from './Menuitem';
import {AiFillHome } from 'react-icons/ai'; 
import {BsFillInfoCircleFill} from 'react-icons/bs'; 
import Link from 'next/link';

export default function Header() {
  return (
    <div>
        <div className="flex">
            <Menuitem title="Home" address="/" Icon={ AiFillHome} /> 
            <Menuitem title="About" address="/about" Icon={BsFillInfoCircleFill}/>
        </div>

        <div className=''>
          <Link href='/'>
            <h2 className='font-bold bg-amber-500 py-1 rounded-lg'>
              <span>IMDb</span>
              <span>Clone</span>
            </h2>
          </Link>
        </div>

        
    </div>
  )
};
