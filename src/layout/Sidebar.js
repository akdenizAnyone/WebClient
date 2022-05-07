import React from 'react'
import { HomeIcon, ExploreIcon, MessageIcon, ProfileIcon } from '../icons/icon'
import anyoneLogo from "../images/anyone.svg"
import SideLink from "../components/SideLink"



const sideLinks = [
  {
    name: 'Home',
    icon: HomeIcon
  },
  {
    name: 'Anonymous',
    icon: ExploreIcon
  },
  {
    name: 'Messages',
    icon: MessageIcon
  },
  {
    name: 'Profile',
    icon: ProfileIcon
  },
];

const Sidebar = () => {
  return (
    <div className='px-2 flex flex-col justify-between w-72'>
      <div>
        <div className='flex group'>
          <div className='mt-1 mb-24 ml-1 group-hover:bg-black flex items-center justify-center w-12 h-12 rounded-full transform transition-colors duration-200'>
            <img src={anyoneLogo} alt="Anyone Logo" className='w-14 h-20' />
          </div>
          <a href='#1' className='ml-4 pt-3 font-bold text-xl group-hover:text-primary-base transform transition-colors duration-200'>Anyone</a>
        </div>

        <nav className='mb-16'>
          <ul>
            {sideLinks.map(link => (
              <SideLink key={link.name} name={link.name} Icon={link.icon} />
            ))}
          </ul>
        </nav>
        <button className='bg-primary-base text-white rounded-full py-3 px-8 w-11/12 shadow-lg hover:bg-primary-dark transform transition-colors duration-200'>Anyweet</button>
      </div>

      <div>Bot</div>
    </div>
  )
}

export default Sidebar