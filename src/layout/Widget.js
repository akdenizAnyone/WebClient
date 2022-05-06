import React from 'react'
import { SearchIcon } from '../icons/icon'

const Widget = () => {
  return (
    <aside className='w-80 bg-green-300'>
        <h1>Widget</h1>
        <SearchIcon className={'w-7 h-7 text-red-500'}/>
    </aside>
  )
}

export default Widget