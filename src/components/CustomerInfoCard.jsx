import Image from 'next/image';
import React from 'react';

export default function CustomerInfoCard({name,home,phone,email,pets,img}) {
  return (
    <div class="flex flex-col p-3">
          
      <img
        src={img}
        alt=""
        class="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
      />
      <h5 class="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
        {name}
      </h5>
      
    </div>
  );
};
