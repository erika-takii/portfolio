import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>Erika Takii</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/erika-t-587396269/"><BsLinkedin/></a>
          <a href="https://github.com/erika-takii"><BsGithub/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Erika Takii. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer