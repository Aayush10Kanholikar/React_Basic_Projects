import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard name={"Aayush"} feedback={"Your are Good"} />
        <TestimonialCard name={"Aayush"} feedback={"Your are Good"} />
        <TestimonialCard name={"Aayush"} feedback={"Your are Good"} />


      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
