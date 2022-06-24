import { createGlobalStyle } from 'styled-components'

export const CreateGlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;;
}
ul{
list-style: none;
}

li{
   text-decoration: none;
}

:root {
  --blue: #498cec;
}
`
