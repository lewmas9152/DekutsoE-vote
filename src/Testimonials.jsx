import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import avatar1 from "/assets/Avatar1.svg";
import avatar2 from "/assets/Avatar2.svg";
import avatar3 from "/assets/Avatar3.svg";
import avatar4 from "/assets/Avatar4.svg";
import avatar5 from "/assets/Avatar5.svg";
import avatar6 from "/assets/Avatar6.svg";
import avatar7 from "/assets/Avatar7.svg";
import avatar8 from "/assets/Avatar8.svg";
import avatar9 from "/assets/Avatar9.svg";
import next from "/assets/next.svg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const testimonials = [
    {
      id: 1,
      statement:
        "I never voted before because it was confusing and intimidating. This app made it clear and accessible.",
      name: "Jane P., Previously Disenfranchised Voter",
      avatar: avatar1,
    },
    {
      id: 2,
      statement:
        "Busy schedule? No problem! I voted on my lunch break from my phone.",
      name: "David M., Working Professional",
      avatar: avatar2,
    },
    {
      id: 3,
      statement:
        "Voting used to be a hassle. This app makes it easy and convenient!",
      name: "John D., Voter",
      avatar: avatar3,
    },
    {
      id: 4,
      statement:
        "Living abroad? This app allows me to stay engaged and exercise my right to vote",
      name: "Maria S., Expatriate",
      avatar: avatar4,
    },
    {
      id: 5,
      statement: "This app feels like my voice is truly heard.",
      name: "Emily K., Passionate Citizen",
      avatar: avatar5,
    },
    {
      id: 6,
      statement: "Voting on this app gave me a sense of hope and empowerment.",
      name: "Daniel H., Changemaker",
      avatar: avatar6,
    },
    {
      id: 7,
      statement:
        "I voted for my local school board candidate using this app, and it felt amazing!",
      name: "Jessica B., Engaged Parent",
      avatar: avatar7,
    },
    {
      id: 8,
      statement:
        "Finally, a way to participate without the long lines and paperwork!",
      name: "Sarah L., Civic Activist",
      avatar: avatar8,
    },
    {
      id: 9,
      statement: "Empowering my voice, one tap at a time. Thank you!",
      name: "Michael C., Young Professional",
      avatar: avatar9,
    },
  ];

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <>
      <div className="testimonials">
        <div className="lined-text">
          <div className=" line left"></div>
          <h3>Testimonials</h3>
          <div className="line right"></div>
        </div>
        <div className="container">
          {testimonials
            .slice(currentIndex, currentIndex + testimonialsPerPage)
            .map((testimonial, index) => (
              <div key={index} className="testimonial">
                <div className="front"></div>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="avatar"
                />
                <div className="statement">
                  <p>{testimonial.statement}</p>
                  <h3>{testimonial.name}</h3>
                </div>
              </div>
            ))}
        </div>
        <div className="pagination">
          {Array.from({
            length: Math.ceil(testimonials.length / testimonialsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index * testimonialsPerPage)}
            />
          ))}
        </div>
      </div>

      <img
        src={next}
        alt="previous"
        className="nextLeft next"
        onClick={handlePrevClick}
      />
      <img
        src={next}
        alt="next"
        className="nextRight next"
        onClick={handleNextClick}
      />
    </>
  );
};

export default Testimonials;
