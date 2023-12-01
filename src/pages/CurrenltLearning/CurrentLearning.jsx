import React from 'react'
import "./CurrentLearning.css"
import { Data } from '../Skills/SkillsData'
import SkillsItem from '../Skills/SkillsItem'

export default function CurrentLearning() {
    return (
        <>
            <h1>Currently Learning</h1>
            <div className='current-learning-container'>

                <div className="skill-container">
                    {Data.CurrentLearning.map((skill, index) => (
                        <SkillsItem data={skill} key={index} />
                    ))}
                </div>

            </div>
        </>
    )
}
