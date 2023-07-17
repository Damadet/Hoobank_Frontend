import { stats } from "../constants"

const Stats = () =>(
  <section id='stats' className='flex sm:flex-row flex-col flex-wrap sm:justify-between justify-center sm:mb-20 mb-6'>
      {stats.map((stat) => (
        <div key={stat.name} className='flex flex-row gap-5 items-center uppercase'>
          <h2 className='font-bold text-[30px]'>{stat.number}</h2>
          <p className='bg-gradient-to-r from-teal-400 via-teal-200 to-teal-100 text-transparent bg-clip-text'>{stat.name}</p>
        </div>
      ))}
  </section>
)

export default Stats