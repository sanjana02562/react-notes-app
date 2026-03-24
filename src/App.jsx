import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    const copyTask=[...task]
    copyTask.push({title,details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }
  const deleteNote=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{submitHandler(e)}} className='flex lg:w-1/2 p-10 gap-4 flex-col items-start'>
        <h1 className='text-4xl font-bold'>Your notes</h1>
        <input onChange={(e)=>{setTitle(e.target.value)}} value={title} className='px-5 font-medium w-full py-2 border-2 rounded' type='text' placeholder='Enter Notes Heading'/>
        <textarea value={details} onChange={(e)=>{setDetails(e.target.value)}} className='px-5 font-medium w-full h-32 py-2 border-2 rounded' type='text' placeholder='Write details here' />
        <button className='bg-pink-700 active:bg-gray-300 active:scale-95 font-medium w-full text-black px-5 py-2 rounded'>Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent notes</h1>
        <div className='flex gap-5 items-start justify-start flex-wrap mt-5 h-[90%] overflow-auto'>
          {task.map(function(elem,idx){
            return <div key={idx} className='flex justify-between flex-col items-start h-52 w-40 text-black relative rounded-2xl py-9 pb-5 px-4 bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-4 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={()=>{deleteNote(idx)}} className='w-full text-white py-1 text-xs rounded cursor-pointer active:scale-95 font-bold bg-red-500'>Delete</button>
            </div>
          })}
        </div>        
      </div>
    </div>
  )
}

export default App