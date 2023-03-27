import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Update = () => {
    const [value,setValue] = useState({name:""})
const User =useSelector(state=>state.user)
console.log(User);

console.log(User._id);
const token =localStorage.getItem('token');
const handelUpdate = async () =>
{
    await axios.put(`http://localhost:5009/api/update/${User._id}`,{...value},{headers:{Authorization:token}})
    .then((response)=>{
        console.log(response.data);
    }).catch((err)=>{console.log(err);})
}
  return (
    <div>
<h1>Update Page</h1>
<label>userName</label>
<input type="text" name="name" onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/>
<button onClick={()=>handelUpdate()}>Send</button>
    </div>
  )
}

export default Update