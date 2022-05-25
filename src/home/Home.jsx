import './home.css'
import FeaturedCities from '../components/featuredCities/FeaturedCities'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import PropertyList from '../components/propertyList/PropertyList'
import FeaturedProperties from '../components/featuredProperties/FeaturedProperties'
import MailList from '../components/mailList/MailList'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
          <FeaturedCities />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Homes guests love</h1>
          <FeaturedProperties />
          <MailList />
        </div>
        <Footer />
    </div>
  )
}

export default Home