import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Business from "./components/Business"
import Billing from "./components/Billing"
import CardDeal from "./components/CardDeal"
import Reviews from "./components/Reviews"
import Clients from './components/Clients'
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <div className='bg-gray-900 flex justify-center items-center sm:px-16 px-6'>
    <div className="xl:max-w-[1280px] w-full">
      <Navbar />
    </div>
    </div>

    <div className='bg-gray-900 flex justify-center items-start'>   
      <div className='xl:max-w-[1280px] w-full'>
        <Hero />
      </div>
    </div>

    <div className='bg-gray-900 flex justify-center items-start sm:px-16 px-6 sm:py-16 py-6'>
      <div className='xl:max-w-[1280px] w-full '>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Reviews />
        <Clients />
        <CallToAction />
        <Footer />
        
      </div>
    </div>

    </>
  )
}

export default App
