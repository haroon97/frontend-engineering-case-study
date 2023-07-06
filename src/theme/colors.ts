export const colorPalette = {
  primary: {
    main: '#267755',
    dark: '#206347',
    light: '#2C8B63',
    extraLight: '#339F71',
  },
  success: {
    main: '#39B37F',
  },
  warning: {
    main: '#DC933E',
  },
  danger: {
    main: '#D73D51',
  },
  info: {
    main: '#1786FC',
  },
  colors: {
    primary: '#267755',
    primaryDark: '#206347',
    primaryExtraLight: '#2C8B63',
    success: '#39B37F',
    danger: '#D73D51',
    warning: '#DC933E',
    important: '#1786FC',
    appBg: '#FFFFFF',
    surfacePrimary: '#E9F1EE',
    surfaceSelected: '#E3FFF3',
    surfaceDisabled: '#EBEBEC',
    surfaceBasic: '#F5F5F5',
    cardSuccess: '#EBF7F2',
    cardDanger: '#FBECEE',
    cardWarning: '#FCF4EC',
    cardImportant: '#E8F3FF',
    overlayBlack: '#000000',
    overlayWhite: '#FFFFFF',
    highEmphasis: '#202020',
    mediumEmphasis: '#626262',
    lowEmphasis: '#989898',
    reversedEmphasis: '#FFFFFF',
    placeholder: '#8F8F8F',
    border: '#EEEEEE',
    gradientDark: '#24AE00',
    gradientLight: '#C7FF29',
  },
};

export type Colors = typeof colorPalette.colors;
export type Color = keyof Colors;
