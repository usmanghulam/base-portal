import { Grid, Paper } from '@mui/material'
import React from 'react'

/**
 * Login input form style
 */


interface Props {
    children?: React.ReactNode
}
export const StyledForm: React.FC<Props> = ({ children }) => {
    return (
        <Grid sx={{ input: { color: '#E2E2E2' }, border: '1px solid rgba(163, 165, 171, 0.2)',  backgroundColor: '#0E0F29', borderRadius : '8px' }} >
            {children}
        </Grid>
    )

}


