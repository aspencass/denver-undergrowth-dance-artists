import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, {useEffect, useState} from 'react'




// component imports
import Home from './components/Home'
import Navigation from './components/Navigation'
import SignUp from './components/SignUp'
import Login from './components/Login'
import UserPage from './components/UserPage'
import NavBar from './components/NavBar'
// import ResourcePage from "./components/ResourcePage"
// import DetailForResourceID from './components/DetailForResourceID'
// import ResourceForm from './components/ResourceForm'



function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const [resources, setResources] = useState([])
  const [errors, setErrors] = useState(false)



    useEffect(() => {
      fetch('/authorized_user')
      .then(res => {
        if(res.ok){
          res.json().then(user => {
            updateUser(user)
            fetchResources()
          })
        }
      })
    }, [])

    // GET '/resources' 
    const fetchResources = () => {
      fetch('/resources')
      .then(res => {
      if(res.ok){
        res.json().then(setResources)
      } else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  console.log(currentUser)

  // once i make a form for deleting a resource from the resources page
  // const deleteResource = (id) => setResources(current => current.filter(r => r.id !== id)) 

  const updateUser = (user) => setCurrentUser(user)
  if(errors) return <h1>{errors}</h1>


  return (
    <>
    {/* <div className="nav">
              <NavBar /> 
    </div> */}
    <BrowserRouter>

    <Navigation updateUser={updateUser} currentUser={currentUser}/>

    {!currentUser? <Login error={'please login'} updateUser={updateUser}/> :  

      <Switch>

      <Route path='/users/new'>
        <SignUp />
      </Route>

      <Route path='/users/:id'>
        <Home />
      </Route>

      <Route path='/login'>
        <Login updateUser={updateUser}/>
      </Route>

    
      <Route exact path='/'>
        <Home  />
      </Route>

      <Route path='/users/:id'>
        <UserPage updateUser={updateUser}/>
      </Route>
      </Switch>
      }
    </BrowserRouter>

    </>
  )
}

export default App
