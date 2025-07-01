import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContextProvider from "./Context/ContextProvider"
function App() {
  return (
   <UserContextProvider>
    <h1>My Name is Ashish kumar singh i am fronted and backend engineer and also have a knowledge about machine laerning and data science </h1>
    <Login/>
    <Profile/>
   </UserContextProvider>
  )
}

export default App
