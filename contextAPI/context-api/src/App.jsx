import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextprovider from "./context/UserContextprovider"

function App() {
  

  return (

    <UserContextprovider>
      <h1>context api</h1>
      <Login />
      <Profile/>
    </UserContextprovider>

  )
}

export default App
