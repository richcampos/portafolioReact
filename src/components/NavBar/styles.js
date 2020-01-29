import styled from 'styled-components'

import { Link as styledLink } from '@reach/router'

export const Nav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #1d1d1b;
  border-top: 2px solid #c1d731;
  z-index: 997;
  padding: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    padding-left: 5%;
    color: #fff;
    font-size: 2em;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: #c1d731;
    }
  }
`

export const HomeLink = styled(styledLink)`
  img {
    width: 30%;
  }
`

export const SocialMedia = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`
