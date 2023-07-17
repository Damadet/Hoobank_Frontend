import { discount } from '../assets'
import { robot } from '../assets'

const Hero = () => (
  <section id='home' className='flex md:flex-row flex-col top-0 sm:py-16 py-6'>
    <div className='flex flex-1 justify-center items-start flex-col sm:px-16 px-6'>
      <div className='flex flex-col'>

        <div className='flex flex-row items-center'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
          <p className='text-gray-400'><span className='text-white'>20%</span> {" "} Discount for {" "}
          <span className='text-white'>1 month</span> {" "}
          Account</p>
        </div>

        <div>
          <h2 className='font-bold font-poppins text-[60px] max-w-[670px] sm:leading-[100px] leading-[75px]'>
            The Next <br /><span className='bg-gradient-to-r from-teal-500 via-teal-400 to-teal-200 text-transparent bg-clip-text'> Generation </span><br />Payment Method.
          </h2>
        </div>

        <p className='max-w-[483px]'> Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
      </div>
    </div>
    <div className='flex-1 flex justify-center items-center md:my-0 my-10 relative'>
        <img src={robot} alt='robot' className='w-[100%] h-[100%] relative z-[5]' />
    </div>
  </section>
)

export default Hero