import { Grid, Paper } from '@mui/material'
import React from 'react'

/**
 * Login checkbox style
 */


interface Props {
    children?: React.ReactNode
}
export const StyledCheckbox: React.FC<Props> = ({ children }) => {
    return (
        <Grid sx={{ padding: '0px 20px', display: 'flex', width: '16rem', border: '1px solid rgba(163, 165, 171, 0.2)', backgroundColor: '#0E0F29', borderRadius: '8px' }}>
            {children}
        </Grid>
    )

}

