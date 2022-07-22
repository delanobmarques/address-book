import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ContactService from '../../services/contact-service';
import Spinner from '../Spinner/spinner.component';

const ContactList = () => {

  const [query, setQuery] = useState({
    text: ' '
  });

  let [state, setState] = useState({
      loading: false,
      contacts: [],
      filteredContacts:[],
      errorMessage: ''
  });
  
  async function fetchData() {
    try {
      setState({...state, loading: true})
      let response = await ContactService.getAllContacts();
      setState({
        ...state,
        loading: false,
        contacts: response.data,
        filteredContacts: response.data
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
  }, []); 
  
  
  const deleteContact = async(id) => {
    await ContactService.deleteContact(id) && fetchData();
    alert(`Contact deleted`);
  }

  const searchContacts = (event) => {
    setQuery({...query, text: event.target.value})
    let finalContacts = state.contacts.filter(contact => {
      let fullname = `${contact.firstName} ${contact.lastName}`
      return fullname.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setState({
      ...state,
      filteredContacts: finalContacts
    });    
  }

  let {loading, contacts, filteredContacts, errorMessage} = state;

  return (
    <React.Fragment>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Contact Manager 
                  <Link to={"/contacts/add"} className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle me-2"> New</i>  
                  </Link>  
                </p>
                <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, voluptates?</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className='row'> 
                  <div className="col">
                    <div className="mb-2">
                      <input 
                        name="text"
                        value={query.text}
                        onChange={searchContacts}
                        type="text" className="form-control" placeholder="Search names"
                      /> 
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input type="submit" className="btn btn-outline-dark" value="search"/> 
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {
        loading ? <Spinner/> : <>
          <section className='contact-list'>
            <div className="container">
              <div className="row">
                {
                  filteredContacts.length > 0 &&
                    filteredContacts.map(contact => {
                      return(
                        <div key={contact.id} className="col-md-6 my-2">
                          <div className="card">
                            <div className="card-body">
                              <div className="row align-items-center d-flex justify-content-around">
                                <div className="col-md-4">
                                  <img src={contact.picture} alt="" className="contact-img" />                    
                                </div>
                                <div className="col-md-7">
                                  <ul className="list-group">
                                    <li className="list-group-item list-group-action">
                                      First Name <span className="fw-bold">{contact.firstName}</span>
                                    </li>
                                    <li className="list-group-item list-group-action">
                                      Last Name <span className="fw-bold">{contact.lastName}</span>
                                    </li>
                                    <li className="list-group-item list-group-action">
                                      Email <span className="fw-bold">{contact.email}</span>
                                    </li>
                                    <li className="list-group-item list-group-action">
                                      Phone number <span className="fw-bold">{contact.phoneNumber}</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-1 d-flex flex-column align-items-center">
                                  <Link to={`/contacts/view/${contact.id}`} className="btn btn-warning my-1">
                                      <i className="fa fa-eye"></i>
                                  </Link>
                                  <Link to={`/contacts/edit/${contact.id}`} className="btn btn-primary my-1">
                                      <i className="fa fa-pen"></i>
                                  </Link>
                                  <button 
                                    className="btn btn-danger my-1" 
                                    onClick={() => deleteContact(contact.id)}
                                  >
                                      <i className="fa fa-trash"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })
                }
                
              </div>
            </div>
          </section>
        </>
      }

      
    </React.Fragment>
  )
}

export default ContactList;