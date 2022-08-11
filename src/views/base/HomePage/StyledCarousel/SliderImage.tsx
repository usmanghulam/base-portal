import { Grid, styled } from '@mui/material'
import React from 'react'

const StyleImage = styled(Grid)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'Center',
  },
}))

interface Props {
  children?: React.ReactNode
}

export const SliderImage: React.FC<Props> = ({ children }) => {
  return (
    <>
      <StyleImage>{children}</StyleImage>
    </>
  )
}
