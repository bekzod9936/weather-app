import { ReactComponent as IconWarning } from 'assets/icons/warning.svg'
import { ReactComponent as IconWet } from 'assets/icons/wet.svg'
import { ReactComponent as IconWind } from 'assets/icons/wind.svg'
import { ReactComponent as IconNavigator } from 'assets/icons/navigator.svg'
import { Search } from 'components/search'
import { useStore } from 'shared/store/store'
import shallow from 'zustand/shallow'
import { useQuery } from 'react-query'
import { fetchWeather } from 'shared/api/weather'
import { Loader } from '@mantine/core'
import dayjs from 'dayjs'
import {
  Ul,
  Nav,
  Img,
  WrapSearch,
  WrapWeather,
  Wrapper,
  Header,
  Container,
  Description,
  WrapLoading,
} from './style'

export const Body = () => {
  const { location, isMyPlace, setIsMyPlace, setPlace } = useStore(
    (state) => ({
      isMyPlace: state.isMyPlace,
      setIsMyPlace: state.setIsMyPlace,
      location: state.location,
      setPlace: state.setPlace,
    }),
    shallow,
  )

  const { data, isLoading, isFetching } = useQuery(
    ['weather', location],
    () => fetchWeather(location),
    {
      enabled: !!location.lat && !!location.lon,
      select: (res) => {
        const newData = {
          ...res.data,
          dt: dayjs(res.data.dt * 1000).format('HH:mm'),
          main: { ...res.data.main, temp: (res.data.main.temp - 273.15).toFixed(2) },
          weather: res.data.weather[0],
        }
        return newData
      },
    },
  )

  if (isLoading || isFetching) {
    return (
      <WrapLoading>
        <Loader color='white' size='xl' variant='bars' />
      </WrapLoading>
    )
  }

  return (
    <Wrapper>
      <Header>
        <WrapSearch>
          {isMyPlace ? (
            <div className='city-name'>
              {data?.sys?.country}, {data.name}
            </div>
          ) : (
            <Search />
          )}
          <div className='time'>Сейчас {data.dt}</div>
        </WrapSearch>
        <Nav>
          <ul>
            <li>
              <button className='button' onClick={() => setIsMyPlace(false)}>
                Сменить город
              </button>
            </li>
            <li>
              <button
                className='button'
                onClick={() => {
                  setPlace('')
                  setIsMyPlace(true)
                }}
              >
                <div className='navigator'>
                  <IconNavigator />
                </div>
                <div>Мое местоположение</div>
              </button>
            </li>
          </ul>
        </Nav>
      </Header>
      <Container>
        <WrapWeather>
          <Img
            alt='weather-icon'
            src={`http://openweathermap.org/img/wn/${data?.weather?.icon}.png`}
          />
          <div className='temp'>
            {Number(data?.main?.temp) > 0 ? `+${data?.main?.temp}` : `-${data?.main?.temp}`}
          </div>
        </WrapWeather>
        <Description>{data?.weather?.description}</Description>
        <Ul>
          <li>
            <IconWind />
            <span>{data.main?.pressure}</span>
          </li>
          <li>
            <IconWet />
            <span>{data.main?.humidity}</span>
          </li>
          <li>
            <IconWarning />
            <span>{data.main?.feels_like}</span>
          </li>
        </Ul>
      </Container>
    </Wrapper>
  )
}
