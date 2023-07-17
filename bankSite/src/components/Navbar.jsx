import { navlinks } from "../constants"
import { logo, close, menu } from '../assets'
import {useState} from 'react';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('Home');

  return(
  <nav className=' flex items-center font-normal w-full justify-between py-6'>
    <div className='w-[124px] h-[32px]'>
      <img src={logo} />
    </div>
    <ul className=' flex-row sm:flex hidden'>
      {navlinks.map((link) => 
      <li 
        key={link.id} 
        className='ml-2  hover:text-teal-500'>
        <a href={`#${link.id}`} className='ml-2 font-light text-white hover:text-teal-500 hover:font-bold'>{link.title}</a>
      </li>
      )}
    </ul>

    <div className='sm:hidden flex flex-1 justify-end items-center'>
      <img src={toggle ? close : menu } 
        alt = 'menu'
        className='w-[28px] h-[28px] object-contain'
        onClick = {() => setToggle((prev) => !prev )} 
      />

      <div className={`${!toggle ? 'hidden' : 'flex'}
      p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-slate-700 sidebar`}>
        <ul className="list-none flex  justify-end items-start flex-1 flex-col">
          {navlinks.map((nav, index) => (
            <li key={nav.id} 
            className={`font-poppins font-medium cursor-pointer text-[17px]  
            ${index === nav.length - 1 ? "mr-0" : "mb-4"}`}
            onClick={() => setActive(nav.title)}>
                <a href={`#${nav.id}`} className='text-white'>{nav.title} </a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </nav>
)
      }
export default Navbar