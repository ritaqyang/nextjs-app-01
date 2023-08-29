import React from "react";
import QuoteCard from "./QuoteCard"; 
import CustomerInfoCard from './CustomerInfoCard'; 
export default function Testimonial({
  name,
  quote,
  img,
  home,
  pets,
  phone,
  email,
}) {
  return (
    
      <div className="grid grid-cols-2">

        <div className="p-12">

          <img
            src={img}
            alt=""
            className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
          />
          <h5 className="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
            {name}
          </h5>

        </div>
        
        <div className="flex border-pink-400 text-gray-600 serif italic text-xl md:text-2xl">
          <p>{quote}</p>
        </div>
        
      </div>
    
  );
};
