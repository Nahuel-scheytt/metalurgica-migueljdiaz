import { Helmet } from 'react-helmet'
import Header from './header/header'
import Footer from './footer/footer'

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/favicon.ico" />
        <title>Metalúrgica Miguel J Diaz en Buenos Aires</title>
        <meta
          name="description"
          content="Industria Metalúrgica Miguel J Diaz en Villa Domínico, Buenos Aires"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}