import React from 'react'
import './skill.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

type Skill = {
    name: string
    level: 'Beginner' | 'Intermediate' | 'Experienced'
}

const frontendSkills: Skill[] = [
    { name: 'HTML', level: 'Experienced' },
    { name: 'CSS', level: 'Experienced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'ReactJs', level: 'Beginner' },
    { name: 'WordPress', level: 'Intermediate' },
]

const backendSkills: Skill[] = [
    { name: 'Django', level: 'Experienced' },
    { name: 'php', level: 'Intermediate' },
    { name: 'Java', level: 'Intermediate' },
    { name: 'C', level: 'Intermediate' },
    { name: 'C#', level: 'Beginner' },
    { name: 'SQL', level: 'Beginner' },
]

const otherTools: Skill[] = [
    { name: 'github', level: 'Intermediate' },
    { name: 'Jira', level: 'Beginner' },
    { name: 'Confluence', level: 'Beginner' },
    { name: 'Linux', level: 'Intermediate' },
]

const courses: Skill[] = [
    { name: 'Object-Oriented Programming (OOP)', level: 'Beginner' },
    { name: 'Algorithms & Data Structures', level: 'Intermediate' },
    { name: 'Operating Systems', level: 'Beginner' },
    { name: 'Data Base', level: 'Beginner' },
]

const Experience: React.FC = () => {
    return (
        <section id="experience">
            <h5>The skills I have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        {frontendSkills.map((skill) => (
                            <article className="experience__details" key={skill.name}>
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4 className="text-light">{skill.name}</h4>
                                    <small className="text-light">{skill.level}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        {backendSkills.map((skill) => (
                            <article className="experience__details" key={skill.name}>
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>{skill.name}</h4>
                                    <small className="text-light">{skill.level}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>


                <div className="experience__other-tools">
                    <h3>Other Tools</h3>
                    <div className="experience__content">
                        {otherTools.map((skill) => (
                            <article className="experience__details" key={skill.name}>
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>{skill.name}</h4>
                                    <small className="text-light">{skill.level}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="experience__courses">
                    <h3>Courses</h3>
                    <div className="experience__content">
                        {courses.map((course) => (
                            <article className="experience__details" key={course.name}>
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>{course.name}</h4>
                                    <small className="text-light">{course.level}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
