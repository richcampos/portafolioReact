import styled from 'styled-components'

export const Bar = styled.div`
  position: fixed;
  width: 80%;
  background-color: #1d1d1b;
  top: 0;
  right: 0;
  z-index: 250;
  border-bottom: 1px solid #c1d731;

  a {
    font-size: 1.5em;
    text-decoration: none;
    color: #c1d731;
    padding: 1%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:hover {
      color: #fff
    }
  }
`
