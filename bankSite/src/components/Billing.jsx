import { bill } from "../assets"
import { google } from "../assets"
import { apple } from "../assets"
const Billing = () => (
  <section id='billing' className='flex md:flex-row justify-between flex-col-reverse'>
    <div className='flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative'>
      <img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>
    </div>
    <div className='flex flex-1 items-start justify-center flex-col'>
        <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>Easily control your <br className='sm:block hidden'/> billing & invoicing</h2>
        <p className='max-w-[470px] mt-5'>We give you the best easy control over your money jbww bj fwab  b aehjebe b rfb rhrbevw vwvbwb whbvwbv hbhvbwvwvbwvbwh hbwvb sjnj n bwduvb bjba vb bawuru vuwh fub svbuw ubu fuffruurb</p>
        <div className='flex flex-row mt-5'>
          <img src={apple} className='w-[100px]'/>
          <img src={google} className='w-[110px] ml-4'/>
        </div>
    </div>

  </section>  
)


export default Billing