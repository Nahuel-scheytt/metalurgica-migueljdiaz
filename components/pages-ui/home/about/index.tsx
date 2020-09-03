import styled from 'styled-components';
import { makeAboutContainer, makeTitle, makeParagraph } from './mixins'

const AboutContainer = styled.div`
  ${() => makeAboutContainer()}
`
const Title = styled.h3`
  ${() => makeTitle()}
`
const Paragraph = styled.p`
  ${() => makeParagraph()}
`

const About = () => {
  return (
    <AboutContainer>
      <Title>Nosotros</Title>
      <Paragraph>Talleres Metalurgicos Miguel J Diaz es una empresa Argentina, dedicada a la fabricacion de herrajes para cortinas, surgida de un emprendimiento iniciado con el esfuerzo y trabajo sostenido desde 1970.</Paragraph>
    </AboutContainer>
  )
}

export default About