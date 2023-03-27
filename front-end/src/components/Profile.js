import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setUser } from '../store/authSlice';

const Profile = () => {
    const User =useSelector(state=>state.auth)
    console.log(User);
    const [name, setName] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const  {id}  = useParams();
  //  console.log(User._id);
   const token =localStorage.getItem('token');

console.log(token)
//    const updateUser = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:5000/api/profile/${User._id}`,{headers:{Authorization:token}}, {
//        name 
//       });
      
//     //   navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };
    const fetchData = async () =>
    {
        await axios.get("http://localhost:5009/api/profile",{headers:{Authorization:token}})
        .then((response)=>{
            dispatch(setUser(response.data.currentUser))
            console.log(response);
        })
           .catch((err)=>console.log(err))
    }
    const logout =()=>
{


    localStorage.removeItem('token');
    navigate('/login')
}
    useEffect(()=>{fetchData()},[])
    console.log(User);
  return (
    <div>
        <h1>Profile</h1>
   
<form>


{/* <input 
                type="text"
             
                value = {User.name}
                onChange={(e) => setName(e.target.value)}
                
              /> */}
              <h2>{User.name}</h2>
        <h2>{User.email}</h2>
        {/* <button type="submit" className="button is-success">
                Update
              </button> */}
           
              <button onClick={()=>navigate(`/update/${User._id}`)}>Update</button>
</form>
      
        <button onClick={()=>logout()}>Log out</button>
        </div>
  )
}

export default Profile