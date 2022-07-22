import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ContactService from '../../services/contact-service';

let navigate = useNavigate;

const EditContact = () => {

  const {contactId} = useParams();

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

  async function fetchData() {
    try {
      setState({...state, loading: true})
      let response = await ContactService.getContact(contactId);
      console.log(response.data)
      setState({
        ...state,
        loading: false,
        contact: response.data
      })
    }catch(error){  
      setState({
        ...state,
        loading: false,
        errorMessage: error.message
      })
    }     
  }

  useEffect(() => {
    fetchData();
  },[]);

  let updateInput = (event) => {
    setState({
      ...state,
      contact:{
        ...state.contact,
        [event.target.name]:event.target.value
      }
    });
  }

  let submitForm = async(event) => {
    event.preventDefault();

    try{
      const response = await ContactService.updateContact(state.contact, contact.id);
      if(response){
        navigate("/");
      }
    }catch(error){
      setState({...state, errorMessage:error.message});
      navigate(`/contacts/edit/${contact.id}`);
    }

  }

  let { contact, errorMessage} = state;

  return (
    <React.Fragment>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-primary fw-bold">Edit Contact</p>
              <p className="fst-italic">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <form onSubmit={submitForm}>
              <div className="mb-2">
                  <input 
                    required='true'
                    name="picture"
                    value={contact.picture}  
                    onChange={updateInput}
                    type="text" className="form-control" placeholder="Picture url"
                  />
                </div>
                <div className="mb-2">
                  <input 
                    required='true'
                    name="firstName"
                    value={contact.firstName}  
                    onChange={updateInput}
                    type="text" className="form-control" placeholder="First Name"
                  />
                </div>
                <div className="mb-2">
                  <input 
                    required='true'
                    name="lastName"
                    value={contact.lastName}  
                    onChange={updateInput}
                    type="text" className="form-control" placeholder="Last Name"
                  />
                </div>
                <div className="mb-2">
                  <input 
                    required='true'
                    name="email"
                    value={contact.email}  
                    onChange={updateInput}
                    type="email" className="form-control" placeholder="Email"
                  />
                </div>
                <div className="mb-2">
                  <input 
                    required='true'
                    name="phoneNumber"
                    value={contact.phoneNumber}  
                    onChange={updateInput}
                    type="number" className="form-control" placeholder="Phone Number"
                  />
                </div>
                <div className="mb-2">
                  <input type="submit" className="btn btn-primary" value="Update"/>
                  <Link to={"/contacts/list"}className="btn btn-dark ms-2">
                     Cancel
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img src={contact.picture} alt="" className="contact-img" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default EditContact;