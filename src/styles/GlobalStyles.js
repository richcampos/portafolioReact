import styled, { createGlobalStyle } from 'styled-components'
import HelveticaNeueTTF from '../assets/fonts/HelveticaNeue.ttf'
import HelveticaNeueOTF from '../assets/fonts/HelveticaNeue.otf'
import HelveticaNeueBoldOTF from '../assets/fonts/HelveticaNeue-Bold.otf'
import HelveticaNeueBoldTTF from '../assets/fonts/HelveticaNeue-Bold.ttf'
import HelveticaNeueLightOTF from '../assets/fonts/HelveticaNeue-Light.otf'
import HelveticaNeueLightTTF from '../assets/fonts/HelveticaNeue-Light.ttf'

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'HelveticaNeue';
    src: url(${HelveticaNeueOTF}) format('truetype'),
    url(${HelveticaNeueTTF}) format('truetype');
  }

  @font-face {
    font-family: 'HelveticaNeue';
    src: url(${HelveticaNeueBoldOTF}) format('truetype'),
    url(${HelveticaNeueBoldTTF}) format('truetype');
    font-weight: 700
  }

  @font-face {
    font-family: 'HelveticaNeue';
    src: url(${HelveticaNeueLightOTF}) format('truetype'),
    url(${HelveticaNeueLightTTF}) format('truetype');
    font-weight: 200
  }

  html {
    box-sizing: border-box;
    font-family: 'HelveticaNeue'
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { 
    margin: 0; padding: 0; 
  }

  ul { 
    list-style: none; 
  }

  button { 
    background: transparent;
    border: 0; 
    outline: 0 
  }

  body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
`

export const HomeStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 3%;

  .filters {
    width: 30%;
    position: fixed;
    top: 0;
    left: 0%;
    height: 100vh;
    padding-left: 3%;
    padding-top: 3%;
  }

  .grid {
    width: 70%;
    margin-top: 9%
  }
`
