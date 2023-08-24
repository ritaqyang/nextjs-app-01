import React from 'react'; 
import Menuitem from './Menuitem';
import { FaBeer } from 'react-icons/fa';

export default function Header() {
  return (
    <div>
        <div className="div">
            <Menuitem title="Home" address="/" Icon={ FaBeer} /> 
        </div>
    </div>
  )
};
