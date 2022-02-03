import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

  const [users,setUser] = useState([]);


  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers = async ()=>{
    const result = await axios.get("http://localhost:3001/users");
    setUser(result.data.reverse());

  }

  const deleteUser = async (id) =>{
    console.log(id)
      await axios.delete(`http://localhost:3001/users/${id}`)
      loadUsers();
  }

  return <div className='container'>
      <div className="py-4">
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          
          {
            users.map((user,index)=>(
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/users/view/${user.id}`}>View</Link>
                  <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                  <Link className="btn btn-danger" onClick={()=>{deleteUser(user.id)}}>Delete</Link>
                </td>
            </tr>
            ))
          }
          
            
        </tbody>
      </table>
      </div>
  </div>;
}
