import React,{useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Contract() {
    let history = useHistory();
const [feetback,setFeetback] = useState({
    name:"",
    email:"",
    message:""
});

const {name,email,message} = feetback;


const onInputChange = e =>{
    setFeetback({...feetback,[e.target.name]:e.target.value});
}



const handleSubmit = async e =>{
    e.preventDefault();
    await axios.post("http://localhost:3001/feetback",feetback);
    history.push('/');
    
}


  return <>
      <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="col">
                <input type="text" value={name} name="name" className="form-control" onChange={(e)=>onInputChange(e)} placeholder="First name"/>
                </div>
                <div className="col">
                <input type="email" value={email} name="email" onChange={(e)=>onInputChange(e)} className="form-control" placeholder="Email"/>
                </div>
            </div>

            <div className="form-row">
                <label htmlFor="message" className="ml-5 mt-3 p-2">Message : </label>
                <div className="form-col ml-5 p-2">
                <textarea name="message" onChange={(e)=>onInputChange(e)} id="message" value={message}></textarea>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
  </>;
}

export default Contract;
