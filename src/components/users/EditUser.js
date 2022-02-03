/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';


function EditUser() {

    let history = useHistory();
    const { id } = useParams();

    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
    });

    const {name,username,email} = user;

    const onInputChange = e =>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value})
    }

    useEffect(()=>{
        loadUser();
    },[])

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`,user);
        history.push('/');

    }

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data)

    }

  return <>
    <h2>Edit User</h2>
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
            <label htmlFor="emial" className="form-label">Email address</label>
            <input type="email" name='email' className="form-control" id="emial" value={email} aria-describedby="emailHelp" onChange={(e)=> onInputChange(e)}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>


        
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
  </>;
}

export default EditUser;
