import React from 'react'
// import Link from 'next/link'
import FirstAndSecond from 'components/FisrtAndSecond'
import { Main, Section, Sticky } from 'styles/index'
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
      <Main 
        style={{
          minHeight:'1610vh',
          height: '1610vh'
        }}
      >

        <Section  style={{height:'72.7%'}} >
          <FirstAndSecond />
        </Section >

        <Section  style={{height:'9.7%'}} >
          <Sticky className='third'>
            <div className="third-container">
              <div className="third-content">
                <h1>Third Text</h1>
              </div>
            </div>
          </Sticky>
        </Section >

        <Section  style={{height:'10.1%'}} >
          <Sticky className='fourth'>
            <div className="fourth-container">
              <h1>Fourth Text</h1>
            </div>
          </Sticky>
        </Section >

        <h1>text</h1>

      </Main>

      <Footer/>
    </>
  )
  
}
  
  export default IndexPage
  