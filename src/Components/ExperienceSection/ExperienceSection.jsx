import './ExperienceSection.css'
import { CiStar } from "react-icons/ci";
import { useState, useEffect } from 'react'

export const ExperienceSection = () => {
  const [prevIdx, setPrevIdx] = useState(0)
  const companies = ['TruWeather Solutions Inc.', 'Intralinks', 'Cloudnaut Technologies',]// 'Vodafone Shared Services India Pvt Ltd', 'Twintech Control Systems',]
  const experience = {
    'TruWeather Solutions Inc.' : [
      {
        title: 'Senior Software Engineer/Frontend Lead',
        period: 'December, 2022 - Present',
        experience: ['As a Frontend Lead at TruWeather Solutions, I played a key role in developing the v2 version of the company\'s frontend application, focusing on creating a more efficient and user-friendly interface. In addition to frontend development, I managed AWS infrastructure to ensure seamless integration and deployment. I was also actively involved in system architecture discussions, contributing to decisions that enhanced the scalability and performance of the platform.'],
      },
      {
        title: 'FullStack Developer Intern',
        period: 'March, 2021 - April 2022',
        experience: ['During my year as a fullstack developer intern, I was responsible for automating code deployments using Jenkins, streamlining the CI/CD process for improved efficiency. I also wrote CloudFormation scripts to manage infrastructure as code and containerized JavaScript applications using Docker for consistent development environments. Additionally, I developed data pipelines for ingesting weather sensor data, ensuring reliable and scalable data processing workflows for the team.'],
      }
    ],
    'Intralinks': [
      {
        title: 'Summer Intern',
        period: 'May, 2022 - December, 2022',
        experience: ['As a summer intern on the Identity Access Management team, I contributed to maintaining the company\'s Single Sign-On (SSO) flow, ensuring secure and efficient authentication processes. I also played a key role in migrating a legacy application to React v18, enhancing the performance and modernizing the user interface. This experience gave me a deep understanding of both authentication protocols and frontend development with React.'],
      }
    ],
    'Cloudnaut Technologies': [
      {
        title: 'Fullstack JavaScript Developer',
        period: 'September, 2018 - December 2020',
        experience: ['As a Fullstack JS Developer, I was deeply involved in several key projects, including a data migration initiative to ensure smooth transitions between systems. I contributed to building a video conferencing application using Vue.js, Tailwind CSS, and AWS Chime SDK, delivering a seamless user experience for virtual meetings. Additionally, I designed and developed a survey application, which streamlined feedback collection and improved user interaction. These projects allowed me to leverage both frontend and backend expertise to deliver scalable solutions.'],
      }
    ],
    // 'Vodafone Shared Services India Pvt Ltd': [
    //   {
    //     title: 'Graduate Engineer Trainee',
    //     period: 'August, 2017 - June, 2018',
    //     experience: [''],
    //   }
    // ],
    // 'Twintech Control Systems' : [
    //   {
    //     title : 'Intern',
    //     period: 'March, 2016 - March 2017',
    //     experience: ['']
    //   }
    // ]
  }
  const [selectedSection, setSelectedSection] = useState('TruWeather Solutions Inc.')
  const handleElementClick = (el) => {
    setSelectedSection(el)
  }

  const changeBackground = (event, idx) => {
    const el = document.getElementsByClassName('star-svg')[idx]
    el.style.background = '#E85A4F'
    setSelectedSection((prevSelection) => {
      const el = document.getElementById(prevSelection)
      revertBackground(el)
      return event.target.innerHTML
    })
    setPrevIdx(idx)
  }

  const revertBackground = (e) => {
    e.style.color = '#5a5a5a';
    e.style.border = '2px solid #5a5a5a'
    e.style.boxShadow = ''
    e.style.background = '#EAE7DC'
    document.getElementsByClassName('star-svg')[prevIdx].style.background = 'none'
  }



  useEffect(() => {
    const e = document.getElementById(selectedSection)
    e.style.color = '#5a5a5a';
    e.style.background = '#E85A4F'
    e.style.border = '2px solid #E85A4Fs'
    e.style.boxShadow = '0.5rem 0.5rem #5a5a5a'
    const el = document.getElementsByClassName('star-svg')[prevIdx]
    el.style.background = '#E85A4F'
  }, [selectedSection])

  return (
    <div className='main-container animate__animated animate__slideInDown'>
      {
        companies.map((el, idx) =>
          <div className='container'>
              <div className='headline-container'>
                <div className='star-container'>
                  <CiStar className='star-svg'/>
                </div>
                <button
                  className='company-container company-navigation'
                  id={el}
                  onFocus={(e) => changeBackground(e, idx)}
                  onClick={() => handleElementClick(el)}
                >
                  {el}
                </button>
              </div>
            {selectedSection === el && 
              <div className='experience-container animate__animated animate__slideInDown'>
                {
                  experience[el].map((element) =>
                    <div className='position-description'>
                      <div className='experience-grid'>
                        <div className='box'>{element.title}</div>
                        <div className='box'>{element.period}</div>
                      </div>
                      <div className='experience-description'>
                        {element.experience}
                      </div>
                    </div>
                  )
                }
              </div>
            }
          </div>
        )
      }
    </div>
  )
}