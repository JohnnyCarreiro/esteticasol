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
  texts: {
    main_title:'900 3rem/4.25rem Kaushan Script, sans-serif',//h1
    title:'700 2rem/3.5rem Kaushan Script, sans-serif',//h2
    sub_title:'700 1.5rem/3rem Kaushan Script, sans-serif',//h3
    main_text:'400 1rem/1.5rem Roboto, sans-serif',//p, a ...
    main_strong:'700 1rem/1.5rem Roboto, sans-serif',//strong
    small_text:'300 0.875rem/1.3125rem Roboto, sans-serif'//p, a, small ..
  }

}

export type ThemeType = typeof defaultTheme
export default defaultTheme
