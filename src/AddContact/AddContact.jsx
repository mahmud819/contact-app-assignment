import React from 'react';
import { Link, Links } from 'react-router-dom';


const AddContact = () => {

   
    const handleAddContact=(e)=>{
        e.preventDefault();

        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;

        const contactInfo = {firstName,lastName,email,phone,address}
        console.log('contact add function call',contactInfo);

        fetch('https://696f7ef5a06046ce6186e76f.mockapi.io/contacts/contacts',{
            method : 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(contactInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        })

        form.reset();
    }
    return (
<div>
    <main class="py-5">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header card-title">
                <strong>Add New Contact</strong>
              </div>           
              <div class="card-body">
                <div class="row">
                  <form onSubmit={handleAddContact} class="col-md-12">
                    <div class="form-group row">
                      <label for="first_name" class="col-md-3 col-form-label">First Name</label>
                      <div class="col-md-9">
                        <input type="text" name="firstName" id="first_name" required class="form-control"></input>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label for="last_name" class="col-md-3 col-form-label">Last Name</label>
                      <div class="col-md-9">
                        <input type="text" name="lastName" id="last_name" required class="form-control">
                        </input>
                        
                      </div>
                    </div>

                    <div class="form-group row">
                      <label for="email" class="col-md-3 col-form-label">Email</label>
                      <div class="col-md-9">
                        <input type="text" name="email" id="email" required class="form-control">
                        </input>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label for="phone" class="col-md-3 col-form-label">Phone</label>
                      <div class="col-md-9">
                        <input type="text" name="phone" id="phone" required class="form-control">
                        </input>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label for="name" class="col-md-3 col-form-label">Address</label>
                      <div class="col-md-9">
                        <textarea name="address" id="address" rows="3" required class="form-control"></textarea>
                      </div>
                    </div>
                    
                    <div class="form-group row mb-0">
                      <div class="col-md-9 offset-md-3">
                          <Link to={'/'} type="submit" class="btn btn-primary">Save</Link >
                          <Link to={'/'} class="btn btn-outline-secondary ml-2">Home Page</Link>
                      </div>
                    </div>
                  </form>
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

export default AddContact;