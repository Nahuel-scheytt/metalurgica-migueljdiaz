import Layout from '../components/layout'
import styled from 'styled-components';
import { makeAbout, makeTitle, makeParagraph } from './mixins'
import BannerHome from '../components/banner-home/index'

const About = styled.div`
  ${() => makeAbout()}
`
const Title = styled.h3`
  ${() => makeTitle()}
`
const Paragraph = styled.p`
  ${() => makeParagraph()}
`

const Home = () => {
  return (
    <Layout home>
      <BannerHome />

      <About>
        <Title>Nosotros</Title>
        <Paragraph>Talleres Metalurgicos Miguel J Diaz es una empresa Argentina, dedicada a la fabricacion de herrajes para cortinas, surgida de un emprendimiento iniciado con el esfuerzo y trabajo sostenido desde 1970.</Paragraph>
      </About>
    </Layout>
  )
}

export default Home