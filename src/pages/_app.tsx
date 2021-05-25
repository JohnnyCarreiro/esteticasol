import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyle from 'styles/GlobalStyle'
import Header from 'components/Header'
import Footer from 'components/Footer'

interface customAppProps extends AppProps {}

const customApp: React.FC<customAppProps> = ({ Component, pageProps }) => {
    return(
      <ThemeProvider theme={theme} >
        <Header/>
        <Component { ...pageProps }/>
        <GlobalStyle />
        <Footer/>
      </ThemeProvider>
    )
}
export default customApp
