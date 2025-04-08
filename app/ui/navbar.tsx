'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import LanguageIcon from '@mui/icons-material/Language';
import Menubutton from './Menubutton';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import InfoIcon from '@mui/icons-material/Info';
function ResponsiveAppBar() {
  return (
    <AppBar position="fixed"
      sx={{
        boxShadow: 'none',
        backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9360119047619048) 32%, rgba(0,0,0,0.8183648459383753) 49%, rgba(0,0,0,0.6783088235294117) 67%, rgba(0,0,0,0.3029586834733894) 84%, rgba(0,0,0,0.025647759103641476) 95%);',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Container
          sx={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            bgcolor: 'rgba(0,0,0,0)',
          }}
          >
          <Image 
            src='/logo.png'
            alt=''
            width= {100}
            height= {50}
          />
         
          <Box sx={{ 
            display: { md: 'flex' }, 
            
            }}>
               <Menubutton 
                  IconP={ AutoStoriesIcon }
                  Name='Nuestro menu'
                  Link=''
                />
                 <Menubutton 
                  IconP={ InfoIcon }
                  Name='Informacion'
                  Link='/'
                />
          </Box>
          </Container>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
