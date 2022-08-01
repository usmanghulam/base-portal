import { Button, Checkbox, createTheme, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import { Container, StyledButton, Wrapper } from '../../base'
import { BgImage } from '../../base/LoginPage/BgImage/BgImage'
import { Popup } from '../../base/LoginPage/Popup/Popup'
import { StyledCheckbox } from '../../base/LoginPage/StyledCheckbox/StyledCheckbox'
import { StyledForm } from '../../base/LoginPage/StyledForm/StyledForm'

/**
 * Login Page
 */

export const Login = () => {
  return (
    <>
      {/* background styled component */}
      <Wrapper />
      <Container>
        <BgImage />
        {/* Login popup */}
        <Popup>
          {/* Add logo */}
          <Grid style={{
            margin: '1rem 2rem 1rem 11rem'
          }}>
            <img src="src/assets/images/logo/logo.png" width="138px" height="29px" />
          </Grid>
          {/* Title */}
          <Typography variant="h3">Sign-In to your account</Typography>
          {/* TextFeild  */}
          <label>Email Address</label>
          <StyledForm>
            <TextField style={{ width: '489px' }} ></TextField>
          </StyledForm>
          <label>Password</label>
          <StyledForm>
            <TextField fullWidth type={'password'}></TextField>
          </StyledForm>
          {/* Forget password */}
          <Grid>
            <Typography align="right" sx={{ pt: 2 }}>Forget Password?</Typography>
          </Grid>
          {/* Checkbox */}
          <StyledCheckbox>
            <FormControlLabel
              control={
                <Checkbox />
              }
              label="I’m not a robot"
            />
            <img src="src/assets/images/loginImages/RecaptchaLogo.png" width="51px" height="51px" />
          </StyledCheckbox>
          {/* Sign in button */}
          <Grid style={{
            borderRadius: '8px'
          }} >
            <StyledButton content="Sign In" />
          </Grid>
        </Popup>
      </Container>
    </>
  )
}
