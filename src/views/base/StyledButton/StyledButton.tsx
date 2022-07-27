import { Button, darken, styled } from '@mui/material'

const CustomButton = styled(Button)(
  ({ theme }) => `
  :hover {
    color: ${darken(theme.palette.primary.main, 0.5)};
  }
`,
)

export const StyledButton = () => {
  return <CustomButton variant='contained'>Contained</CustomButton>
}
