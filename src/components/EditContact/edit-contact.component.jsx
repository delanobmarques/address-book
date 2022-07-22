import React from 'react';
import { Link } from 'react-router-dom';


const EditContact = () => {
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
              <form>
              <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Picture url"/>
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="First Name"/>
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Last Name"/>
                </div>
                <div className="mb-2">
                  <input type="email" className="form-control" placeholder="Email"/>
                </div>
                <div className="mb-2">
                  <input type="number" className="form-control" placeholder="Phone Number"/>
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
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRSoImqQEXUJTKa1fIFdOJW7pbnbPP20c2hA&usqp=CAU" alt="" className="contact-img" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default EditContact;