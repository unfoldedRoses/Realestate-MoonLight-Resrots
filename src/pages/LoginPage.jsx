import {Link, Navigate} from "react-router-dom";
import { useState} from "react";
import axios from "axios";


export default function LoginPage() {
  const [email, setEmail] = useState('');
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
        <h1 className="text-4xl text-center mb-4">Login</h1>
        </div>
    <form className="max-w-md mx-auto">
        <input type="text" placeholder="username" id="" />
        <input type="password" placeholder="password" id="" />
        <button className="primary">Login</button>
    </form>
   </div>
  );
}