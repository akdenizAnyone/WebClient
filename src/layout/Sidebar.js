import React from 'react'
import { HomeIcon,ExploreIcon,NotificationIcon,MessageIcon,BookmarksIcon,ListsIcon,ProfileIcon,MoreIcon } from '../icons/icon'

const Sidebar = () => {
  return (
    <div className='w-72 bg-blue-500'>
        <h1>Sidebar</h1>
        <HomeIcon className={'w-7 h-7 text-red-500'}/>
        <ExploreIcon className={'w-7 h-7 text-red-500'}/>
        <NotificationIcon className={'w-7 h-7 text-red-500'}/>
        <MessageIcon className={'w-7 h-7 text-red-500'}/>
        <BookmarksIcon className={'w-7 h-7 text-red-500'}/>
        <ListsIcon className={'w-7 h-7 text-red-500'}/>
        <ProfileIcon className={'w-7 h-7 text-red-500'}/>
        <MoreIcon className={'w-7 h-7 text-red-500'}/>
    </div>
  )
}

export default Sidebar