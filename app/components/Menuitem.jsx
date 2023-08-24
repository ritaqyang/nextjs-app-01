import React from 'react'; 
import Link from 'next/link';

export default function Menuitem({title, address, Icon}) {
  return (
    <div>
        
        <Link href={address}>
            <Icon /> 
            <p>{title}</p>
        </Link>
    </div>
  )
};
