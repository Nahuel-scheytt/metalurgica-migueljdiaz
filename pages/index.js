import Layout from '../components/layout'
import { ParallaxBanner } from 'react-scroll-parallax';

export default function Home() {
  return (
    <Layout home>
      <ParallaxBanner
        className="your-class"
        layers={[
          {
            image: '../public/images/quienes-somos.jpg',
            amount: 0.1,
          },
        ]}
        style={{
          height: '650px',
        }}
      >
        <h1>Banner Children</h1>
      </ParallaxBanner>
    </Layout>
  )
}