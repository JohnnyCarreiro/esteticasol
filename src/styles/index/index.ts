import styled from 'styled-components'
import bgImg from 'assets/images/bg-second.jpg'
import { motion } from 'framer-motion'

export const Main = styled.div`
  .second{
    background-image: linear-gradient(135deg,rgba(82, 41, 80, 0.8), rgba(130, 197, 90, 0.6)),url(${bgImg});
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
  }
  .third{
    background-color:yellow;
  }
  .third-container{
    padding-top:80px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  .third-content{
    max-width:1024px;
    width:100%;
    margin: 0 auto;
  }
  .fourth{
    background-color:blue;
  }
`

export const Section = styled.section`
  position:relative;
`

export const Sticky = styled(motion.div)`
  height:100vh;
  position:sticky;
  top:0;
  left:0;
  right:0;
`
