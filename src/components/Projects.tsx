import React from 'react'
import './projects.css'
// import IMG1 from '../assets/img5.jpg'
// import IMG2 from '../assets/img2.jpg'
// import IMG3 from '../assets/img3.jpg'
// import IMG4 from '../assets/img4.jpg'

type Project = {
  id: number
  title: string
  stack: string
//   image: string
  github: string
  live?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Tech-Evolution-Game',
    stack: 'HTML | CSS | JS',
    // image: IMG1,
    github: 'https://github.com/erika-takii/tech-evolution-game',
    live: 'https://erika-takii.github.io/tech-evolution-game/'
  },
  {
    id: 2,
    title: 'Phonebook-System',
    stack: 'C',
    // image: IMG2,
    github: 'https://github.com/erika-takii/phonebook-system',
  },
  {
    id: 3,
    title: 'My Portfolio (This website)',
    stack: 'React',
    // image: IMG4,
    github: 'https://github.com/erika-takii/portfolio',
  },
  {
    id: 4,
    title: 'Hospital-Emergency',
    stack: 'Java',
    // image: IMG3,
    github: 'https://github.com/erika-takii/hospital-emergency',
  },
]

const Myprojects: React.FC = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {projects.map(({ id, title, stack, github, live }) => (
          <article key={id} className="portfolio__item">
            {/* <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div> */}
            <h3>{title}</h3>
            <small className="text-light">{stack}</small>
            <div className="portfolio__item-cta">
              <a href={github} target="_blank" rel="noreferrer" className="btn">
                GitHub
              </a>
              {live && (
                <a href={live} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Visit Website
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Myprojects
