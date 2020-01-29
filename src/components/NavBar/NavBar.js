import React from 'react'
import { FaFacebookF, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Nav, HomeLink, SocialMedia } from './styles.js'
import { IconContext } from 'react-icons'
import Logo from '../../assets/logo.svg'

export const NavBar = () => {
  return (
    <Nav>
      <div>
        <HomeLink to='#'>
          <img src={Logo} />
        </HomeLink>
      </div>
      <SocialMedia>
        <a href='#' className='idioma'>
          en
        </a>
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <a href='https://www.facebook.com/atxkinteriorconstruction/' traget='_blank'>
            <FaFacebookF />
          </a>
          <a href='https://www.linkedin.com/company/atxk-interior-construction/' traget='_blank'>
            <FaLinkedin />
          </a>
          <a href='https://www.instagram.com/atxk_oficial/' traget='_blank'>
            <FaInstagram />
          </a>
        </IconContext.Provider>
      </SocialMedia>
    </Nav>
  )
}
