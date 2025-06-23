import './workExperience.css'
import React from 'react'

const WorkExperience: React.FC = () => {
    return (
        <section id="work-experience">
            <h5>What I’ve Done</h5>
            <h2>Work Experience</h2>

            <div className="container work-experience__container">
                <article className="work-experience__item">
                    <h3>Intern Software Engineer</h3>
                    <h4>OMJ Techno Solutions Inc. – Tokyo, Japan</h4>
                    <small>May 2024 – Present</small><br />


                    <small>
                        <strong>Backend Development with Django: </strong>
                        Contributed to the agile development of an e-commerce website using Django, focusing on building scalable backend systems, improving performance, and ensuring seamless user experiences. Collaborated closely with cross-functional teams to deliver high-quality features on time.
                    </small><br />

                    <small>
                        <strong>Web Development with WordPress: </strong>
                        Led the improvement and development of websites using WordPress in an agile environment.
                        Tasks included redesigning existing functionalities, creating new components, and ensuring responsive and user-friendly interfaces. Successfully launched new pages that enhanced user engagement and accessibility.
                    </small>

                </article>

                <article className="work-experience__item">
                    <h3>Clinical Research Associate</h3>
                    <h4>Mediscience Planning Inc. – Tokyo, Japan</h4>
                    <small>Apr 2019 – Aug 2023</small><br />

                    <small>
                        • Established, coordinated and supervised clinical studies in more than 10 university hospitals
                        and cancer centers.<br />
                        • Ensured that clinical trials were being conducted appropriately at the site level and that all site
                        processes were in line with the clinical trial protocol, including local and international laws.<br />
                        • Contacted for various parties including doctors, researchers, laboratories, pharmacists, ethics
                        committees and a pharmaceutical company.<br />
                        • Actively participated in obtaining approval to expand coverage for one drug.
                    </small>
                </article>

            </div>
        </section>
    )
}

export default WorkExperience
