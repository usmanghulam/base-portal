import { Paper } from '@mui/material'
import { BaseDesign } from '../../../theme/BaseDesign/BaseDesign'
import React from 'react'
/**
 * Login popup style
 */

interface Props {
  children?: React.ReactNode
}
export const Popup: React.FC<Props> = ({ children }) => {
  const { colors } = BaseDesign
  return (
    <Paper
      sx={{
        zIndex: 1300,
        padding: '50px',
        color: '#E2E2E2',
        backgroundColor: `${colors.primaryColor}`,
        fontFamily: 'Montserrat',
        lineHeight: 3,
        borderRadius: '16px',
      }}
    >
      {children}
    </Paper>
  )
}
