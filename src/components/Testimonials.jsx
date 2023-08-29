import React from "react";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Annie Burford",
      img: "/claire/AB.jpeg",
      home: "Sherman Oaks",
      pets: "1 cat",
      phone: "310-428-2915",
      email: "anniebfd19@gmail.com",
      quote:
        "I highly recommend Claire as a responsible, loving and reliable pet caregiver. Claire took care of my Keeper when I was gone for two weeks on vacation. I didn't have to worry about a thing as I knew Keeper was in great hands. I can not say enough good things about Claire's character, integrity and work ethic. She is an exceptional person all around; the exact person you would want caring for your fur child.",
    },
  ];

  return (
    <div className="sm:grid lg:grid-cols-2 mx-auto p-6">
      {testimonials.map((person) => (
        <div>
          
          <Testimonial
            name={person.name}
            quote={person.quote}
            img={person.img}
            home={person.home}
            pets={person.pets}
            phone={person.phone}
            email={person.email}
          />
        </div>
      ))}
    </div>
  );
}
