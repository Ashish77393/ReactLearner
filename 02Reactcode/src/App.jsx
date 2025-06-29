import {useState} from 'react'
function App() {
   let [counter,setCounter]=useState(15)
      function setCount(){
          counter=counter+1
          setCounter(counter)
          }



//     //  rendering data if increase by four than use prevCounter that are a parameter of Usestate
//       function setCount(){
//           setCounter(prevCounter=>prevCounter+1)
//           setCounter(prevCounter=>prevCounter+1)
//           setCounter(prevCounter=>prevCounter+1)
//           setCounter(prevCounter=>prevCounter+1)
//           }


      function getCount(){
          if(counter===0){
         let data= document.createElement('h1')
         data.innerText='can not decrease'
         data.style.color="red"
         document.getElementById('container').appendChild(data)

         }else{
         counter=counter-1
          setCounter(counter)
          }
      }
  return (
      <div id='container'>
    <h1>count Value is {counter}</h1>
     <button  onClick={setCount} id="add">add</button>
         <button  onClick={getCount} id="delete">delete</button>
</div>
  )
}

export default App
