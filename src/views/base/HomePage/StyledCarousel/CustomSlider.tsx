import { Grid, styled } from '@mui/material'
import React from 'react'

const SliderStyle = styled(Grid)(({ theme }) => ({
  position: 'absolute',
  top: '20%',
  left: '10%',
  width: '500px',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    top: '8%',
    left: '5%',
  },
}))

interface Props {
  children?: React.ReactNode
}

export const CustomSlider: React.FC<Props> = ({ children }) => {
  return <SliderStyle>{children}</SliderStyle>
}
