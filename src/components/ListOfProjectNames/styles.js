import styled from 'styled-components'

export const Container = styled.div`
  background-color: #1d1d1b;
  min-height: 92vh;
  margin-bottom: 4%;

  a {
    padding: 1%;
    color: white;
    display: block;
    text-decoration: none;
    width: 20%;

    &[aria-current] {
      background-color: #c1d731;
      color: #1d1d1b;
      font-weight: bold;
    }

    &:hover {
      background-color: #c1d731;
      color: #1d1d1b;
      font-weight: bold;
    }
  }
`
