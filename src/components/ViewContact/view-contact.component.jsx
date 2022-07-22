import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ContactService from '../../services/contact-service';
import Spinner from '../Spinner/spinner.component';

const ViewContact = () => {
  const {contactId} = useParams();
  const [state, setState]= useState({
      loading: false,
      contact: [],
      errorMessage: ''
  })

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
  },[])

  let {loading, contact, errorMessage} = state;

  return (
    <React.Fragment>
      <section className="view-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold"> View Contact </p>
              <p className="fst-italic">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </section>

      {
        loading ? <Spinner/> : <>
              {
                Object.keys(contact).length > 0 &&
                <section className="view-contact mt-3">        
                  <div className="container">          
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <img src={contact.picture} alt="" className="contact-img" />
                      </div>
                      <div className="col-md-8">
                        <ul className="list-group">
                          <li className="list-group-item list-group-action">
                            First Name <span className="fw-bold">{contact.firstName}</span>
                          </li>
                          <li className="list-group-item list-group-action">
                            Last Name <span className="fw-bold">{contact.lastname}</span>
                          </li>
                          <li className="list-group-item list-group-action">
                            Email <span className="fw-bold">{contact.email}</span>
                          </li>
                          <li className="list-group-item list-group-action">
                            Phone number <span className="fw-bold">{contact.phoneNumber}</span>
                          </li>
                        </ul>
                      </div>

                    </div>
                    
                    <div className="row">
                      <div className="col">
                        <Link to={"/contacts/list"} className="btn btn-warning "> Back</Link>
                      </div>
                    </div>
                  </div>
                </section>
              }
        </>
      }
      
    </React.Fragment>
  )
}

export default ViewContact;