import { createTheme } from '@mui/material/styles'
import { BaseDesign } from './BaseDesign/BaseDesign'

const Theme = createTheme({
  palette: {
    primary: {
      main: BaseDesign.colors.primaryColor,
    },
    secondary: {
      main: BaseDesign.colors.secondaryColor,
    },
  },
})

export default Theme
