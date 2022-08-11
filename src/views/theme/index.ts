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

Theme.typography.h3 = {
  fontSize: '1.2rem',
  fontWeight: '700',
  textAlign: 'center',
  lineHeight: '27px',
}

export default Theme
