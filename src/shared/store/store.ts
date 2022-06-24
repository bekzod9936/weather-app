/* eslint-disable no-case-declarations */
import create from 'zustand'
import { notifyError, notifySuccess } from 'components/notifications'

interface Props {
  place: string
  message: string
  isMyPlace: boolean
  permission: boolean
  getLocation: () => void
  setPlace: (v: string) => void
  setMessage: (v: string) => void
  setIsMyPlace: (v: boolean) => void
  setPermission: (v: boolean) => void
  location: { lat: number | null; lon: number | null }
  setLocation: (location: { lat: number; lon: number }) => void
}

const myLoaction = JSON.parse(sessionStorage.getItem('myLocation') as string) ?? {
  lat: null,
  lon: null,
}

export const useStore = create<Props>((set, get) => ({
  place: '',
  isMyPlace: true,
  permission: !(myLoaction.lat === null && myLoaction.lon === null),
  location: myLoaction,
  setPlace: (place) => set({ place }),
  message: 'Permission is checking...',
  setMessage: (message) => set({ message }),
  setLocation: (location) => set({ location }),
  setPermission: (permission) => set({ permission }),
  setIsMyPlace: (isMyPlace) => {
    if (isMyPlace) {
      if (myLoaction.lat !== null && myLoaction.lon !== null) {
        get().setLocation(myLoaction)
      } else {
        get().getLocation()
      }
    }
    return set({ isMyPlace })
  },
  getLocation: () => {
    const showError = (error: any) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          const message1 = 'User denied the request for Geolocation.'
          notifyError(message1)
          get().setMessage(message1)
          return
        case error.POSITION_UNAVAILABLE:
          const message2 = 'Location information is unavailable.'
          notifyError(message2)
          get().setMessage(message2)
          return
        case error.TIMEOUT:
          const message3 = 'The request to get user location timed out.'
          notifyError(message3)
          get().setMessage(message3)
          return
        case error.UNKNOWN_ERROR:
          const message4 = 'An unknown error occurred.'
          notifyError(message4)
          get().setMessage(message4)
          return
        default:
          const message5 = 'Something is wrong!!!!'
          notifyError(message5)
          get().setMessage(message5)
      }
    }

    const showPosition = async (position: any) => {
      const location = { lat: position.coords.latitude, lon: position.coords.longitude }
      sessionStorage.setItem('myLocation', JSON.stringify(location))
      get().setLocation(location)
      notifySuccess(`Latitude: ${location.lat} Longitude:${location.lon}`)
      get().setPermission(true)
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError)
    } else {
      const message = 'Geolocation is not supported by this browser.'
      notifyError(message)
      get().setMessage(message)
    }
  },
}))
