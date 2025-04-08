import { Box, Button, Icon, Typography } from '@mui/material'
import React from 'react'
import { SvgIconComponent } from '@mui/icons-material';
import { usePathname } from 'next/navigation';

interface ButtonProps {
    IconP:SvgIconComponent;
    Name:string;
    Link:string;
}

const sx1 = {
    flexDirection: 'column',
    transition: 'all 0.1s ease-in-out',
    borderRadius: 0,
    '&:hover':{
        borderBottom: 2,
         bgcolor:"transparent"
    },
    color: "black !important",
    bgcolor: "white !important"
}

const sx2 = {
    flexDirection: 'column',
    transition: 'all 0.1s ease-in-out',
    borderRadius: 0,
    '&:hover':{
        borderBottom: 2,
         bgcolor:"transparent"
    },
}

const Menubutton:React.FC<ButtonProps> = ({ IconP, Name, Link }) => {
    const name = usePathname()
  return (
    <Button
        sx={(Link === name)? sx1:sx2}
    >
        <IconP
            sx={{
               fontSize:40
            }}
        />
        <Typography
            sx={{
                fontSize: 10
            }}
        >
            {Name}
        </Typography>
    </Button>
  )
}

export default Menubutton
