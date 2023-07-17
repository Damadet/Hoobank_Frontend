import { card } from "../assets"
import Button from "./Button"

const CardDeal = () =>(
  <section id='solution' className='flex md:flex-row flex-col'>
    <div className='flex flex-col justify-center items-start'>
      <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px]'>Find a better card deal <br className='sm:block hidden'/>in few easy steps</h2>
      <p className='max-w-[470px] mt-5 font-poppins'>Authir hdhahsb vaydv yad gdav dhadvhva asygayfgfhedh hsavhavh vasvashvah vahvha djguadbcjacua gabkhcua ycvhabcjas cyacvhacb ajscbhacjcab u</p>
      <Button />    
    </div>
    <div className='flex flex-1 justify-center items-center relative md:pl-9 md:mr-10 mr-0 md:mt-0 mt-50'>
      <img src={card} alt='card' className='w-[100%] h-[100%] relative ' />
    </div>
  </section>
)


export default CardDeal