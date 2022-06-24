import { device } from 'shared/config/device'
import styled from 'styled-components'

export const Container = styled.footer`
  padding: 45px 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.66);
  div.temp {
    position: relative;
  }
  div.temp::after {
    content: 'o';
    top: -5px;
    right: -10px;
    font-size: 10px;
    position: absolute;
  }
  .wrap-swiper {
    display: flex;
    align-items: center;
    button {
      border: none;
      display: flex;
      cursor: pointer;
      min-width: 60px;
      min-height: 60px;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.42);
    }
    .swiper-button-disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .prev {
      margin-right: 30px;
    }
    .next {
      margin-left: 30px;
      transform: rotateY(180deg);
    }
    .text {
      font-weight: 400;
      font-size: 18px;
      color: #ffffff;
      text-align: center;
    }
    .wrap-slider {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }

  @media (max-width: ${device.mobile}) {
    padding: 25px 20px;
    .wrap-swiper {
      button {
        min-width: 40px;
        min-height: 40px;
        svg {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`

export const WrapLoading = styled.div`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
