export const theme = {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  box: {
    shadow: '0 8px 8px rgba(0, 0, 0, 0.08)'
  },
  font: {
    family:
      "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxxxsmall: '0.8rem',
      xxxsmall: '1.2rem',
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '2rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4rem',
      xxlarge: '4.8rem',
      xxxlarge: '5.6rem',
      huge: '6.4rem'
    }
  },
  colors: {
    neutral_100: '#FFFFFF',
    neutral_200: '#F7F7F7',
    neutral_300: '#ECECEC',
    neutral_400: '#CECFD1',
    neutral_500: '#788089',
    neutral_600: '#424A52',
    yellow_90: '#FEDA3DCC',
    yellow_100: '#FFC700',
    yellow_110: '#E4B50A',
    green_90: '#1BC250',
    green_100: '#08A93C',
    green_110: '#008F2D',
    blue_90: '#2396FE',
    blue_100: '#0086FF',
    blue_110: '#0079E5',
    red_90: '#FA5A72',
    red_100: '#E12A45',
    red_110: '#C70E2A',
    branding_color_primary_90: '#2396FE',
    branding_color_primary_100: '#0086FF',
    branding_color_primary_110: '#0079E5',
    branding_color_secondary_90: '#FFDA2E',
    branding_color_secondary_100: '#FCD000',
    branding_color_secondary_110: '#EBC200',
    logo_primary: '#0086FF',
    logo_secondary: '#ED6A0A'
  },
  spacings: {
    xxxsmall: '0.8rem',
    xxsmall: '1rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const;
