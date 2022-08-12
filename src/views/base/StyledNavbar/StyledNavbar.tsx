import { ListItem, styled } from '@mui/material'
import React from 'react'

const Nav = styled(ListItem)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.9)',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
}))

interface Props {
  children?: React.ReactNode
}

export const CustomNavbar: React.FC<Props> = ({ children }) => {
  return <Nav>{children}</Nav>
}
