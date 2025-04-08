import React from 'react'
import { Paper, Typography, SxProps } from '@mui/material'
import Image from 'next/image'
interface PropCardAn {
    imagen:string
    children:React.ReactNode
    number?:number
}

const sx:SxProps = {
  justifyContent:"end",
  textAlign:"end",
  flexDirection:"row-reverse",
  paddingRight:"200px",
}

const sx2:SxProps = {
  justifyContent:"start",
  paddingLeft:"200px",
}

const CardAnuncio:React.FC<PropCardAn> = ({ imagen, children, number = 0 }) => {
  return (
    <Paper
        sx={{
          ...(number%2 === 0 ? sx2:sx),
          display:"flex",
          gap:10,
          alignItems: "center",
          bgcolor:"rgba(0,0,0,0.8)",
          '@media (max-width:800px)':{
            justifyContent:"center",
            flexWrap:"wrap",
            gap:5,
          },
          '@media (max-width:1100px)':{
            padding: "30px"
          }
        }}
       >
          <Image src={imagen} alt="" width={300} height={300}/>
          <Typography sx={{maxWidth:"700px"}}>
          {children}
          </Typography>
       </Paper>
  )
}

export default CardAnuncio
