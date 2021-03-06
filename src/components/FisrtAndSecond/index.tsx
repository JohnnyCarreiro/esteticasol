import React from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
// import { Sticky } from 'styles/index'
import bgImg  from 'assets/images/bg.jpg'
import rocketIMG from 'assets/images/rocket.png'
import { Container,Sticky } from './styles'

// import { Container } from './styles' 

const FisrtAndSecond: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  const frameOpacity = useTransform(scrollYProgress,[0.196,0.198], [0,1])
  const frameScale = useTransform(scrollYProgress,[0.558,0.627], [0.8,0.8])
  return (
      <Sticky className='second' >
          <First />
          <motion.div 
            style={{
              position:'absolute',
              top:0,
              left:0,
              right:0,
              height:'100vh',
              borderRadius:'4px',
              border:'4px solid #fff',
              opacity: frameOpacity,
              scale:frameScale,
            }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </Sticky>
  );
}
const First:React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  const firstScale = useTransform(scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.8, 0.8, 1]
    )
    const firstFontScale = useTransform(scrollYProgress,
      [0.198, 0.264, 0.558, 0.627],
      ['1rem', "1.2rem", '1.2rem', '1rem']
      )
    const firstRadius = useTransform(scrollYProgress,
      [0.198, 0.264, 0.558, 0.627],
      [0, 4, 4, 0]
      )
    const leftSideHeight = useTransform(scrollYProgress,
      [0, 0.058],
      ['20vh', '100vh']
    )
    const leftSidetextOpacity = useTransform(scrollYProgress,
      [0,0.058],
      [0,1]
      )
    const rightSideY = useTransform(scrollYProgress,
      [0.047, 0.093],
      ['58vh', '0vh']
    )
    const rightSideScale = useTransform(scrollYProgress,
      [0.047, 0.093],
      [0, 0.511]
    )
    const offsetY = useTransform(scrollYProgress,
      [0.298, 0.328, 0.357, 0.387, 0.457,0.54],
      ['0%', '-100%', '-100%','-200%','-200%', '-300%']
    )
    const bgOpacity = useTransform(scrollYProgress,
      [0.198, 0.264],
      [1,0]
    )
  return (
    <Container>
      <Sticky 
      className='fisrt'
      style={{
        scale: firstScale,
        borderRadius: firstRadius,
        fontSize:firstFontScale,
        color:'#fff'
      }}
     >
       <motion.div className="offset"
        style={{
          y: offsetY,
        }}
       >
        <div className="main-hero">
          <div className='hero-container'>
            <div className="hero-content">
              <h1>Sua empresa faz neg??cios on-line, ou esta fora dos neg??cios?</h1>
              <p>
              Com o mundo cada vez mais globalizado, n??o ter uma presen??a digital seria o mesmo que abrir sua empresa em meio ao deserto. 
              </p>
            </div>
          </div>
          <div className="a">
            <motion.div 
              className="bg-a"
              style={{
                backgroundImage: `linear-gradient(135deg,rgba(112, 41, 225, 0.6), rgba(255, 147, 102, 0.6)),url(${bgImg})`, 
                backgroundSize:'cover', 
                backgroundPosition:'center',
                backgroundRepeat: 'no-repeat',
                filter: 'blur(4px)',
                opacity:bgOpacity,
                height:'110%',
                width:'110%',
                position:'absolute',
                left:'-10px',
                zIndex:0
              }}
            />
              <motion.div
                className='left-side'
                style={{
                  height: leftSideHeight
                }}
              >
                <motion.div 
                  className="left-content"
                  style={{
                    opacity:leftSidetextOpacity,
                    color:'#fff',
                  }}
                >
                  <h1>De volta ao Jogo</h1>
                  <p>Saiba como sua empresa pode ter resultados excelente com uma administra????o mais eficiente e com estrat??gias que far??o voc?? voltar aos business</p>
                  <h1>Sobre a connect</h1>
                  <p>Somos uma empresa de consultoria e desenvolvimento de solu????es para organiza????o, fluxo de informa????es e gest??o de processos administrativos, comerciais, financeiros e marketing para empresas.</p>
                </motion.div>
              </motion.div> 
            <div className="right-side">
              <motion.div
                className='right-image'
                style={{
                  y: rightSideY,
                  scale: rightSideScale,
                }}
              >
                <img src={rocketIMG} alt="Rocket"/>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="b">
          <h1>Business Intelligence</h1>
          <p>
            Administre sua empresa e gerencie seus times de forma mais eficiente e com informa????es que far??o voc?? tomar as decis??es corretas.<br/>
            <br/>
            <br/>Consultorias em :
            <br/>- Gest??o Inteligente;
            <br/>- Plano de neg??cio;
            <br/>- Plano de marketing;
            <br/>- Desenvolvimento em lideran??a;</p>
        </div>
        <div className="c">
          <h1>Some text For C</h1>
        </div>
        <div className="d">
          <h1>Some text For D</h1>
        </div>
       </motion.div>
     </Sticky>
    </Container>
  )
}

export default FisrtAndSecond;
