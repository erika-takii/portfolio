import './header.css'
import me from '../assets/portrait.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h5>Hello, I'm</h5>
          <h1 className="text-light">Erika Takii</h1>
          <h5 className="text-light">Software Engineering Undergraduate</h5>
          <HeaderSocials/>
          <div className="me">

            <img src={me} alt='me'/>
          </div>

          <a href="#myprojects" className='scroll__down'>Scroll Down</a>
        </div>
      </header>

    
    
  )
}

export default Header