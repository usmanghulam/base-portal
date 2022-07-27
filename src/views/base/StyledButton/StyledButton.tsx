import { Button, darken, styled } from '@mui/material'

const CustomButton = styled(Button)(
  ({ theme }) => `
  color: ${theme.palette.primary.main};
  :hover {
    color: ${darken(theme.palette.primary.main, 0.2)};
  }
`,
)

export const StyledButton = () => {
  return <CustomButton variant='contained'>Contained</CustomButton>
}
