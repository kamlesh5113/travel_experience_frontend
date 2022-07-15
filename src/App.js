import React, { lazy, useState } from "react";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Footer from "./components/Footer";
import CreatePlaces from "./components/CreatePlaces";
import ViewPlaces from "./components/ViewPlaces";
import SignUp from "./components/Signup";
import Index from "./components/Index";
import UsersList from "./components/UsersList";
import Profile from "./components/Profile";
import UpdatePlaces from "./components/UpdataPlaces";
import UsersProfile from "./components/UsersProfile";
import ViewUsersPlaces from "./components/ViewUsersPlaces";
import ReadMore from "./components/ReadMore";
import EditProfile from "./components/EditProfile";


function App() {

  const [_id,set_id] = useState('');

  return (
    <Router>

      <Navbar set_id = {set_id}/>
      <Switch>
        <Route path="/" exact>
          <Index/>
        </Route>
        <Route path="/Signup" exact>
          <SignUp/>
        </Route>
        <Route path ="/login" exact>
          <Login _id={_id} set_id = {set_id}/>
        </Route>
        <Route path ="/CreatePlaces" exact>
          <CreatePlaces/>
        </Route>
        <Route path="/view-palaces/:id" exact>
          <ViewPlaces/>
        </Route>
        <Route path="/view_users" exact>
          <UsersList/>
        </Route>
        <Route path="/profile" exact>
          <Profile set_id={set_id}/>
        </Route>
        <Route path="/updatePlaces/:id" exact>
          <UpdatePlaces/>
        </Route>
        <Route path="/UsersProfile/:id" exact>
          <UsersProfile/>
        </Route>
        <Route path="/viewusersplaces/:id" exact>
          <ViewUsersPlaces/>
        </Route>
        <Route path="/read_more/:id" exact>
          <ReadMore/>
        </Route>
        <Route path="/edit_profile/:id" exact>
          <EditProfile/>
        </Route>
        </Switch>

        <Footer/>

    </Router>
  );

}

export default App;

