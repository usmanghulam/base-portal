import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Grid, Typography } from '@mui/material'
import { StyledButton } from '../StyledButton/StyledButton'
import { CustomSlider, SliderBackground, SliderImage } from '../HomePage'

const items = [
  {
    img: 'src/assets/images/homeImage/Vendor.png',
    src: 'src/assets/images/homeImage/Payments.png',
    name: 'Get Started With Vendor Portal',
    description:
      'Curabitur porta nisl in arcu condimentum fermentum. Nunc nec bibendum nulla. Etiam maximus neque mi, vitae aliquet ex tristique vel. In viverra augue ex.',
  },
  {
    img: 'src/assets/images/homeImage/Vendor.png',
    src: 'src/assets/images/homeImage/Payments.png',
    name: 'Get Started With Vendor Portal',
    description:
      'Curabitur porta nisl in arcu condimentum fermentum. Nunc nec bibendum nulla. Etiam maximus neque mi, vitae aliquet ex tristique vel. In viverra augue ex.',
  },
  {
    img: 'src/assets/images/homeImage/Vendor.png',
    src: 'src/assets/images/homeImage/Payments.png',
    name: 'Get Started With Vendor Portal',
    description:
      'Curabitur porta nisl in arcu condimentum fermentum. Nunc nec bibendum nulla. Etiam maximus neque mi, vitae aliquet ex tristique vel. In viverra augue ex.',
  },
]

const CarouselComponent = () => {
  return (
    <div>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  )
}
function Item(props: any) {
  return (
    <Paper sx={{ backgroundColor: 'rgb(7, 8, 30)' }}>
      <SliderBackground>
        <Grid sx={{ position: 'relative', p: 3 }}>
          <img src={props.item.src} alt='' width='100%' />
        </Grid>
      </SliderBackground>
      <SliderImage>
        <Grid sx={{ position: 'relative', p: 3 }}>
          <img src={props.item.img} alt='' width='100%' />
        </Grid>
      </SliderImage>
      <CustomSlider>
        <SliderBackground>
          <Grid marginTop={5}>
            <Typography variant='h4'>{props.item.name}</Typography>
            <Typography marginTop={3}>{props.item.description}</Typography>
            <StyledButton content='Make a Payment' />
          </Grid>
        </SliderBackground>
      </CustomSlider>
    </Paper>
  )
}

export default React.memo(CarouselComponent)
