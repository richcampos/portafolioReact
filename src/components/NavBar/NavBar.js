import React from 'react'
import { FaFacebookF, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Nav, HomeLink, SocialMedia, SocialIcons } from './styles.js'
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
          <SocialIcons href='https://www.facebook.com/atxkinteriorconstruction/' traget='_blank'>
            <FaFacebookF />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/company/atxk-interior-construction/' traget='_blank'>
            <FaLinkedin />
          </SocialIcons>
          <SocialIcons href='https://www.instagram.com/atxk_oficial/' traget='_blank'>
            <FaInstagram />
          </SocialIcons>
        </IconContext.Provider>
      </SocialMedia>
    </Nav>
  )
}
