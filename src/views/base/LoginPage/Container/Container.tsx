import { Grid } from '@mui/material'
import React from 'react'
import { BaseDesign } from '../../../theme/BaseDesign/BaseDesign'

/**
 * Login Background style
 */

interface Props {
  children?: React.ReactNode
}
export const Container: React.FC<Props> = ({ children }) => {
  const { fonts } = BaseDesign

  return (
    <Grid
      container
      spacing={3}
      direction='column'
      justifyContent='center'
      fontFamily={fonts.fontTheme}
      alignItems='center'
      margin='0'
      display='flex'
      webkit-box-align='center'
      align-items='center'
      webkit-box-pack='center'
      justify-content='center'
      height='100vh'
      width='100%'
      max-width='100%'
    >
      {children}
    </Grid>
  )
}
