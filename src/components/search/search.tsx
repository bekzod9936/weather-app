import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { Autocomplete, AutocompleteItem } from '@mantine/core'
import { useClickOutside } from '@mantine/hooks'
import { useStore } from 'shared/store/store'
import shallow from 'zustand/shallow'
import { useEffect } from 'react'
import { Container } from './style'

export const Search = () => {
  const { place, setPlace, setLocation } = useStore(
    (state) => ({ place: state.place, setPlace: state.setPlace, setLocation: state.setLocation }),
    shallow,
  )

  const {
    value,
    suggestions: { data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  })
  const ref = useClickOutside(() => clearSuggestions())

  const handleInput = (e: string) => {
    setValue(e)
  }

  useEffect(() => {
    setValue(place)
  }, [])

  const handleItemSubmit = (item: AutocompleteItem) => {
    setPlace(item.value)
    setValue(item.value, false)
    clearSuggestions()
    getGeocode({ address: item.value }).then((results) => {
      const { lat, lng } = getLatLng(results[0])
      setLocation({ lat, lon: lng })
    })
  }

  return (
    <Container ref={ref}>
      <Autocomplete
        value={value}
        onChange={handleInput}
        placeholder='Выбрать город'
        onItemSubmit={handleItemSubmit}
        data={data.map((option) => option?.description)}
      />
    </Container>
  )
}
