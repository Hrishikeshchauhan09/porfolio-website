import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
            Hi there!  I am a full-stack developer with a strong desire to advance in my career.  
            Through coursework and personal projects, I have developed a fundamental understanding of contemporary web technologies, such as React and Node.js. 
             I am eager to contribute to a development team and have a strong desire to learn.
            </p>
            <p>
              I love turning complex problems into simple, beautiful designs. When I'm not coding, 
              you'll find me exploring new technologies, contributing to open-source projects, or hiking.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;