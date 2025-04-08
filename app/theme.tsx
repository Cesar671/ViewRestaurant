'use client';
import { ThemeProvider, ThemeOptions, createTheme } from "@mui/material";
import React from 'react'

export const themeP:ThemeOptions = {
    palette:{
        mode: "dark",
        primary:{
            main: "#fff",
            contrastText: "#red"
        },
        secondary:{
            main: "#000",
            contrastText: "#red"
        }

    }
}

const themeCreated = createTheme(themeP)

export const Theme = ({children} : { children: React.ReactNode }) => {
    return (<ThemeProvider theme={ themeCreated }>
        {children}
    </ThemeProvider>)
}