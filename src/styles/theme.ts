const defaultTheme = {
  color:{
    gray_100: '#3d363c',
    gray_200: '#534d54',
    gray_300: '#676069',
    gray_400: '#79727c',
    gray_500: '#8b838e',
    gray_600: '#9e94a0',
    gray_700: '#c5b8c6',
    gray_800: '#d9cad8',
    gray_900: '#eedeed',
    gray_1000: '#f7ebf7',

    primary: '#522950',
    secondary: '#82c55a',

    alerts: {
      default: '#9f4198',
      success: '#dd59a0',
      danger: '#b22d59'
    }
  },

}

export type ThemeType = typeof defaultTheme
export default defaultTheme
