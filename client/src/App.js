import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {useEffect, useState} from 'react'


// component imports
import Home from './components/Home'
import Navigation from './components/Navigation'
import SignUp from './components/SignUp'
import Login from './components/Login'


function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const [resources, setResources] = useState([])
  const [errors, setErrors] = useState(false)


    // GET '/resources' 
    useEffect(()=> {
      fetch('/resources')
      .then(res => res.json())
      .then(resourcesArray => setResources(resourcesArray))
    }, [])


  // once i make a form for deleting a resource from the resources page
  // const deleteResource = (id) => setResources(current => current.filter(r => r.id !== id)) 

  
  if(errors) return <h1>{errors}</h1>


  return (
    <>
    <BrowserRouter>
    {/* {!currentUser? <Login error={'please login'} updateUser={updateUser}/> :  */} 
    <Navigation currentUser={currentUser}/>
      <Switch>

      <Route path='/users/new'>
        <SignUp />
      </Route>

      <Route path='/users/:id'>
        <Home />
      </Route>

      <Route path='/login'>
        <Login currentUser={currentUser}/>
      </Route>

    
      <Route exact path='/'>
        <Home  />
      </Route>

     
      
      </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
