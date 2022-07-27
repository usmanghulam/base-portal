import 'styled-components'
import { Theme } from '@mui/material/styles'
interface CustomTheme {
  bg: {
    main: string
    light: string
  }
  text: {
    main: string
    light: string
  }
}
declare module '@mui/material/styles' {
  type Theme = CustomTheme
  type ThemeOptions = CustomTheme
}

declare module 'styled-components' {
  export type DefaultTheme = Theme
}
