import { useState } from 'react'
import { FaTrash } from "react-icons/fa";

const App = () => {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() === '') return

    setTasks([...tasks, { text: task, completed: false }])
    setTask('')
  }

  return (

    <div className="min-h-screen bg-linear-to-br from-[#2f170c] via-[#6b3e22] to-[#32180d] flex items-center">
      <div className='w-full max-w-5xl min-h-[calc(100vh-4rem)] mx-auto bg-[#f1d9ad] p-6 flex flex-col rounded-3xl shadow-2xl'>

        <h1 className='mt-8 text-4xl font-bold text-[#5a321d] text-center'>
          iTask
        </h1>
        <p className='text-[#8b5e3c] text-center mt-2'>
          Your Task Planner
        </p>
        <div className='mt-10 flex gap-3'>
          <input type="text" placeholder='What needs to be done?'
            className='flex-1 px-4 py-3 rounded-xl border border-[#8b5e3c] outline-none' value={task} onChange={(e) => setTask(e.target.value)} />

          <button onClick={addTask} className='px-5 py-3 bg-[#5a321d] text-white rounded-xl cursor-pointer hover:bg-[#7a4a2b] transition'>
            Add
          </button>
        </div>
        <div className='mt-6'>
          {tasks.map((item, index) => (

            <p key={index} className={`bg-[#f8e7c7] border border-[#c49a6c] rounded-xl px-4 py-4 mb-3 text-[#5a321d] flex items-center gap-3 ${item.completed ? 'line-through opacity-60' : ''
              }`}>
              <input type="checkbox" checked={item.completed} onChange={() => {
                const updatedTasks = [...tasks]
                updatedTasks[index].completed = !updatedTasks[index].completed
                setTasks(updatedTasks)
              }} />
              {item.text}

              <button onClick={()=>{
                  const updatedTasks = tasks.filter((_,i)=> i!== index)
                  setTasks(updatedTasks)
                }}>
                  <FaTrash />
                  
              </button>
            </p>
          ))}
        </div>

      </div>
    </div>

  )
}
export default App
