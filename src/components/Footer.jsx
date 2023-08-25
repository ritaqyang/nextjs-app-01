import React from 'react'

export default function Footer() {
  return (
    <div>
       <footer class="bg-veryDarkBlue">
        <div class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y md:flex-row md:space-y-0">

            <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:item-start">
                <div>
                    <img src="" alt="" width="75" height="100"/>
                </div>


            </div>

            <div class="flex justify-around space-x-40">
                <div class="flex flex-col space-y-3 text-white">
                    <a href="#" class="hover:text-brightRed">Home</a>
                    <a href="#" class="hover:text-brightRed">Pricing</a>
                    <a href="#" class="hover:text-brightRed">Products</a>
                    <a href="#" class="hover:text-brightRed">About</a>
                </div>
                <div class="flex flex-col space-y-3 text-white">
                    <a href="#" class="hover:text-brightRed">Careers</a>
                    <a href="#" class="hover:text-brightRed">Community</a>
                    <a href="#" class="hover:text-brightRed">Privacy Policy</a>
                    
                </div>
            </div>

        </div>


       
    </footer>
    </div>
  )
};
