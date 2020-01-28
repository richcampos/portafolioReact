import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  width: 25%;
  height: 220px;
  position: relative;
  overflow: hidden;
  max-width: 350px;

  @media(max-width: 960px) {
    width: 75%;
    height: 200px
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  transition: all 0.8s;

  @media(max-width: 960px) {
    filter: none;
  }
`
