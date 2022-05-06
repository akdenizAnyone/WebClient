import React from 'react'

import { PopulerIcon,ImageIcon,GIFIcon,PollIcon,EmojiIcon,ScheduleIcon,TagLocationIcon,ReplyIcon,ReTweetIcon,LikeIcon,ShareIcon } from '../icons/icon'

const Content = () => {
  return (
    <main className='flex-1 bg-purple-200'>
        <h1>Content</h1>
        <PopulerIcon className={'w-7 h-7 text-red-500'}/>
        <ImageIcon className={'w-7 h-7 text-red-500'}/>
        <GIFIcon className={'w-7 h-7 text-red-500'}/>
        <PollIcon className={'w-7 h-7 text-red-500'}/>
        <EmojiIcon className={'w-7 h-7 text-red-500'}/>
        <ScheduleIcon className={'w-7 h-7 text-red-500'}/>
        <TagLocationIcon className={'w-7 h-7 text-red-500'}/>
        <ReplyIcon className={'w-7 h-7 text-red-500'}/>
        <ReTweetIcon className={'w-7 h-7 text-red-500'}/>
        <LikeIcon className={'w-7 h-7 text-red-500'}/>
        <ShareIcon className={'w-7 h-7 text-red-500'}/>
    </main>
  )
}

export default Content