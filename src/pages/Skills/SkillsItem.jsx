import React from 'react'
import "./Skill.css"

const SkillsItem = ({ data }) => {
    return (
        <div className="skill-item">
            <img src={data.image} alt={data.image} />
            <p>{data.name}</p>
        </div>
    )
}

export default SkillsItem