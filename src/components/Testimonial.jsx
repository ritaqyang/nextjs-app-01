import React from 'react'

export default function Testimonial({name, quote, img}) {
  return (
    <div>
        <div class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">

                    <img src={img} alt="" class="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"/>
                    <h5 class="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
                    {name}
                    </h5>
              <p class="text-sm text-darkGrayishBlue">
                  {quote}
                    </p>
                </div>
    </div>
  )
};
