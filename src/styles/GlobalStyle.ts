import { createGlobalStyle } from 'styled-components';

import { ThemeType } from './theme'

interface Props {
  theme: ThemeType
}
const GlobalStyle = createGlobalStyle<Props>`
*, *::after, *::before {
  box-sizing:border-box;
  margin: 0;
  outline:none;
  padding:0;
}
html{
  @media (max-width: 1080px){
    font-size:93.75%;
  }
  @media (max-width: 720px){
    font-size:87.5%;
  }
}
body{
  background: ${({theme})=> theme.color.gray_100};
  color: ${({theme})=>theme.color.gray_900};
}
body, input, textarea, select, button{
  line-height:1.3;
  font: 400 1rem 'Roboto', sans-serif;
}
h1 {
  font:${({theme})=> theme.texts.main_title};
}
h2 {
  font:${({theme})=> theme.texts.title};
}
h3 {
  font:${({theme})=> theme.texts.sub_title};
}
strong {

}
small {
  font:${({theme})=>theme.texts.small_text};
}
strong{
  font:${({theme})=>theme.texts.main_strong};
}
a, a:visited, a:hover, a:active {
  color: inherit;
  text-decoration: none;
}
ul {
    list-style:none;
}
`
export default GlobalStyle
