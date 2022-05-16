import React from 'react'
import SectionCircle from '../SectionCircle/SectionCircle'
import './AboutSection.css'
import Timeline from '../Timeline/Timeline'

const AboutSection = () => {
  return (
    <div className='about-section__wrapper' id='about'>
        <div className='about-section__container container'>
            <SectionCircle name="About"/>
            <Timeline />
        </div>

    </div>
  )
}

export default AboutSection