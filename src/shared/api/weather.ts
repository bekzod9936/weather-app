import axiosInterceptor from 'shared/interceptor'

interface Props {
  lat: number | null
  lon: number | null
}

export const fetchWeather = async ({ lat, lon }: Props) => {
  const response = await axiosInterceptor.get(
    `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_KEY}`,
  )
  return response
}
