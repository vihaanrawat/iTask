import { useState } from 'react'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const App = () => {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const [filter, setFilter] = useState('all')

  const addTask = () => {
    if (task.trim() === '') return

    if (editIndex !== null) {
      const updatedTasks = [...tasks]
      updatedTasks[editIndex].text = task
      setTasks(updatedTasks)
      setEditIndex(null)

    } else {
      setTasks([...tasks, { text: task, completed: false }])
    }
    setTask('')
  }
  const clearCompleted = () =>{
    setTasks(tasks.filter(task => !task.completed))
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

        <p className='mt-6 text-[#8b5e3c]'>
          {tasks.length} tasks • {tasks.filter(task => task.completed).length} completed
        </p>



        <div className='flex gap-3 mt-6'>
          <button onClick={() => setFilter('all')} className='px-4 py-2 rounded-lg bg-[#5a321d] text-white cursor-pointer'>All</button>

          <button onClick={() => setFilter('active')} className='px-4 py-2 rounded-lg border border-[#8b5e3c] text-[#5a321d] cursor-pointer'>Active</button>

          <button onClick={() => setFilter('completed')} className='px-4 py-2 rounded-lg border border-[#8b5e3c] text-[#5a321d] cursor-pointer'>Completed</button>

        </div>


        <div className='mt-6'>
          {tasks.map((item, index) => ({ item, index })).filter(({ item }) => {

            if (filter === 'active') return !item.completed
            if (filter === 'completed') return item.completed
            return true
          }).map(({ item, index }) => (

            <p key={index} className={`bg-[#f8e7c7] border border-[#c49a6c] rounded-xl px-4 py-4 mb-3 text-[#5a321d] flex items-center justify-between gap-3 ${item.completed ? 'line-through opacity-60' : ''
              }`}>


              <div className='flex items-center gap-3'>
                <input type="checkbox" checked={item.completed} onChange={() => {
                  const updatedTasks = [...tasks]
                  updatedTasks[index].completed = !updatedTasks[index].completed
                  setTasks(updatedTasks)
                }} />
                {item.text}

              </div>

              <div className='flex items-center gap-3'>

                <button className='text-[#8b5e3c] hover:text-[#5a321d] transition cursor-pointer' onClick={() => {
                  setEditIndex(index)
                  setTask(item.text)

                }}>
                  <FaEdit />

                </button>

                <button className='text-[#8b5e3c] hover:text-red-700 transition cursor-pointer' onClick={() => {
                  const updatedTasks = tasks.filter((_, i) => i !== index)
                  setTasks(updatedTasks)
                }}>
                  <FaTrash />

                </button>
              </div>

            </p>
          ))}
        </div>

      </div>
    </div>

  )
}
export default App
