/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

function View() {


    const [user,setUser] = useState({
        
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const {id} = useParams();


    useEffect(()=>{
        loadUser();
    },[])

    const loadUser = async ()=>{
        // const  import { connect } from 'react-redux';
        const res = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(res.data);
    }
    const {name,email,phone,website} = user;
  return <div>
      <div className="container">
          <label htmlFor="id">user - Id : {id}</label>
          <h2>Name : {name}</h2>
          <p>Email : {email}</p>
          <p>Phone : {phone}</p>
          <p>website : {website}</p>
      </div>
  </div>;
}

export default View;
