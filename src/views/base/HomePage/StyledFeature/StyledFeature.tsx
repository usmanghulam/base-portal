import { Box } from '@mui/material'
import React from 'react'

/**
 * Login Background style
 */

interface Props {
  children?: React.ReactNode
}
export const StyledFeature: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        color: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid rgba(53, 54, 75, 0.5)',
        paddingBottom: '1rem',
      }}
    >
      {children}
    </Box>
  )
}
