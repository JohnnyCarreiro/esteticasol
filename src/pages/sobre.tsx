import React from 'react'
// import Link from 'next/link'
import { Main, Section } from 'styles/sobre'
import Header from 'components/Header'
import Footer from 'components/Footer'

const IndexPage = () => {
  React.useEffect(()=>{
      window.scrollTo({top:0})
    },[]
  )
  return (
    <>
      <Header/>
        <Main>
          <Section>
            Something here
          </Section>
        </Main>
      <Footer/>
    </>
  )
  
}
  
  export default IndexPage
  