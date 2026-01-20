import React from 'react';
import { Link, Links, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const ContactDetails = () => {

    const contact = useLoaderData();
    const naviGate = useNavigate();
    console.log(contact);

    // contact delete function 

    const handleDeleteContact=(id)=>{

      
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

       fetch(`https://696f7ef5a06046ce6186e76f.mockapi.io/contacts/contacts/${id}`,{
      method:'DELETE'
    })
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
    naviGate('/')

    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});

 
    // const newContacts = contacts.filter((contact)=>contact.id !== id);
    // setContacts(newContacts);
    // console.log(contacts);
    // console.log('delete the mentioned contact',id)
    
  }
    return (
        <div>
            <main class="py-5">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header card-title">
                <strong>Contact Details</strong>
              </div>           
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group row">
                      <label for="first_name" class="col-md-3 col-form-label">First Name</label>
                      <div class="col-md-9">
                        <p class="form-control-plaintext text-muted">{contact?.firstName}</p>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label for="last_name" class="col-md-3 col-form-label">Last Name</label>
                      <div class="col-md-9">
                        <p class="form-control-plaintext text-muted">{contact?.lastName}</p>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label for="email" class="col-md-3 col-form-label">Email</label>
                      <div class="col-md-9">
                        <p class="form-control-plaintext text-muted">{contact?.email} </p>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label for="phone" class="col-md-3 col-form-label">Phone</label>
                      <div class="col-md-9">
                        <p class="form-control-plaintext text-muted">{contact?.phone} </p>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label for="name" class="col-md-3 col-form-label">Address</label>
                      <div class="col-md-9">
                        <p class="form-control-plaintext text-muted">{contact?.address} </p>
                      </div>
                    </div>
                    
                    <div class="form-group row mb-0">
                      <div class="col-md-9 offset-md-3">
                          <Link to={`/editContact/${contact.id}`} href="#" class="btn btn-info">Edit</Link >
                          <button onClick={()=>handleDeleteContact(contact.id)} class="btn btn-outline-danger ml-2">Delete</button>
                          <Link to={'/'} class="btn btn-outline-secondary ml-2">Cancel</Link >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
        </div>
    );
};

export default ContactDetails;