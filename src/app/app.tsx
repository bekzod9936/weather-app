import { Body } from 'components/body'
import { Footer } from 'components/footer'
import { useEffect } from 'react'
import { useStore } from 'shared/store/store'
import shallow from 'zustand/shallow'
import { WrapMessage, Container } from './style'

const myLoaction = JSON.parse(sessionStorage.getItem('myLocation') as string) ?? {
  lat: null,
  lon: null,
}

const App = () => {
  const { message, permission, getLocation } = useStore(
    (state) => ({
      message: state.message,
      permission: state.permission,
      getLocation: state.getLocation,
    }),
    shallow,
  )

  useEffect(() => {
    if (myLoaction.lat === null && myLoaction.lon === null) {
      getLocation()
    }
  }, [])

  return (
    <Container>
      {permission ? (
        <>
          <Body />
          <Footer />
        </>
      ) : (
        <WrapMessage>{message}</WrapMessage>
      )}
    </Container>
  )
}

export default App
