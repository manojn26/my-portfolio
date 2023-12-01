import React from 'react'
import SkillsItem from './SkillsItem'
import { Data } from "./SkillsData"
import "./Skill.css"
export default function Skill() {
    return (
        <>
            <h1>My Skills</h1>


            <div className="content">


                <details open>
                    <summary className="skill-heading">
                        Programming Languages
                    </summary>
                    <div className="skill-container">
                        {Data.Languages.map((skill, index) => (
                            <SkillsItem data={skill} key={index} />
                        ))}
                    </div>
                </details>

                <details open>
                    <summary className="skill-heading">
                        Frontend Technologies
                    </summary>
                    <div className="skill-container">
                        {Data.Frontend.map((skill, index) => (
                            <SkillsItem data={skill} key={index} />
                        ))}
                    </div>
                </details>

                <details open>
                    <summary className="skill-heading">
                        Backend Technologies
                    </summary>
                    <div className="skill-container">
                        {Data.Backend.map((skill, index) => (
                            <SkillsItem data={skill} key={index} />
                        ))}
                    </div>
                </details>

                <details open>
                    <summary className="skill-heading">
                        Databases
                    </summary>
                    <div className="skill-container">
                        {Data.DataBase.map((skill, index) => (
                            <SkillsItem data={skill} key={index} />
                        ))}
                    </div>
                </details>

            </div>
        </>
    )
}
