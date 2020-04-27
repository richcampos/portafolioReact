import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  position: relative;
  overflow: hidden;
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  transition: filter 1.2s;
  filter: grayscale(100%);

  &.default {
    background-size: unset;
    background-repeat: no-repeat;
  }

  &:hover {
    filter: none;

    .bg-gray {
      transform: translateX(0)
    }

    .overlay {
      transform: translateX(-100%)
    }
  }
`

export const TextBar = styled.div`
  position: absolute;
  z-index: 220;
  background-color: #1d1d1b;
  padding: 3%;
  color: #fff;
  left: 0;
  right: 0;
  bottom: 10%;
  transform: translateX(-100%);
  will-change: transform;
  transition: all 0.8s;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background-color: rgba(29, 29, 27, 0.7)
`
