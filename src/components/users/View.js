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

  return <div>
      {console.log(user)}
  </div>;
}

export default View;
