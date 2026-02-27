import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"
import {motion} from "framer-motion"

import "react-vertical-timeline-component/style.min.css"

import {styles} from "../styles.js"
import { experiences } from "../constants/index.js"
import SectionWrapper from "../hoc/SectionWrapper.jsx"
import { textVariant } from "../utils/motion.js"


const ExperienceCard=({experience})=>
{

  return(
    <>

      <VerticalTimelineElement

            contentStyle={{background:"#1d1836",color:"#fff"}}
            contentArrowStyle={{borderRight:"7px solid #232631"}}
            iconStyle={{background:experience.iconBg}}
           

      >


              <div>

                  <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>

                  <p style={{margin:0}} className="text-secondary text-[16px] font-semibold">{experience.company_name}</p>


                  <ul className="mt-5 list-disc ml-5 space-y-2">

                      {experience.points.map((point,index)=>
                      (
                          <li 
                          
                          key={`experience-point-${index}`}
                          className="text-white-100 text-[14px] pl-1 tracking-wider"
                          >
                            {point}
                          </li>
                      ))}


                  </ul>

                  <br/>

                <p style={{margin:0}} className="text-secondary text-[16px] font-semibold">{experience.date}</p>
                   
              </div>

              


      </VerticalTimelineElement>

    
    </>
  )
}

const Experience = () => {
  return (
   <>

      <motion.div variants={textVariant()}>

            <p className={styles.sectionSubText}>What I have done so Far</p>

            <h2 className={styles.sectionHeadText}>Education</h2>

      </motion.div>


        <div className="mt-20 flex flex-row gap-5">

             <VerticalTimeline>


                    {experiences.map((experience,index)=>
                    ( 

                          <ExperienceCard key={index} experience={experience}/>

                    ))}

              
              </VerticalTimeline>  
               
        </div>
   
   </>
  )
}

export default SectionWrapper(Experience,"work");