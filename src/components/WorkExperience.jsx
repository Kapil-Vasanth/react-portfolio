import { React , useState } from 'react';
import './css/WorkExperience.css'

const WorkExperience = () => {
  const experiences = [
    {
      company: 'WingSlide Technologies',
      position: 'Web Developer',
      period: 'Jan 2022 - Present',
      description: 'During my work experience on the CRM web software, I focused on database management and module creation, collaborating with a team to build a reliable and scalable solution. This hands-on involvement provided me with valuable insights into CRM systems, data management, and the significance of delivering high-quality software that caters to business requirements and enhances customer relationships. Additionally, I had the opportunity to assist other team members in finding effective solutions for their work, further fostering a collaborative and supportive work environment.',
    },
    {
      company: 'DesignShore Technologies',
      position: 'Web Developer',
      period: 'Jun 2019 - Dec 2022',
      description: 'During my work experience, I have had the opportunity to work extensively on creating responsive designs using HTML, CSS, JavaScript, and Bootstrap. My primary focus has been on developing user-friendly and visually appealing interfaces that seamlessly adapt to different screen sizes and devices.',
    },
    // Add more work experiences as needed
  ];

  const MAX_DESCRIPTION_LENGTH = 200;
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleReadMore = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };
  return (
    <section className="work-experience">
      <div className="work-experience-content">
        <h2 className="work-experience-title">Work Experience</h2>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            
            <div className="experience-item" key={index}>
              <div className="company">{experience.company}</div>
              <div className="position">{experience.position}</div>
              <div className="period">{experience.period}</div>
              <div className="description">
                {experience.description.length > MAX_DESCRIPTION_LENGTH ? (
                  <>
                    {expandedIndex === index
                      ? experience.description
                      : experience.description.slice(0, MAX_DESCRIPTION_LENGTH) + '...'}
                    <span className="read-more" onClick={() => handleReadMore(index)}>
                      {expandedIndex === index ? 'Read Less' : 'Read More'}
                    </span>
                  </>
                ) : (
                  experience.description
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
