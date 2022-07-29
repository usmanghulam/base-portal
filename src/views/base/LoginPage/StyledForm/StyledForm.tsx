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
        <Grid sx={{ input: { color: '#E2E2E2' }, border: '1px solid #A3A5AB',  backgroundColor: '#0E0F29', borderRadius : '8px' }} >
            {children}
        </Grid>
    )

}


