import { useWindowSize } from '../../../../hooks/window-size'
import { ParallaxBanner } from 'react-scroll-parallax';
import styled from 'styled-components';
import { makeParallaxBannerContainer, makeHeading, makeTitle } from './mixins'

const ParallaxBannerContainer = styled(ParallaxBanner)`
  ${() => makeParallaxBannerContainer()}
`
const Heading = styled.div`
  ${() => makeHeading()}
`
const Title = styled.h1`
  ${() => makeTitle()}
`

const BannerHome = () => {
  const { isMobile } = useWindowSize()

  return (
    <ParallaxBannerContainer
      layers={[
        {
          image: '../images/quienes-somos.jpg',
          amount: 0.2,
        },
      ]}
      style={{
        height: `${isMobile ? '300px' : '500px'}`,
      }}
    >
      <Heading>
        <Title>Bienvenidos a Metalúrgica Miguel J Diaz</Title>
      </Heading>
    </ParallaxBannerContainer>
  )
}

export default BannerHome
