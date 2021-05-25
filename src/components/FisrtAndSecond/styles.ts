import styled from 'styled-components'
import { motion } from 'framer-motion'


export const Container = styled.div`
.fisrt{
    border:none;
    background-color:#f5f1ea;
    overflow:hidden;

    .offset{
      width:100%;
      height:100%;
    }
    .main-hero{
      height:100%;
      width:100%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      position:relative;
    }
    .hero-container{
      z-index:1;
      margin:128px 0 0 0;
      padding:0 0 20vh 0;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      height:100%;
      width:50%;
      @media (max-width: 1024px) {
        padding:0 24px 0 24px;
        width:100%;
      }
    }
    .hero-content{
      background-color:rgba(0,0,0,0.1);
      color:${({theme})=>theme.color.gray_900};
      max-width:512px;
      width:100%;
      margin: 0 124px 0 auto;
      padding: 1rem;

      > h1 {
        margin-bottom: .75rem;
      }
    }
    .a{
      position:absolute;
      width:100%;
      height:100%;
      display:flex;
      align-items:flex-end;
      .left-side{
        z-index:2;
        width:50%;
        height:100%;
        background-color:#7029e1;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        @media (max-width: 1024px){
            width:100%;
            padding:0 24px 0 24px;
        }
      }
      .left-content{
        line-height:1.6;
        max-width:512px;
        width:100%;
        margin: 0 24px 0 auto;

        > h1 {
          margin-bottom: .75rem;
        }
        > p {
          margin-bottom: 1rem;
        }

      }
      .right-side{
        width:50%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:flex-end;
        overflow:hidden;
        @media (max-width: 1024px){
            display:none;
        }
        .right-image{
          display:flex;
          justify-content:center;
          align-items:flex-start;
          width:100%;
          height:100%;
        }

      }
    }
    .b{
      background-color:#582534;
      width:100%;
      height:100%;
    }
    .c{
      background-color:red;
      width:100%;
      height:100%;
    }
    .d{
      background-color:#0a7397;
      width:100%;
      height:100%;
    }
  }

`
export const Sticky = styled(motion.div)`
  height:100vh;
  position:sticky;
  top:0;
  left:0;
  right:0;
`
