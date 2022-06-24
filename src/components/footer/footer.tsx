/* eslint-disable no-param-reassign */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { useRef } from 'react'
import { ReactComponent as IconArrow } from 'assets/icons/arrow.svg'
import { useQuery } from 'react-query'
import { fetchForecast } from 'shared/api/forecast'
import { useStore } from 'shared/store/store'
import { Loader } from '@mantine/core'
import dayjs from 'dayjs'
import { getWeeksOfName } from 'shared/utilities'
import { WrapLoading, Container } from './style'

export const Footer = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const location = useStore((state) => state.location)

  const { data, isLoading, isFetching } = useQuery(
    ['forecast', location],
    () => fetchForecast(location),
    {
      enabled: !!location.lat && !!location.lon,
      select: (res) => {
        const newData = {
          ...res.data,
          list: res.data.list.map((v: any) => ({
            ...v,
            weather: v.weather[0],
            main: { ...v.main, temp: (v.main.temp - 273.15).toFixed(2) },
            dt_txt: `${getWeeksOfName(dayjs(v.dt_txt).day())}  ${dayjs(v.dt_txt).format('HH:mm')}`,
          })),
        }
        return newData
      },
    },
  )

  return (
    <Container>
      {isLoading || isFetching ? (
        <WrapLoading>
          <Loader color='white' variant='bars' />
        </WrapLoading>
      ) : (
        <div className='wrap-swiper'>
          <button ref={navigationPrevRef} className='prev'>
            <IconArrow />
          </button>
          <Swiper
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            onSwiper={(swiper: any) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef.current
                swiper.params.navigation.nextEl = navigationNextRef.current
                swiper.navigation.destroy()
                swiper.navigation.init()
                swiper.navigation.update()
              })
            }}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 10,
              },
            }}
          >
            {data?.list.map((v: any) => (
              <SwiperSlide key={v.dt} className='wrap-slider'>
                <div className='text'>{v.dt_txt}</div>
                <div>
                  <img
                    alt='weather-icon'
                    className='weather-icon'
                    src={`http://openweathermap.org/img/wn/${v?.weather?.icon}.png`}
                  />
                </div>
                <div className='temp text'>
                  {Number(v?.main?.temp) > 0 ? `+${v?.main?.temp}` : `-${v?.main?.temp}`}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button ref={navigationNextRef} className='next'>
            <IconArrow />
          </button>
        </div>
      )}
    </Container>
  )
}
