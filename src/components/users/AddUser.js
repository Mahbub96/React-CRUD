import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function AddUser() {

    let history = useHistory();

    const [user,setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

    const {name,username,email,phone,website} = user; /* for object distructuring */

    const onInputChange = e =>{
        setUser({...user,[e.target.name]: e.target.value})
    }

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3001/users",user);
        history.push('/');

    }

  return <>
    <form onSubmit={onSubmit}>
        
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name='name' value={name} onChange={(e)=> onInputChange(e)}/>
        </div>

        <div className="mb-3">
            <label htmlFor="user-name" className="form-label">User Name</label>
            <input type="text" name='username' value={username} className="form-control" id="user-name" onChange={(e)=> onInputChange(e)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" name='email' className="form-control" id="email" value={email} aria-describedby="emailHelp" onChange={(e)=> onInputChange(e)}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="text" name='phone' className="form-control" id="phone" value={phone} onChange={(e)=> onInputChange(e)}/>
            
        </div>

        <div className="mb-3">
            <label htmlFor="website" className="form-label">website Number</label>
            <input type="text" name='website' className="form-control" id="website" value={website}  onChange={(e)=> onInputChange(e)}/>
            
        </div>


        
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
  </>;
}

export default AddUser;
