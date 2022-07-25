import { Box, FormControl, OutlinedInput, Typography } from "@material-ui/core"
import StyledMaterialButton from "../../../styledComponents/button/button"
import Content from "../../../styledComponents/content/content"
import Section from "../../../styledComponents/section/section"
import Wrapper from "../../../styledComponents/wrapper/wrapper"

function Login() {
    return <Section>
        <Content>
        <img src="https://www.abhi.com.pk/wp-content/uploads/2022/06/Logo.png" style={{padding: '1pc 4.5pc'}} alt="" />
        <Box>
            <Typography variant="h6" style={{padding: '1pc 4pc'}}>Sign-In to your account</Typography>
            <Wrapper>
                <FormControl style={{ width: '50ch' }}>
                    <label style={{padding: '1pc 0pc'}}>Email Address</label>
                    <OutlinedInput type='text' />
                </FormControl>
                <FormControl style={{ width: '50ch' }}>
                    <label style={{padding: '1pc 0pc'}}>Password</label>
                    <OutlinedInput type='password' />
                </FormControl>
                <StyledMaterialButton style={{ width: '48ch' }}>Log In</StyledMaterialButton>
            </Wrapper>
        </Box>
        </Content>
    </Section>
}

export default Login
