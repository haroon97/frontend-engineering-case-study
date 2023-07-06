import { colorPalette } from './colors';
import { variants } from './typography';
import './theme.types';
import { createTheme } from '@mui/material';

const { primary, success, warning, info, danger, colors } = colorPalette;

export const theme = createTheme({
  colors,
  palette: {
    primary,
    success,
    warning,
    error: danger,
    info,
  },
  typography: {
    fontFamily: ['Roboto', 'Gilmer'].join(','),
    ...variants,
  },
});
