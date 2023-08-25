import React from 'react'

export default function Testimonials() {

  return (
    <div>
    <section id="testimonials">
        {/* <!-- container to heading and test blocks --> */}
        <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
            {/* <!-- heading --> */}
            <h2 class="text-4xl font-bold text-center">
                Testimonials
            </h2>
            {/* <!-- testm container  --> */}
            <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
               {/* Testimonial 1 */}
                <div class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">

                    <img src="../claire/AB.jpeg" alt="" class="w-16 -mt-14"/>
                    <h5 class="text-lg font-bold">
                    Annie Burford
                    </h5>
                    <p class="text-sm text-darkGrayishBlue">
                    “I highly recommend Claire as a responsible, loving and reliable pet caregiver. Claire took care of my Keeper when I was gone for two weeks on vacation. I didn't have to worry about a thing as I knew Keeper was in great hands. I can not say enough good things about Claire's character, integrity and work ethic. She is an exceptional person all around; the exact person you would want caring for your fur child.”
                    </p>
                </div>

                <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">

                    <img src="testimonials/natasha.png" alt="" class="w-16 -mt-14"/>
                    <h5 class="text-lg font-bold">
                    Natalie Serra
                    </h5>
                    <p class="text-sm text-darkGrayishBlue">
                    “Claire is awesome! We went on vacation for 10 days and Claire stayed at our house. She took care of our sweet but sometimes anxious dog, two birds, gecko and koi fish. We totally trusted her upon our first meeting and everything went perfectly. She sent us updates and photos of our little dog :) We will definitely have Claire stay at our house again and again and are so happy that we found her!”

                    </p>
                </div>

                <div class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">

                    <img src="testimonials/grant.png" alt="" class="w-16 -mt-14"/>
                    <h5 class="text-lg font-bold">
                    Annie Lazebnik

                    </h5>
                    <p class="text-sm text-darkGrayishBlue">
                    “I recommend Claire as a very responsible and communicative dog sitter. She took care of our three high energy dogs and gave them plenty of attention. She left the house in great shape and stayed in communication throughout the process. We would book her again.”
                    </p>
                </div>
            </div>
        </div>

    </section>
    </div>
     )
  }; 

          
           