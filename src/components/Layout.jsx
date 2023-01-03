import Header from './Header'
import Snow from './Snow'
import Footer from './Footer'

const Layout = ({children}) => {

  return (
    <>
      <Header />
      {children}
      <Snow show={false} />
      <Footer />
    </>
  )

}

export default Layout
