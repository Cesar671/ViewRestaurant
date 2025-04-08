import React from 'react'
import { Parallax } from 'react-parallax'
import { Box } from '@mui/material'

interface ParallaxProps{
  image: string
  vh?:string
}

const ParallaxCustom:React.FC<ParallaxProps> = ({image, vh='40vh'}) => {
  return (
    <div>
      <Parallax bgImage={image} strength={300} bgImageStyle={{
        maxWidth: '1500px'
      }}>
          <Box
            sx={{
              height:vh,
              bgcolor:"rgba(0,0,0,0.2)"
            }}
          >

          </Box>
       </Parallax>
    </div>
  )
}


export default ParallaxCustom
