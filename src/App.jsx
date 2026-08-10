import React from 'react'

const App = () => {
  return (
    
    <div className="min-h-screen bg-linear-to-br from-[#2f170c] via-[#6b3e22] to-[#32180d] flex items-center">
      <div className='w-full max-w-5xl min-h-[calc(100vh-4rem)] mx-auto bg-[#f1d9ad] p-6 flex flex-col rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:-translate-y-1'>
        
        <h1 className='mt-8 text-4xl font-bold text-[#5a321d] text-center'>
          iTask

        </h1>
        <p className='text-[#8b5e3c] text-center mt-2'>
          Your Task Planner

        </p>
        <div className='mt-10 flex gap-3'>
          <input type="text"placeholder='What needs to be done?' 
          className='flex-1 px-4 py-3 rounded-xl border border-[#8b5e3c] outline-none' />
        </div>
      </div>

    </div>
    
  )
}

export default App
