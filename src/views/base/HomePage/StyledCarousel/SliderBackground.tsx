import { Grid, styled } from '@mui/material'
import React from 'react'



const BackgroundStyle = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));




interface Props {
    children?: React.ReactNode
}

export const SliderBackground: React.FC<Props> = ({ children }) => {
    return (
        <>
            <BackgroundStyle>{children}</BackgroundStyle>
         
        </>

    )
}
