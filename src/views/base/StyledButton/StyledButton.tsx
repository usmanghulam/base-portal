import { Button, darken, styled } from '@mui/material'
import React from 'react'

const CustomButton = styled(Button)(
  ({ theme }) => `
  :hover {
    color: ${darken(theme.palette.primary.main, 0.5)};
  }

`,

)
interface Props{
  content: string;
}

export const StyledButton: React.FC<Props> = ({content}) => {
  return <CustomButton variant='contained' fullWidth>{content}</CustomButton>
}
