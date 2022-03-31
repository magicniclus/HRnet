import { createTheme } from '@mui/material/styles';

export const themeColor = createTheme({
    palette:{
        primary:{
            main: "#C1C1C1",
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#4caf50',
            dark: '#ba000d',
            contrastText: '#000',
          },
    }
})