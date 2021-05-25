import React from 'react'
import { useTransform, useViewportScroll } from 'framer-motion'

import Navbar from 'components/Navbar'

import { Container } from './styles'

const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  const headerY = useTransform(
    scrollYProgress,
    [0.188, 0.198, 0.7, 0.8],
    ['0%','-100%', '-100%', '0%']
  )
  const headerHeight = useTransform(
    scrollYProgress,
    [0.047, 0.058],
    ['128px','80px']
  )
  return (
    <Container
      style={{
        y:headerY,
        height:headerHeight,
      }}
    >
      <div className="nav">
        <Navbar/>
      </div>
    </Container>
  )
}

export default Header
