import HomeFeatureSection from "../src/components/Home/FeatureSection"
import Footer from "../src/components/Home/Footer"
import HomeHeader from "../src/components/Home/Header"
import HomeHeroSection from "../src/components/Home/HeroSection"

const HomePage = ()=>{
  return (
    <div>
      {/* Hero Section */}
      <div  className="container bg-gray-50">
        <HomeHeader />
        <HomeHeroSection />
      </div>

      {/* Main Section */}
      <div className="container bg-white">
        <HomeFeatureSection />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default HomePage
