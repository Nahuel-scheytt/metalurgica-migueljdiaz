import Layout from '../components/layout'
import BannerHome from '../components/pages-ui/home/banner-home/index'
import About from '../components/pages-ui/home/about/index'

const Home = () => {
  return (
    <Layout home>
      <BannerHome />
      <About />
    </Layout>
  )
}

export default Home