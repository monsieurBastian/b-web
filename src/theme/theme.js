import { extendTheme } from '@chakra-ui/react'

const theme = {
  colors: {
    primary: 'rebeccapurple',
  },
  fonts: {
    heading: `'Fredoka One', cursive`,
    body: `'Raleway', -apple-system, 'Segoe UI', 'Roboto', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica', 'Arial', sans-serif`,
  },
}

export default extendTheme(theme)