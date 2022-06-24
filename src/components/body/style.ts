import { device } from 'shared/config/device'
import styled from 'styled-components'

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const WrapWeather = styled.div`
  display: flex;
  color: #ffffff;
  font-size: 90px;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  div.temp {
    position: relative;
  }
  div.temp::after {
    content: 'o';
    top: 0;
    right: -20px;
    font-size: 30px;
    position: absolute;
  }
  @media (max-width: ${device.mobile}) {
    font-size: 60px;
    div.temp::after {
      right: -15px;
      font-size: 25px;
    }
  }
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    display: flex;
    align-items: center;
    margin-right: 50px;
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
    span {
      margin-left: 15px;
    }
  }
  li:last-child {
    margin-right: 0;
  }
  @media (max-width: ${device.mobile}) {
    svg {
      width: 24px;
      height: 24px;
    }
  }
`

export const WrapSearch = styled.div`
  display: flex;
  align-items: flex-end;
  @media (max-width: ${device.mobile}) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`

export const Description = styled.div`
  color: #ffffff;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 40px;
  text-transform: capitalize;
  @media (max-width: ${device.mobile}) {
    font-size: 20px;
    margin-bottom: 30px;
  }
`

export const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 45px 60px;
  flex-direction: column;
  @media (max-width: ${device.mobile}) {
    padding: 25px 30px;
  }
`

export const Header = styled.header`
  .time {
    color: #ffffff;
    font-size: 24px;
    font-weight: 400;
    margin-left: 30px;
  }
  .city-name {
    color: #ffffff;
    font-size: 50px;
    font-weight: 400;
  }

  @media (max-width: ${device.mobile}) {
    .time {
      font-size: 18px;
      margin-left: 0;
    }
    .city-name {
      font-size: 30px;
    }
  }
`

export const Nav = styled.nav`
  margin-top: 30px;
  width: 100%;
  ul {
    display: flex;
    align-items: center;
    li:not(:last-child) {
      margin-right: 30px;
    }
    .navigator {
      margin-right: 10px;
    }
    .button {
      opacity: 0.4;
      color: white;
      border: none;
      outline: none;
      display: flex;
      cursor: pointer;
      align-items: center;
      background-color: transparent;
    }
    @media (max-width: ${device.mobile}) {
      justify-content: space-between;
    }
  }
`

export const WrapLoading = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Img = styled.img`
  width: 200px;
  height: 200px;
  @media (max-width: ${device.mobile}) {
    width: 100px;
    height: 100px;
  }
`
