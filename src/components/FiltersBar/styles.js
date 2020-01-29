import styled from 'styled-components'
import '../../assets/select.svg'

export const Title = styled.h1`
  font-size: 5em;
  margin-bottom: 8%;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Select = styled.select`
  appearance: none;
  background-size: contain;
  width: 80%;
  background: url('../../assets/select.svg') no-repeat center;
  margin-bottom: 3%;
  border: none;
  color: #4d4d4d;
  padding: 3.5%;
  font-size: 1em;
`
