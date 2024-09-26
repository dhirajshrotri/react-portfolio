import './ExperienceSection.css'
import { CiStar } from "react-icons/ci";
import { useState, useEffect } from 'react'

export const ExperienceSection = () => {
  const [prevIdx, setPrevIdx] = useState(0)
  const companies = ['TruWeather Solutions Inc.', 'Intralinks', 'Cloudnaut Technologies', 'Vodafone Shared Services India Pvt Ltd', 'Twintech Control Systems',]
  const experience = {
    'TruWeather Solutions Inc.' : [
      {
        title: 'Senior Software Engineer/Frontend Lead',
        period: 'December, 2022 - Present',
        experience: ['Currently leading development of V2 version of TrufliteV360 application which was recently launched.', 'The newer version of the application saw a 12% increase in new user subscriptions.', 'Managing the clean-up of company AWS account, accomplished savings of 28% on monthly AWS bills.'],
      },
      {
        title: 'FullStack Developer Intern',
        period: 'March, 2021 - April 2022',
        experience: [''],
      }
    ],
    'Intralinks': [
      {
        title: 'Summer Intern',
        period: 'May, 2022 - December, 2022',
        experience: [''],
      }
    ],
    'Cloudnaut Technologies': [
      {
        title: 'Fullstack JavaScript Developer',
        period: 'September, 2018 - December 2020',
        experience: [''],
      }
    ],
    'Vodafone Shared Services India Pvt Ltd': [
      {
        title: 'Graduate Engineer Trainee',
        period: 'August, 2017 - June, 2018',
        experience: [''],
      }
    ],
    'Twintech Control Systems' : [
      {
        title : 'Intern',
        period: 'March, 2016 - March 2017',
        experience: ['']
      }
    ]
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
    <div className='main-container'>
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
              <div className='experience-container'>
                {
                  experience[el].map((element) =>
                    <div className='experience-grid'>
                      <div className='box'>{element.title}</div>
                      <div className='box'>{element.period}</div>
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