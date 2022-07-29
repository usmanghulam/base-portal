import { Grid, Paper } from '@mui/material'
import React from 'react'
/**
 * Login popup style
 */

interface Props {
    children?: React.ReactNode
}
export const Popup: React.FC<Props> = ({ children }) => {
    return (
        <Paper sx={{
            zIndex: 1300, paddingInline: '50px', color: '#E2E2E2', backgroundColor: '#07081E', fontFamily: 'Montserrat', lineHeight: 3
        }}>
            {children}
        </Paper>
    )

}


