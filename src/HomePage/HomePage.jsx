import React, { useEffect, useState } from 'react';
import './../Style/bootstrap.min.css'
import './../Style/style.css'
// import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TiDelete, TiDeleteOutline } from "react-icons/ti";
import { RiDeleteBin2Line } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";
import Swal from 'sweetalert2'

const HomePage = () => {

  // npx json-server --watch db.json --port 5000

  // state
  const [contacts,setContacts] = useState([]);


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

    const newContacts = contacts.filter((contact)=>contact.id !== id);
    setContacts(newContacts);
    console.log(contacts);
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});

    
    
    // console.log('delete the mentioned contact',id)
  }

  // data load function 
   useEffect (()=>{
    fetch('https://696f7ef5a06046ce6186e76f.mockapi.io/contacts/contacts')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setContacts(data)
    })
    
   }
    
    ,[])

    console.log(contacts);
    return (
<div>
  <main class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class=" card-title">
                <div class="d-flex align-items-center justify-content-between">
                  <h2>All Contacts</h2>
                  <div class="input-group w-50">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="search contact"
                    />  
                    <button
                      class="btn btn-success"
                      type="button"
                      id="button-addon2"
                    >
                      Search
                    </button>
                  </div>
                  <div className='relative '>
                    <IoMdAdd className='absolute top-2.5 ' />
                    <Link to={'/addContacts'} class="btn btn-success pl-8"
                      > Add New</Link>
                  </div>
                </div>
              </div>
              <div
                class="d-flex align-items-center justify-content-between p-3"
              >
                <div class="fs-2">
                  <i class="fa fa-filter text-success"></i> Filter
                </div>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Default</option>
                  <option value="1">First Name (A → Z)</option>
                  <option value="2">Last Name (A → Z)</option>
                  <option value="3">Oldest To First</option>
                </select>
              </div>
              <div class="card-body">

                {/* table start here */}

                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact)=>
                    <tr>
                      <td>1</td>
                      <td>{contact?.firstName}</td>
                      <td>{contact?.lastName}</td>
                      <td>{contact?.email}</td>
                      <td>{contact?.phone}</td>
                      <td>
                        <Link
                          to={`/contact/${contact.id}`}
                          class="btn btn-sm btn-circle btn-outline-info"
                          title="Show"
                          ><FaRegEye className='mx-auto block'  /></Link>
                        <Link
                          to={`/editContact/${contact.id}`}
                          class="btn btn-sm btn-circle btn-outline-secondary ml-2"
                          title="Edit"
                          ><FaRegEdit className='mx-auto block' />
                        </Link>

                        <Link
                          class="btn btn-sm btn-circle btn-outline-danger ml-2"
                          title="Delete"
                          onClick={()=>handleDeleteContact(contact.id)}
                          ><RiDeleteBin2Line className='mx-auto' /></Link>
                      </td>
                      
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
            </main>
            
            
        </div>
    );
};

export default HomePage;