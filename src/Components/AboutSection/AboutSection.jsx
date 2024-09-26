import './AboutSection.css';
import { useState, useEffect } from 'react';

//frontend logos
import { DiAngularSimple } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiGrunt } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJqueryUiLogo } from "react-icons/di";
import { DiCss3 } from "react-icons/di";

//backend logos import
import { DiNodejs } from "react-icons/di";
import { DiGo } from "react-icons/di";
import { DiRust } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiRedis } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiNginx } from "react-icons/di";
import { DiGit } from "react-icons/di";

//cloud icons import
import { DiAws } from "react-icons/di";
import { DiDigitalOcean } from "react-icons/di";
import { DiFirebase } from "react-icons/di";
import { DiHeroku } from "react-icons/di";
import { DiDocker } from "react-icons/di";
import { DiJenkins } from "react-icons/di";

export const AboutSection = () => {
  const [skillVisible, setSkillVisible] = useState('Frontend')
  const skillArr = ['Frontend', 'Backend', 'Cloud']

  const changeBackground = (event) => {
   setSkillVisible((prevSelection) => {
      const el = document.getElementById(prevSelection)
      revertBackground(el)
      return event.target.innerHTML
    })
  }

  const revertBackground = (element) => {
    element.style.color = '#5a5a5a';
    element.style.border = '2px solid #5a5a5a'
    element.style.boxShadow = ''
    element.style.background = '#EAE7DC'
  }

  const handleElementClick = (elementName) => {
    setSkillVisible(elementName)
  }

  useEffect(() => {
    const e = document.getElementById(skillVisible)
    e.style.color = '#5a5a5a';
    e.style.background = '#E85A4F'
    e.style.border = '2px solid #E85A4Fs'
    e.style.boxShadow = '0.5rem 0.5rem #5a5a5a'
  }, [skillVisible])

  return (
    <div className="main-container">
      <div className="Introduction"> 
        <h6>I am a Full Stack Developer with 6 years experience.</h6>
        <p>As a seasoned full-stack developer with a strong focus on Node.js, React, and AWS, I am currently leading the frontend team at TruWeather Solutions. My expertise lies in building scalable and efficient applications, leveraging my in-depth knowledge of both backend and frontend technologies. With six years of experience in the industry, I excel at creating seamless user experiences while ensuring robust backend functionality, making me a versatile and valuable asset to any development team.</p>
        <div>
          <h3>Skills</h3>
          <hr />
          <div className='skill-container'>
           <div className='skill-switch-btn-container'>
            {skillArr.map((el) => (
                <button className='skillSwitcher'
                  id={el}
                onMouseOver={(e) => changeBackground(e)}
                onFocus={(e) => changeBackground(e)}
                onClick={() => handleElementClick(el)}
                >
                  {el}
                </button>
              ))}
           </div>
            { skillVisible === 'Frontend' && (
              <div className='icon-container'>
                <div className='grid-col'>
                  <div className='iconContainer'>
                    <DiAngularSimple className='icon'/>
                    <span>AngularJs</span>
                  </div>
                  <div className='iconContainer'>
                    <DiReact  className='icon'/>
                    <span>React</span>
                  </div>
                  <div className='iconContainer'>
                  <svg className='icon' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#5a5a5a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M1 3h4l7 12 7-12h4L12 22 1 3zm8.667 0L12 7l2.333-4h4.035L12 14 5.632 3h4.035z"></path> </g> </g></svg>
                    <span>VueJs</span>
                  </div>
                  <div className='iconContainer'>
                  <svg className='icon' fill="#5a5a5a" viewBox="-1 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m20.952 18.5-9.714 5.5v-4.286l6.048-3.334zm.666-.595v-11.52l-3.548 2.071v7.381l3.548 2.048zm-20.952.595 9.714 5.5v-4.286l-6.048-3.334zm-.666-.595v-11.52l3.548 2.071v7.381zm.405-12.262 9.976-5.643v4.143l-6.429 3.548zm20.809 0-9.976-5.643v4.143l6.428 3.548zm-10.833 13.095-5.972-3.287v-6.524l5.976 3.452zm.857 0 5.976-3.286v-6.524l-5.976 3.452zm-6.429-10.548 6-3.31 6 3.31-6 3.453z"></path></g></svg>
                    <span>Webpack</span>
                  </div>
                  <div className='iconContainer'>
                    <DiGrunt className='icon'/>
                    <span>Grunt</span>
                  </div>
                  <div className='iconContainer'>
                    <DiBootstrap className='icon'/>
                    <span>Bootstrap</span>
                  </div>
                </div>
                <div className='grid-col'>
                  <div className='iconContainer'>
                    <DiJavascript1 className='icon'/>
                    <span>JavaScript</span>
                  </div>
                  <div className='iconContainer'>
                    <svg className='icon' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5a5a5a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="nonzero" clip-rule="nonzero" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H9.25C9.66421 5.75 10 6.08579 10 6.5C10 6.91421 9.66421 7.25 9.25 7.25H8.25V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z" fill="#5a5a5a"></path> </g></svg>
                    <span>TypeScript</span>
                  </div>
                  <div className='iconContainer'>
                    <DiJqueryUiLogo className='icon'/>
                    <span>JQuery</span>
                  </div>
                  <div className='iconContainer'>
                    <svg className='icon' fill="#5a5a5a" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>WebAssembly icon</title><path d="M14.745,0c0,0.042,0,0.085,0,0.129c0,1.52-1.232,2.752-2.752,2.752c-1.52,0-2.752-1.232-2.752-2.752 c0-0.045,0-0.087,0-0.129H0v24h24V0H14.745z M11.454,21.431l-1.169-5.783h-0.02l-1.264,5.783H7.39l-1.824-8.497h1.59l1.088,5.783 h0.02l1.311-5.783h1.487l1.177,5.854h0.02l1.242-5.854h1.561l-2.027,8.497H11.454z M20.209,21.431l-0.542-1.891h-2.861l-0.417,1.891 h-1.59l2.056-8.497h2.509l2.5,8.497H20.209z M17.812,15.028l-0.694,3.118h2.159l-0.796-3.118H17.812z"></path></g></svg>
                    <span>WASM</span>
                  </div>
                  <div className='iconContainer'>
                    <DiHtml5 className='icon'/>
                    <span>HTML</span>
                  </div>
                  <div className='iconContainer'>
                  <DiCss3 className='icon'/>
                  <span>CSS</span>
                  </div>
                </div>
              </div>
            )}
             { skillVisible === 'Backend' && (
              <div className='icon-container'>
                <div className='grid-col'>
                  <div className='iconContainer'>
                    <DiNodejs className='icon'/>
                    <span>NodeJs</span>
                  </div>
                  <div className='iconContainer'>
                    <svg className='icon' fill="#5a5a5a" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>C++ icon</title><path d="M22.393 6c-.167-.29-.398-.543-.652-.69L12.925.22c-.508-.293-1.339-.293-1.847 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.689l8.816 5.091c.508.293 1.339.293 1.847 0l8.816-5.091c.254-.146.485-.399.652-.689s.271-.616.271-.91V6.91c.002-.294-.102-.62-.269-.91zM12 19.109c-3.92 0-7.109-3.189-7.109-7.109S8.08 4.891 12 4.891a7.133 7.133 0 0 1 6.156 3.552l-3.076 1.781A3.567 3.567 0 0 0 12 8.445c-1.96 0-3.554 1.595-3.554 3.555S10.04 15.555 12 15.555a3.57 3.57 0 0 0 3.08-1.778l3.077 1.78A7.135 7.135 0 0 1 12 19.109zm7.109-6.714h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79zm2.962 0h-.79v.79h-.79v-.79h-.789v-.79h.789v-.79h.79v.79h.79v.79z"></path></g></svg>
                    <span>
                      C++
                    </span>
                  </div>
                  <div className='iconContainer'>
                    <DiGo className='icon'/>
                    <span>GoLang</span>
                  </div>
                  <div className='iconContainer'>
                    <DiRust className='icon'/>
                    <span>Rust</span>
                  </div>
                  <div className='iconContainer'>
                    <DiPython className='icon'/>
                    <span>Python</span>
                  </div>
                  <div className='iconContainer'>
                    <DiRedis className='icon'/>
                    <span>Redis</span>
                  </div>
                  <div className='iconContainer'>
                    <DiPostgresql className='icon'/>
                    <span>Postgresql</span>
                  </div>
                </div>
                <div className='grid-col'>
                  <div className='iconContainer'>
                    <DiMysql className='icon'/>
                    <span>MySql</span>
                  </div>
                  <div className='iconContainer'>
                    <DiMongodb className='icon'/>
                    <span>Mongodb</span>
                  </div>
                  <div className='iconContainer'>
                    <DiNginx className='icon'/>
                    <span>Nginx</span>
                  </div>
                  <div className='iconContainer'>
                    <svg className='icon' fill="#5a5a5a" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>apache</title> <path d="M10.039 18.947c-0.129 0.598-0.233 1.321-0.289 2.058l-0.003 0.056c0 0.025-0.005 0.050-0.006 0.075-0.353-0.444-0.778-0.812-1.261-1.093l-0.021-0.011c0.634 0.802 1.079 1.781 1.251 2.851l0.005 0.036c-0.074 0.007-0.159 0.011-0.246 0.011-0.427 0-0.832-0.094-1.196-0.262l0.018 0.007c0.327 0.335 0.735 0.588 1.192 0.729l0.020 0.005c-0.654 0.131-1.224 0.426-1.685 0.84l0.003-0.003c0.47-0.241 1.025-0.383 1.613-0.383 0.134 0 0.267 0.007 0.397 0.022l-0.016-0.001c-0.762 2.174-1.537 4.567-2.303 7.11 0.217-0.064 0.385-0.228 0.453-0.438l0.001-0.005c0.137-0.46 1.050-3.482 2.472-7.454l0.156-0.435c0.15-0.415 0.307-0.84 0.467-1.275l0.112-0.296v-0.005l-1.122-2.213c-0.004 0.025-0.012 0.050-0.015 0.075zM11.759 19.541c0.197-0.507 0.399-1.012 0.604-1.531 0.195-0.492 0.4-0.987 0.605-1.487q0.951-2.273 1.999-4.504l0.256-0.53c0.15-0.304 0.296-0.606 0.45-0.905 0.006-0.019 0.014-0.036 0.025-0.050l-0 0-1.118-2.203-0.055 0.087c-0.259 0.425-0.517 0.858-0.771 1.302q-0.721 1.254-1.365 2.549l-0.117 0.241c-0.531 1.050-1.063 2.326-1.508 3.641l-0.064 0.216c-0.222 0.654-0.447 1.491-0.624 2.346l-0.026 0.15 1.12 2.212c0.146-0.396 0.3-0.797 0.455-1.203zM16.42 9.144q0.77-1.438 1.632-2.824l0.050-0.080c0.28-0.44 0.562-0.866 0.846-1.275l-0.856-1.616-0.196 0.24c-0.246 0.306-0.504 0.637-0.766 0.987q-1.343 1.798-2.519 3.711l-0.028 0.047 1.116 2.203c0.237-0.472 0.475-0.94 0.719-1.397zM20.274 1.144c-0.834 0.636-1.554 1.362-2.164 2.175l-0.020 0.028 0.857 1.617c0.594-0.857 1.194-1.605 1.841-2.31l-0.014 0.016 0.072-0.077c-0.025 0.024-0.048 0.049-0.070 0.076l-0.001 0.002c-0.598 0.69-1.165 1.45-1.672 2.251l-0.046 0.077c1.266-0.092 2.408-0.238 3.53-0.442l-0.199 0.030c0.083-0.285 0.131-0.612 0.131-0.95 0-0.635-0.168-1.23-0.462-1.744l0.009 0.017s-0.825-1.337-1.794-0.762zM11.339 21.561q-0.219 0.605-0.444 1.24l-0.006 0.019c-0.020 0.057-0.040 0.117-0.062 0.177-0.1 0.284-0.187 0.54-0.387 1.125 0.37 0.241 0.66 0.578 0.838 0.977l0.006 0.014c-0.025-0.491-0.244-0.927-0.581-1.236l-0.001-0.001c0.186 0.032 0.4 0.050 0.618 0.050 1.273 0 2.403-0.613 3.111-1.56l0.007-0.010c0.054-0.090 0.113-0.199 0.165-0.312l0.009-0.023c-0.287 0.353-0.722 0.577-1.209 0.577-0.103 0-0.203-0.010-0.3-0.029l0.010 0.002h-0.001c0.925-0.348 1.679-0.973 2.181-1.773l0.011-0.018c0.117-0.191 0.232-0.4 0.35-0.629-0.648 0.711-1.577 1.155-2.61 1.155-0.255 0-0.503-0.027-0.742-0.078l0.023 0.004-0.9 0.097q-0.044 0.114-0.084 0.229zM15.868 10.727l-0.096 0.2c-0.097 0.2-0.196 0.4-0.295 0.61-0.107 0.225-0.215 0.455-0.325 0.69l-0.165 0.359q-0.941 2.040-1.783 4.124-0.306 0.744-0.616 1.537c-0.187 0.475-0.371 0.956-0.562 1.455l-0.025 0.075c-0.187 0.495-0.375 1.002-0.566 1.525l-0.012 0.034 0.9-0.1c-0.019-0.001-0.037-0.004-0.054-0.008l0.002 0c1.369-0.283 2.546-0.97 3.433-1.929l0.004-0.004c0.438-0.478 0.827-1.013 1.152-1.589l0.022-0.043c0.246-0.428 0.499-0.945 0.72-1.478l0.035-0.094c0.21-0.506 0.41-1.053 0.6-1.647-0.243 0.127-0.524 0.229-0.82 0.29l-0.021 0.004c-0.095 0.024-0.211 0.044-0.329 0.056l-0.012 0.001c0.945-0.394 1.686-1.118 2.093-2.025l0.010-0.025c-0.345 0.242-0.75 0.426-1.186 0.53l-0.024 0.005c-0.075 0.015-0.145 0.027-0.217 0.037l-0.054 0.008h0.003c0.343-0.141 0.638-0.31 0.908-0.511l-0.011 0.008c0.317-0.24 0.581-0.53 0.788-0.859l0.008-0.013 0.079-0.13 0.096-0.192c0.146-0.282 0.301-0.632 0.436-0.992l0.023-0.070 0.038-0.11c0.059-0.161 0.112-0.355 0.15-0.555l0.004-0.024c-0.034 0.028-0.073 0.055-0.113 0.079l-0.004 0.002c-0.36 0.193-0.777 0.34-1.218 0.421l-0.026 0.004-0.001-0.001h-0.021l-0.125 0.021 0.021-0.010-2.83 0.312-0.016 0.027zM19.059 4.999c-0.255 0.387-0.53 0.825-0.825 1.325l-0.050 0.077q-0.832 1.407-1.581 2.862-0.351 0.675-0.721 1.432l2.833-0.312c0.639-0.255 1.166-0.676 1.545-1.209l0.007-0.011q0.147-0.212 0.287-0.427c0.287-0.454 0.575-0.953 0.829-1.45 0.246-0.482 0.462-0.958 0.631-1.387 0.104-0.275 0.187-0.527 0.247-0.75 0.052-0.197 0.092-0.384 0.125-0.562-0.924 0.174-2.066 0.32-3.226 0.406l-0.108 0.006zM24.379 3.75l-0.219 0.441-0.215-0.441h-0.109v0.632h0.084v-0.504l0.215 0.437h0.056l0.215-0.437v0.505h0.082v-0.632zM23.254 3.75v0.082h0.195v0.55h0.090v-0.55h0.195v-0.082z"></path> </g></svg>
                    <span>Apache</span>
                  </div>
                  <div className='iconContainer'>
                  <svg className='icon' fill="#5a5a5a" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Apache Kafka icon</title><path d="M16.262,13.293c-0.935,0-1.772,0.414-2.346,1.066l-1.47-1.041c0.156-0.43,0.246-0.891,0.246-1.374 c0-0.475-0.086-0.928-0.237-1.352l1.467-1.03c0.574,0.649,1.409,1.06,2.341,1.06c1.725,0,3.129-1.403,3.129-3.129 s-1.404-3.129-3.129-3.129s-3.129,1.403-3.129,3.129c0,0.309,0.047,0.607,0.13,0.889l-1.468,1.03 C11.183,8.653,10.3,8.121,9.294,7.959V6.19c1.417-0.298,2.485-1.557,2.485-3.061C11.779,1.403,10.375,0,8.65,0 S5.522,1.403,5.522,3.129c0,1.484,1.04,2.728,2.429,3.047v1.792c-1.895,0.333-3.341,1.987-3.341,3.976 c0,1.999,1.46,3.659,3.37,3.981v1.892c-1.403,0.308-2.457,1.56-2.457,3.054C5.522,22.597,6.925,24,8.65,24s3.129-1.403,3.129-3.129 c0-1.495-1.054-2.746-2.457-3.054v-1.892c0.966-0.163,1.84-0.671,2.46-1.431l1.48,1.048c-0.082,0.279-0.128,0.574-0.128,0.88 c0,1.725,1.404,3.129,3.129,3.129s3.129-1.403,3.129-3.129S17.987,13.293,16.262,13.293z M16.262,5.977 c0.837,0,1.517,0.681,1.517,1.517s-0.68,1.517-1.517,1.517c-0.836,0-1.517-0.681-1.517-1.517S15.426,5.977,16.262,5.977z M7.133,3.129c0-0.836,0.68-1.517,1.517-1.517s1.517,0.681,1.517,1.517S9.487,4.646,8.65,4.646S7.133,3.965,7.133,3.129z M10.167,20.871c0,0.836-0.68,1.517-1.517,1.517s-1.517-0.681-1.517-1.517s0.68-1.517,1.517-1.517S10.167,20.035,10.167,20.871z M8.65,14.06c-1.167,0-2.116-0.949-2.116-2.116c0-1.167,0.949-2.116,2.116-2.116c1.167,0,2.116,0.949,2.116,2.116 C10.766,13.111,9.817,14.06,8.65,14.06z M16.262,17.939c-0.837,0-1.517-0.681-1.517-1.517c0-0.836,0.68-1.517,1.517-1.517 s1.517,0.681,1.517,1.517C17.779,17.258,17.099,17.939,16.262,17.939z"></path></g></svg>
                    <span>Kafka</span>
                  </div>
                  <div className='iconContainer'>
                    <DiGit className='icon'/>
                    <span>Git</span>
                  </div>
                  <div className='iconContainer'>
                    <svg className='icon' fill="#5a5a5a" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>GNU Bash icon</title><path d="M21.038,4.9l-7.577-4.498C13.009,0.134,12.505,0,12,0c-0.505,0-1.009,0.134-1.462,0.403L2.961,4.9 C2.057,5.437,1.5,6.429,1.5,7.503v8.995c0,1.073,0.557,2.066,1.462,2.603l7.577,4.497C10.991,23.866,11.495,24,12,24 c0.505,0,1.009-0.134,1.461-0.402l7.577-4.497c0.904-0.537,1.462-1.529,1.462-2.603V7.503C22.5,6.429,21.943,5.437,21.038,4.9z M15.17,18.946l0.013,0.646c0.001,0.078-0.05,0.167-0.111,0.198l-0.383,0.22c-0.061,0.031-0.111-0.007-0.112-0.085L14.57,19.29 c-0.328,0.136-0.66,0.169-0.872,0.084c-0.04-0.016-0.057-0.075-0.041-0.142l0.139-0.584c0.011-0.046,0.036-0.092,0.069-0.121 c0.012-0.011,0.024-0.02,0.036-0.026c0.022-0.011,0.043-0.014,0.062-0.006c0.229,0.077,0.521,0.041,0.802-0.101 c0.357-0.181,0.596-0.545,0.592-0.907c-0.003-0.328-0.181-0.465-0.613-0.468c-0.55,0.001-1.064-0.107-1.072-0.917 c-0.007-0.667,0.34-1.361,0.889-1.8l-0.007-0.652c-0.001-0.08,0.048-0.168,0.111-0.2l0.37-0.236 c0.061-0.031,0.111,0.007,0.112,0.087l0.006,0.653c0.273-0.109,0.511-0.138,0.726-0.088c0.047,0.012,0.067,0.076,0.048,0.151 l-0.144,0.578c-0.011,0.044-0.036,0.088-0.065,0.116c-0.012,0.012-0.025,0.021-0.038,0.028c-0.019,0.01-0.038,0.013-0.057,0.009 c-0.098-0.022-0.332-0.073-0.699,0.113c-0.385,0.195-0.52,0.53-0.517,0.778c0.003,0.297,0.155,0.387,0.681,0.396 c0.7,0.012,1.003,0.318,1.01,1.023C16.105,17.747,15.736,18.491,15.17,18.946z M19.143,17.859c0,0.06-0.008,0.116-0.058,0.145 l-1.916,1.164c-0.05,0.029-0.09,0.004-0.09-0.056v-0.494c0-0.06,0.037-0.093,0.087-0.122l1.887-1.129 c0.05-0.029,0.09-0.004,0.09,0.056V17.859z M20.459,6.797l-7.168,4.427c-0.894,0.523-1.553,1.109-1.553,2.187v8.833 c0,0.645,0.26,1.063,0.66,1.184c-0.131,0.023-0.264,0.039-0.398,0.039c-0.42,0-0.833-0.114-1.197-0.33L3.226,18.64 c-0.741-0.44-1.201-1.261-1.201-2.142V7.503c0-0.881,0.46-1.702,1.201-2.142l7.577-4.498c0.363-0.216,0.777-0.33,1.197-0.33 c0.419,0,0.833,0.114,1.197,0.33l7.577,4.498c0.624,0.371,1.046,1.013,1.164,1.732C21.686,6.557,21.12,6.411,20.459,6.797z"></path></g></svg>
                    <span>Shell Scripting</span>
                  </div>
                </div>
              </div>
            )}
             { skillVisible === 'Cloud' && (
                            <div className='icon-container'>
                            <div className='grid-col'>
                              <div className='iconContainer'>
                                <DiAws className='icon'/>
                                <span>AWS</span>
                              </div>
                              <div className='iconContainer'>
                                <DiDigitalOcean className='icon' />
                                <span>
                                  DigitalOcean
                                </span>
                              </div>
                              <div className='iconContainer'>
                                <DiHeroku className='icon'/>
                                <span>Heroku</span>
                              </div>
                              <div className='iconContainer'>
                                <DiFirebase className='icon'/>
                                <span>Firebase</span>
                              </div>
                              <div className='iconContainer'>
                                <DiJenkins className='icon'/>
                                <span>Jenkins</span>
                              </div>
                            </div>
                            <div className='grid-col'>
                            <div className='iconContainer'>
                                <DiDocker className='icon'/>
                                <span>Docker</span>
                              </div>
                            <div className='iconContainer'>
                                <svg className='icon' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#5a5a5a" fill-rule="evenodd" d="M5.374 15c-.335 0-.66-.153-.874-.431l-3.254-4.172a1.15 1.15 0 01-.214-.978l1.165-5.207c.074-.345.298-.623.605-.776l4.715-2.32c.15-.078.317-.116.485-.116.168 0 .335.038.485.115L13.2 3.426c.308.153.532.432.606.777l1.165 5.207c.074.345 0 .7-.214.978L11.5 14.566c-.214.268-.54.434-.875.434h-5.25zm7.718-5.835l.031.008a.308.308 0 01.26.371.306.306 0 01-.396.223h-.004l-.003-.001-.003-.001-.03-.007-.05-.01a2.548 2.548 0 01-.274-.106 2.87 2.87 0 00-.533-.156.242.242 0 00-.171.063 4.76 4.76 0 00-.131-.023 3.972 3.972 0 01-1.764 2.212c.015.042.032.083.051.123a.239.239 0 00-.023.18c.074.17.165.332.271.484.06.078.114.16.164.244l.028.057.012.025a.306.306 0 01-.381.44.307.307 0 01-.172-.18 2.608 2.608 0 00-.01-.02l-.028-.058a2.545 2.545 0 01-.089-.28 2.835 2.835 0 00-.21-.512.242.242 0 00-.156-.095 5.926 5.926 0 01-.03-.053l-.035-.064a3.97 3.97 0 01-2.824-.007l-.069.125a.249.249 0 00-.132.064c-.104.17-.184.355-.237.548a2.525 2.525 0 01-.088.28l-.025.05-.013.027v.001a.307.307 0 11-.553-.261l.014-.03.026-.052c.05-.085.104-.166.164-.244.108-.156.2-.322.277-.496a.302.302 0 00-.028-.173l.056-.133A3.972 3.972 0 014.22 9.532l-.134.023a.34.34 0 00-.176-.062 2.872 2.872 0 00-.533.156c-.09.04-.181.075-.274.105l-.05.011-.03.007H3.02l-.002.002h-.005a.308.308 0 01-.397-.349.306.306 0 01.261-.245l.004-.001h.003l.006-.002c.024-.006.054-.014.076-.018.097-.013.195-.021.293-.023.186-.013.37-.043.549-.09a.422.422 0 00.131-.133l.128-.037a3.938 3.938 0 01.624-2.752l-.097-.087a.338.338 0 00-.062-.176 2.854 2.854 0 00-.455-.319 2.557 2.557 0 01-.254-.148 1.129 1.129 0 01-.063-.05l-.004-.004a.323.323 0 01-.076-.45.295.295 0 01.244-.107.365.365 0 01.213.08l.022.017c.016.013.034.026.046.037.071.067.139.139.202.213.125.137.263.262.412.372.056.03.121.036.182.018l.11.078a3.938 3.938 0 012.552-1.224l.007-.129a.332.332 0 00.1-.157 2.844 2.844 0 00-.034-.554 2.555 2.555 0 01-.042-.29v-.053-.025-.004-.004A.306.306 0 018 2.82a.308.308 0 01.306.337v.087a2.53 2.53 0 01-.041.29 2.85 2.85 0 00-.035.553.242.242 0 00.1.153v.007l.007.13c.967.087 1.87.522 2.54 1.223l.116-.083a.34.34 0 00.186-.02c.149-.11.287-.235.412-.373a2.53 2.53 0 01.202-.213l.051-.04.017-.014a.308.308 0 01.472.388.307.307 0 01-.09.09c-.008.005-.017.012-.025.02l-.043.033a2.549 2.549 0 01-.254.148 2.865 2.865 0 00-.455.32.24.24 0 00-.058.172 4.458 4.458 0 01-.05.044l-.058.053c.542.806.769 1.783.637 2.745l.123.036c.031.056.077.101.132.132.18.048.364.078.55.09.097.003.195.01.292.024l.058.013zm-2.875-3.1l-1.308.925-.004-.002a.27.27 0 01-.43-.205v-.001l-.091-1.598a3.183 3.183 0 011.833.882zM7.754 7.818h.492l.306.381-.11.476L8 8.886l-.443-.213-.11-.475.307-.381zM7.29 5.24c.107-.024.216-.043.326-.056l-.09 1.6-.008.004a.268.268 0 01-.293.256.27.27 0 01-.135-.05l-.002.001-1.316-.93c.419-.41.945-.696 1.518-.825zM5.296 6.663l1.201 1.071-.001.007a.269.269 0 01-.106.462l-.001.005-1.54.443a3.134 3.134 0 01.447-1.988zm1.608 2.846l-.612 1.474a3.16 3.16 0 01-1.27-1.586L6.6 9.13l.003.003a.265.265 0 01.18.029.27.27 0 01.117.341l.004.006zm1.806 1.896c-.572.13-1.17.1-1.726-.088l.777-1.4h.001a.27.27 0 01.475-.001h.006l.779 1.402a3.286 3.286 0 01-.312.087zm1.004-.416L9.096 9.5l.001-.003a.269.269 0 01.296-.37l.003-.004 1.593.269a3.147 3.147 0 01-1.275 1.597zm1.442-2.343L9.61 8.201l-.002-.006a.27.27 0 01-.185-.343.27.27 0 01.08-.12L9.5 7.73l1.195-1.067c.366.594.527 1.29.46 1.983z" clip-rule="evenodd"></path></g></svg>
                                <span>Kubernetes</span>
                              </div>
                              <div className='iconContainer'>
                              <svg fill="#5a5a5a" className='icon' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.156 15.297l6.25 4.927-4.141-10.214zM16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16zM23.729 23.073c-0.016 0.63-0.536 1.125-1.167 1.109-0.313 0-0.552-0.12-0.885-0.391l-8.255-6.667-2.771 6.938h-2.396l6.995-16.807c0.167-0.422 0.568-0.693 1.021-0.677 0.432-0.016 0.839 0.25 0.99 0.677l6.365 15.323c0.057 0.151 0.104 0.313 0.104 0.464 0 0.010 0 0.010 0 0.031z"></path> </g></svg>
                              <span>Ansible</span>
                              </div>
                              <div className='iconContainer'>
                              <svg className='icon' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#5a5a5a"> <path d="M1 0v5.05l4.349 2.527V2.526L1 0zM10.175 5.344l-4.35-2.525v5.05l4.35 2.527V5.344zM10.651 10.396V5.344L15 2.819v5.05l-4.349 2.527zM10.174 16l-4.349-2.526v-5.05l4.349 2.525V16z"></path> </g> </g></svg>
                                <span>Terraform</span>
                              </div>
                            </div>
                          </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}