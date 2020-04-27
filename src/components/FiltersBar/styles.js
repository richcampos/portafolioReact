import styled from 'styled-components'
import ReactSlider from 'react-slider'
import '../../assets/images/select.svg'
import Slider from 'react-input-slider'

export const StyledSlider = styled(Slider)`
  width: 80%;
  /* height: 25px;
  margin-bottom: 5%;

  .thumb {
    background-color: #1d1c1b;
    color: #fff;
    font-size: 0.8em;
    padding: 3%;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
  }

  .track {
    top: 65%;
    bottom: 10%;
    background-color: #c1d731;
  } */
`

export const Title = styled.h1`
  font-size: 5.5em;
  margin-bottom: 8%; 
  font-weight: 700;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Select = styled.select`
  appearance: none;
  background-size: cover;
  background-position: 100%;
  margin-bottom: 8%;
  margin-top: 1%;
  background-color: #333333;
  border: none;
  color: #4d4d4d;
  padding: 2.3%;
  font-size: 1em;
  font-family: 'HelveticaNeue';
  background: url('../../assets/images/select.svg') no-repeat;
  background-size: cover;
  background-position: center;
  width: 88%;
`
