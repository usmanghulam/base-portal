import { styled } from '@mui/material'
import React from 'react'

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

interface Props {
  children?: React.ReactNode
}

export const CustomSearch: React.FC<Props> = ({ children }) => {
  return <SearchIconWrapper>{children}</SearchIconWrapper>
}
