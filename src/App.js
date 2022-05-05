import React from 'react'

const App = () => {
  return (
    <div className='flex min-h-screen mx-auto max-w-7xl border'>
      <div className='w-72 bg-blue-500'>Sidebar</div>
      <main className='flex-1 bg-purple-200'>Feed</main>
      <aside className='w-80 bg-green-300'>Timeline</aside>
    </div>
  )
}

export default App