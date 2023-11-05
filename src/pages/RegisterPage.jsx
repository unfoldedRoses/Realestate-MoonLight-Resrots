import {Link, Navigate} from "react-router-dom";
import { useState} from "react";
import axios from "axios";


export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [name,setName]=useState('');
  const [password, setPassword] = useState('');
 
  
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
    
    } catch (e) {
    }
  }

 

  return (
   <div>
 <div className="mb-30 mt-50">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        </div>
    <form className="max-w-md mx-auto">
        <input type="text" placeholder="Name" value={name} onChange={ev=>setName(ev.target.value)}/>
        <input type="text" placeholder="Email" value={email} onChange={ev=>setEmail(ev.target.value)}/>
        <input type="password" placeholder="password" value={password} onChange={ev=>setPassword(ev.target.value)}/>
        <button className="primary">Registger</button>
    </form>
   </div>
  );
}