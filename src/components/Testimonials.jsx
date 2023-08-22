import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      position: 'CEO, ABC Company',
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel risus eget dolor consequat sollicitudin.',
    },
    {
      name: 'Jane Smith',
      position: 'Manager, XYZ Agency',
      testimonial: 'Nulla interdum, metus at rutrum feugiat, purus tortor facilisis augue, non hendrerit orci velit eget dolor.',
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="testimonials" id='testimonials'>
      <div className="testimonials-content">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <div className="testimonial-text">{testimonial.testimonial}</div>
              <div className="testimonial-author">
                <span className="testimonial-name">{testimonial.name}</span>
                <span className="testimonial-position">{testimonial.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
