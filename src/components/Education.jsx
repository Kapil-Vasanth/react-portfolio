import React from 'react';
import './css/Education.css'
const Education = () => {
  const educationList = [
    {
      institution: 'Sri Krishna Degree College (Banglore City University)',
      degree: 'Bachelor of Computer Application',
      period: '2018 - 2022',
    },
    {
      institution: 'MILT - Residential School',
      degree: 'Secondary and Senior Secondary Schooling',
      period: '',
    },
    // Add more education entries as needed
  ];

  return (
    <section className="education" id='education'>
      <div className="education-content">
        <h2 className="education-title">Education</h2>
        <div className="education-list">
          {educationList.map((education, index) => (
            <div className="education-item" key={index}>
              <div className="institution">{education.institution}</div>
              <div className="degree">{education.degree}</div>
              <div className="period">{education.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
