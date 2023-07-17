import Perks from "./Perks"
import { perks } from "../constants"
import Button from "./Button"
const Business = () => (
  <section id='features' className='flex sm:flex-row flex-col justify-between items-start'>
    
    <div className='flex  flex-col justify-center items-start'>
      <div className='flex flex-col'>
        <h2 className='font-bold font-poppins text-[40px] max-w-[670px] sm:leading-[60px]  leading-[40px]'>You do the business,<br className='sm:block hidden'/> we handle your money</h2>
        <p className='max-w-md my-5'>With the right credit card, you can improve your financial life by building credit, 
        earning rewards and saving money. But with hundreds of credit cards on the market</p>
      </div>
      <div className='flex items-start'>
      <Button />
      </div>
    </div>
    <div className='sm:py-0 py-5'>
    {perks.map((perk => (
      <Perks key={perk.id} {...perk}/>  
      )))}
    
    </div>
  </section>
)

export default Business