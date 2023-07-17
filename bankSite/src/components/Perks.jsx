


const Perks = ({id, name, icon, text }) => (
  <section id='perks' className=''>
      <div key={id} className='flex sm:flex-row flex-col'>
      <div className='flex flex-row pt-4'>
        <div className='flex bg-teal-200 w-[50px] h-[50px] justify-center bg-opacity-5 sm:m-3 m-1 items-center rounded-full'>
          <img src={icon} className='w-[25px] h-[25px] p-[2px]'/>
        </div>
        <div className='flex flex-col'>
          <p className='font-poppins font-bold'>{name}</p>
          <p className='max-w-sm'>{text}</p>
        </div>
      </div>
      </div>
  </section>
  
)


export default Perks