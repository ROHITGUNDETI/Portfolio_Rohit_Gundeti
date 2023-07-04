import React from 'react'
import "./skills.css"
import Frontend from './Frontend';
import Backend from './Backend';
const Skills = () => {
  return (
    <section className="skills section" id = "skills">
          <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Tecnhical Level</span>
    
<div className="skills__container container"></div>
    <Frontend />

    <Backend />
    
    
    </section>
  )
}

export default Skills