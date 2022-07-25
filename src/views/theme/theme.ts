import { createTheme } from '@mui/material'
import { orange } from '@mui/material/colors'

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string
        }
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string
        }
    }
}

const Theme = createTheme({
    status: {
        danger: orange[500],
    },
})

export default Theme;