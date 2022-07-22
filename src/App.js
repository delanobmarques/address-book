import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/navbar.component";
import ContactList from "./components/ContactList/contact-list.component";
import AddContact from "./components/AddContact/add-contact.component";
import ViewContact from "./components/ViewContact/view-contact.component";
import EditContact from "./components/EditContact/edit-contact.component";
import './styles.css';

const App = () => {
  return (
    <React.Fragment>      
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={"/contacts/list"} element={<ContactList/>}/>
        <Route path={"/contacts/add"} element={<AddContact/>}/>
        <Route path={"/contacts/view/:contactId"} element={<ViewContact/>}/>
        <Route path={"/contacts/edit/:contactId"} element={<EditContact/>}/>        
      </Routes>
    </React.Fragment>
  );
}

export default App;
