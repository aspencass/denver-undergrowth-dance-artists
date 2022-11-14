import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

// component imports
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ResourcePage from "./components/ResourcePage"
import CardDetails from './components/CardDetails'
import ResourceForm from './components/ResourceForm'
// import UserPage from "./components/UserPage";

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [resources, setResources] = useState([]);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user);
        });
      }
    });
  }, []);

  // GET '/resources'
  // const fetchResources = () => {
  //   fetch("/resources").then((res) => {
  //     if (res.ok) {
  //       res.json().then(setResources);
  //     } else {
  //       res.json().then((data) => setErrors(data.error));
  //     }
  //   });
  // };

  useEffect(()=> {
    fetch('/resources')
    .then(res => res.json())
    .then(resourcesArray => setResources(resourcesArray))
  }, [])

  const addResource = (resource) => setResources(current => [...current,resource])
  const addContact = () => setResources(current => [...current,resources.contact])
  const addCategory = () => setResources(current => [...current,resources.category])

  console.log(currentUser);

  // once i make a form for deleting a resource from the resources page
  // const deleteResource = (id) => setResources(current => current.filter(r => r.id !== id))

  const updateUser = (user) => setCurrentUser(user);
  if (errors) return <h1>{errors}</h1>;

  return (
    <>
      {/* <div className="nav">
              <NavBar /> 
    </div> */}
      <BrowserRouter>
        <Navigation updateUser={updateUser} currentUser={currentUser} />

        <Switch>
          <Route path="/users/new">
            <SignUp />
          </Route>

        <Route  path='/resources/new'>
          <ResourceForm addResource={addResource} addContact={addContact} addCategory={addCategory}/>
        </Route>

          <Route path="/users/:id">
            <Home />
          </Route>

          <Route path="/login">
            <Login updateUser={updateUser} />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/resources/:id">
            <CardDetails />
          </Route>

          <Route exact path="/resources">
            <ResourcePage resources={resources} />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
