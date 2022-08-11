import { Button, lighten, styled } from '@mui/material'
import React from 'react'

const CustomButton = styled(Button)(
  ({ theme }) => `
  :hover {
    color: ${lighten(theme.palette.secondary.main, 0.9)};
  }

`,

)
interface Props {
  content: string;
}

export const StyledButton: React.FC<Props> = ({ content }) => {
  return <CustomButton variant='contained' sx={{ py: 1, mt: 5, background: '#61D1AE' , color:'#1D1446'}}>{content}</CustomButton>
}
