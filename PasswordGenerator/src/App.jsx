import {useState} from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color,setColor]=useState('olive')
  return (
    <>
     <h1 class="h-screen text-3xl text-center text-white pt-20" style={{backgroundColor:color}}>Background-Changer</h1>
 <div  className="fixed bottom-0 left-0 w-full bg-gray-100 p-4 flex justify-around shadow-md rounded-xl">
      <button onClick={()=>setColor("blue")} className="bg-blue-500 text-white px-4 py-2 rounded-xl">Blue</button>
      <button onClick={()=>setColor("green")} className="bg-green-500 text-white px-4 py-2 rounded-xl">Green</button>
      <button onClick={()=>setColor("red")} className="bg-red-500 text-white px-4 py-2 rounded-xl">Red</button>
      <button onClick={()=>setColor("yellow")} className="bg-yellow-500 text-white px-4 py-2 rounded-xl">Yellow</button>
      <button onClick={()=>setColor("purple")} className="bg-purple-500 text-white px-4 py-2 rounded-xl">Purple</button>
      <button onClick={()=>setColor("pink")} className="bg-pink-500 text-white px-4 py-2 rounded-xl">Pink</button>
    </div>

    </>
  )
}

export default App
