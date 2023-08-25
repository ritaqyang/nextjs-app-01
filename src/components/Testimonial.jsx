import React from "react";
import QuoteCard from "./QuoteCard"; 
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
    <div>
      <div class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
        

        <QuoteCard quote={quote} /> 

        
      </div>
    </div>
  );
};
