import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import project1Image from '../assets/project1.png'
import project2Image from '../assets/project2.png'
import project3Image from '../assets/project3.png'
import project4Image from '../assets/project4.png'
import project5Image from '../assets/project5.png'
import vanLifeImage from '../assets/vanLife.png'
import emctImage from '../assets/emct.png'
import reactPortfolioImage from '../assets/reactPortfolio.png'

import './css/Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Eyes CodePen',
      description: 'Worked on pure Vanilla JS for interactions',
      imageUrl: `${project1Image}`,
      demoUrl: 'https://codepen.io/kapsdesign/pen/LYJZKJg',
      githubUrl: 'https://github.com/Kapil-Vasanth/projects/eye',
    },
    {
      title: 'Monk Website',
      description: 'Amazing Monk Website Built On Pure HTML/CSS & Vanilla Js',
      imageUrl: `${project2Image}`,
      demoUrl: 'https://pixtio-monk.netlify.app/',
      githubUrl: 'https://github.com/Kapil-Vasanth/projects/tree/main/monk',
    },
    {
      title: 'Van Life React',
      description: 'React Website built with amazing User Experience',
      imageUrl: `${vanLifeImage}`,
      demoUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/example/project2',
    },
    {
      title: 'ToDo Pure Js',
      description: 'Todo App built with Vanilla JS & LocalStorage API',
      imageUrl: `${project3Image}`,
      demoUrl: 'https://pixtio-todo.netlify.app/',
      githubUrl: 'https://github.com/Kapil-Vasanth/projects/tree/main/todo',
    },
    {
      title: 'Tap Music',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      imageUrl: `${project4Image}`,
      demoUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/example/project2',
    },
    {
      title: 'ToDo FireBase App',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      imageUrl: `${vanLifeImage}`,
      demoUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/example/project2',
      tag: 'upcoming'
    },
    {
      title: 'Tenzies React',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      imageUrl: `${project5Image}`,
      demoUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/example/project2',
    },
    {
      title: 'EMCT Website',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      imageUrl: `${emctImage}`,
      demoUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/example/project2',
    },
    {
      title: 'TypeScript Project',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      imageUrl: `${project5Image}`,
      demoUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/example/project2',
      tag: 'upcoming'
    },
    {
      title: 'React Portfolio',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      imageUrl: `${reactPortfolioImage}`,
      demoUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/example/project2',
      tag: 'upcoming'
    },
    // Add more projects as needed
  ];

  const settings = {
    dots: false,
    autoplay: true,
    spaceBetween: 14,
    infinite: true,
    speed: 10000, // Adjust the speed to control the sliding duration
    slidesToShow: 5,
    slidesToScroll: 1, // Set slidesToScroll to 1 for smoother movement
    autoplaySpeed: 1000, // Set autoplaySpeed to 0 to disable the default delay
    cssEase: 'linear', // Set the cssEase option to 'linear' for linear sliding
    swipeToSlide: true, // Enable swiping to slide
    swipe: true, // Enable mouse dragging
    touchMove: true, // Enable touch gestures
    pauseOnHover: true, // Pause the autoplay when hovering
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Duplicate the projects array to create a seamless loop
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="projects">
      <div className="projects-content">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-slider">
          <Slider {...settings}>
            {duplicatedProjects.map((project, index) => (
              <div className="project-card carousel" key={index}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-links">
                    {
                      (project.tag === 'upcoming') ? 
                        <>
                          <a href="#" className="project-link">Upcoming</a>
                        </> :
                        <>
                          <a href={project.demoUrl} className="project-link" target="_blank">View</a>
                          <a href={project.githubUrl} className="project-link" target="_blank">GitHub</a>
                        </>
                      
                    }
                    
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;
