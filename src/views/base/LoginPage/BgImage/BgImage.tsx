import React from 'react'

/**
 * Login Background Images
 */

type Position = 'absolute' | 'fixed'

export const BgImage: React.FC = () => {
  const opacity = '0.6'
  const position: Position = 'absolute'
  const url = 'src/assets/images/loginImages/'
  const imagesObj = [
    {
      src: `${url}Vector.png`,
      alt: '',
      styles: {
        position,
        width: '858px',
        height: '410px',
        top: '570px',
        left: '-6%',
        opacity,
      },
    },
    {
      src: `${url}Vector1.png`,
      alt: '',
      styles: {
        position,
        width: '610px',
        height: '540px',
        top: '430px',
        left: '-7%',
        opacity,
      },
    },
    {
      src: `${url}Vector2.png`,
      alt: '',
      styles: {
        position,
        width: '640px',
        height: '695px',
        bottom: '445px',
        left: '65%',
        opacity,
      },
    },
    {
      src: `${url}Vector3.png`,
      alt: '',
      styles: {
        position,
        width: '736px',
        height: '730px',
        bottom: '650px',
        left: '60%',
        opacity,
      },
    },
  ]
  return (
    <>
      {imagesObj.map((item, i) => {
        return (
          <img
            key={i}
            src={item.src}
            alt=''
            style={{
              position: item.styles.position,
              width: item.styles.width,
              height: item.styles.height,
              top: item.styles.top,
              bottom: item.styles.bottom,
              left: item.styles.left,
              opacity: item.styles.opacity,
            }}
          />
        )
      })}
    </>
  )
}
