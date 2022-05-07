import React from 'react'

const SideLink = ({ name, Icon }) => {
    return (
        <li className='group'>
            <a href='#1' className='cursor-pointer block text-xl mb-2'>
                <div className='inline-block'>
                    <div className='flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-3 pr-8 py-5'>
                        <Icon className='w-7 h-7 ' />
                        <span className='ml-4 font-bold'>{name}</span>
                    </div>
                </div>

            </a>
        </li>
    )
}

export default SideLink