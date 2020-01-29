import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, 
    BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, 
    Cantarell, 'Open Sans', 
    'Helvetica Neue', sans-serif;
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
