import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0%;
  right: 0%;
  width: 80%;

  .slick-dots li button:before {
    font-size: 13px;
    color: #fff;
  }
`

export const Image = styled.div`
  padding-top: 87vh;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
`

export const Default = styled.div`
  padding-top: 90vh;
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
`
