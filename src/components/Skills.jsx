import React from 'react';
import './css/Skills.css'

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Git', level: 'Intermediate' },
    { name: 'UI/UX Design', level: 'Intermediate' },
    { name: 'Responsive Design', level: 'Intermediate' },
  ];

  return (
    <section className="skills" id='skills'>
      <div className="skills-content">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level">{skill.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Skills;
