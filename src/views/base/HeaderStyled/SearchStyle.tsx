import { alpha, styled } from '@mui/material'
import React from 'react'

const SearchStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

interface Props {
  children?: React.ReactNode
}

export const CustomHeader: React.FC<Props> = ({ children }) => {
  return <SearchStyle>{children}</SearchStyle>
}