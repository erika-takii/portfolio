import './about.css'
import myImage from '../assets/icon.jpg'
import { GiGraduateCap } from 'react-icons/gi'
import { BsBookmarkStar } from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>

      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <GiGraduateCap className='about__icon' />
              <h5>Degree</h5>
              <small>1. Bsc Computer Sceience <br /><i>Eötvös Loránd University</i></small><br />
              <small>2. Bsc PHARMACEUTICAL SCIENCES <br /><i>Doshisha Women's College of Liberal Arts</i></small>
            </article>

            <article className='about__card'>
              <BsBookmarkStar className='about__icon' />
              <h5>Current GPA</h5>
              <small>4.7 / 5</small>
            </article>

            <article className='about__card'>
              <TfiWorld className='about__icon' />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>Web Development (Django, React)</li>
                  <li>Cloud Services (AWS)</li>
                  <li>Medicaine / Clinical Trial</li>
                </ul>
              </small>
            </article>



          </div>
          <p>
            I'm a <b>Computer Sceience Undergradute</b> at Eötvös Loránd University.
            With experience working as a CRA in oncology clinical trials, I have gained valuable insights into the healthcare and pharmaceutical sectors.
            I am eager to leverage my technical skills and industry knowledge to contribute as an engineer developing innovative solutions that improve patient outcomes.
            As a quick learner and motivated problem-solver, I am seeking a challenging internship where I can grow and make a meaningful impact.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About