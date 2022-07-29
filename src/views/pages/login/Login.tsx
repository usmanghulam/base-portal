import { Button, Checkbox, createTheme, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import { Container, StyledButton, Wrapper } from '../../base'
import { Popup } from '../../base/LoginPage/Popup/Popup'
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
            <Typography align="right">Forget Password</Typography>
          </Grid>
          <Grid sx={{ padding: '0px 20px', display: 'flex', width: '16rem', border: '1px solid #A3A5AB', backgroundColor: '#0E0F29', borderRadius: '8px' }}>
            <FormControlLabel
              control={
                <Checkbox />
              }
              label="I’m not a robot"
            />
            <img src="src/assets/images/logo/RecaptchaLogo.png" width="51px" height="51px" />
          </Grid>
          {/* Sign in button */}
          <Grid style={{
            borderRadius: '8px',
            marginTop: '1.5rem'
          }} >
            <StyledButton content="Sign In" />
          </Grid>
        </Popup>
      </Container>
    </>
  )
}
