import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ContactService from '../../services/contact-service';

let navigate = useNavigate;

const AddContact = () => {
  const [state, setState]= useState({
      loading: false,
      contact: {        
        picture: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      },
      errorMessage: ''
  });

  const updateInput = (event) => {
    setState({
      ...state,
      contact:{
        ...state.contact,
        [event.target.name]:event.target.value
      }
    })
  }  

  const submitForm = async(event) => {
    event.preventDefault();    
    try{
      const response = await ContactService.createContact(state.contact);
      if(response){
        navigate("/contacts/list");
      }
    }catch(error){
      setState({...state, errorMessage:error.message});
      navigate("/contacts/add");
    }
  }
  
  let { contact, errorMessage} = state;

  return (
    <React.Fragment>
      <pre>{JSON.stringify(contact)}</pre>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-success fw-bold">Create Contact</p>
              <p className="fst-italic">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <form onSubmit={submitForm}>
                <div className="mb-2">
                  <input 
                    required={true}
                    name="picture"
                    value={contact.picture}
                    onChange={updateInput}
                    type="text" 
                    className="form-control" 
                    placeholder="Picture url"
                  />
                </div>
                <div className="mb-2">
                  <input 
                    required={true}
                    name="firstName"
                    value={contact.firstName}
                    onChange={updateInput}
                    type="text" className="form-control" placeholder="First Name"
                  />
                </div>
                <div className="mb-2">
                  <input 
                    required={true}
                    name="lastName"
                    value={contact.lastName}
                    onChange={updateInput}
                    type="text" className="form-control" placeholder="Last Name"
                  />
                </div>
                <div className="mb-2">
                  <input 
                    required={true}
                    name="email"
                    value={contact.email}
                    onChange={updateInput}
                    type="email" className="form-control" placeholder="Email"
                  />
                </div>
                <div className="mb-2">
                  <input 
                    required={true}
                    name="phoneNumber"
                    value={contact.phoneNumber}
                    onChange={updateInput}
                    type="number" className="form-control" placeholder="Phone Number"
                  />
                </div>
                <div className="mb-2">
                  <input type="submit" className="btn btn-success" value="Create"/>
                  <Link to={"/contacts/list"}className="btn btn-dark ms-2">
                     Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AddContact;