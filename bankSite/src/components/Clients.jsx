import { clients }  from "../constants"
import ClientCard from "./ClientCard"
const Clients = () => (
  <section className='flex my-4 justify-center items-centre'  >
    <div className='flex justify-center  items-center flex-wrap w-full'>
      {clients.map((client) => (
         <div key={client.id} className=' flex mx-2 justify-center items-center sm:min-w-[192px] min-w-[120px]'>
            {/* <img src={client.logo} alt='client_logo' className='sm:w-[192px] w-[100px] object-contain'/> */}
            <ClientCard {...client}/>
         </div>
        
      ))}
    </div>
  </section>
)


export default Clients

