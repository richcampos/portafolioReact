import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0%;
  right: 0%;
  width: 80%;

  .slick-dots li button:before {
    font-size: 13px
  }
`

export const Image = styled.div`
  padding-top: 87vh;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
`

export const ProjectData = styled.div`
  position: fixed;
  right: 0%;
  bottom: 20%;
  width: 20%;
  z-index: 200;
  background-color: rgba(29, 29, 27, 0.9);
  padding: 2%;

  h4 {
    font-size: 2em;
    margin: 0;
    margin-bottom: 2%;
    color: #fff;
  }

  p {
    color: #fff;
    margin-bottom: 3%;
  }
`
