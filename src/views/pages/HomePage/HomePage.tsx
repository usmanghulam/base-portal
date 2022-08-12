import { AppHeader, AppNavbar } from '../../../components'
import { Grid, Typography } from '@mui/material'
import CarouselComponent from '../../base/CarouselComponent/CarouselComponent'
import { StyledFeature } from '../../base/HomePage'

const url = 'src/assets/images/homeImage/'
const arrayOfObjects = [
  {
    src: `${url}Group879.png`,
    alt: '',
    data: { content: 'Total Amount Disbursed', size: '500,000,000' },
  },
  {
    src: `${url}_Group_.png`,
    alt: '',
    data: { content: 'Total Number of Vendors', size: '5,000' },
  },
  {
    src: `${url}Group850.png`,
    alt: '',
    data: { content: 'Remaining Credit Line', size: '100,000,000' },
  },
  {
    src: `${url}Group4.png`,
    alt: '',
    data: { content: 'Total nvoice Generated', size: '4,800' },
  },
]

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <AppHeader />
      {/* Navbar */}
      <AppNavbar />
      <StyledFeature>
        {arrayOfObjects.map((item, index) => (
          <Grid
            key={index}
            display='flex'
            justifyContent='space-around'
            alignItems='center'
            flexWrap='wrap'
          >
            <Grid marginTop={6}>
              <img
                src={item.src}
                alt=''
                style={{
                  border: '2px rgba(94, 220, 181, 0.12)',
                  backgroundColor: 'rgba(94, 220, 181, 0.12)',
                  padding: '6px',
                }}
              />
              <Grid marginTop={4}>
                <Typography variant='h6' fontSize={14}>
                  {item.data.content}
                </Typography>
              </Grid>
            </Grid>
            <Grid>
              <Typography variant='h4'>{item.data.size}</Typography>
            </Grid>
          </Grid>
        ))}
      </StyledFeature>
      {/* Carousel Section*/}
      <Grid sx={{ mt: 5 }}>
        <CarouselComponent />
      </Grid>
    </>
  )
}
