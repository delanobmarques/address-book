import React from 'react'
import { Link } from 'react-router-dom';

const ContactList = () => {
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
                      <input type="text" className="form-control" placeholder="Search names"/> 
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

      <section className='contact-list'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-4">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXiuqgFpi-p3qpa7lJP6zk4wAVltnjXYG_Ow&usqp=CAU" alt="" className="contact-img" />                    
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group">
                        <li className="list-group-item list-group-action">
                          First Name <span className="fw-bold">Delano</span>
                        </li>
                        <li className="list-group-item list-group-action">
                          Last Name <span className="fw-bold">Marques</span>
                        </li>
                        <li className="list-group-item list-group-action">
                          Email <span className="fw-bold">delano@gmail.com</span>
                        </li>
                        <li className="list-group-item list-group-action">
                          Phone number <span className="fw-bold">9024442552</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-1 d-flex flex-column align-items-center">
                      <Link to={`/contacts/view/:contactId`} className="btn btn-warning my-1">
                          <i className="fa fa-eye"></i>
                      </Link>
                      <Link to={`/contacts/edit/:contactId`} className="btn btn-primary my-1">
                          <i className="fa fa-pen"></i>
                      </Link>
                      <button className="btn btn-danger my-1">
                          <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </React.Fragment>
  )
}

export default ContactList;