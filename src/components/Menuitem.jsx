import React from 'react'; 
import Link from 'next/link';

export default function Menuitem({title, address, Icon}) {
  return (
    <div>
        
        <Link href={address} className="mx-4 lg:mx-6 sn:hidden hover:text-amber-600">
            <Icon classNmae="text-2xl"/> 
            <p>{title}</p>
        </Link>
    </div>
  )
};
