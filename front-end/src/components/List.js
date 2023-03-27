import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Header from './Header';
import Table from 'react-bootstrap/Table';
import Update from '../components/Update';


import {
  Button,

} from "reactstrap";

const List = () => {

    const [list,setList]=useState([]);
    const token =localStorage.getItem('token');
    const getData = async()=>
    {
        await axios.get("http://localhost:5000/api/list",{headers:{Authorization:token}})
        .then((response)=>{
            setList(response.data.listUser)
            console.log(response);
            console.log(response.data);
        })
           .catch((err)=>console.log(err))
    }
  
    useEffect(()=>{getData()},[list])
    // console.log(list);

    const deleteUser= async(id)=>
    {
        await axios.delete(`http://localhost:5009/api/delete/${id}`,{headers:{Authorization:token}})
        .then((response)=>
        {
            console.log(response);
        }).catch((err)=>
        console.log(err))

    }
 
  return (
    <div>
      <Header/>
      <div style={{marginLeft:"300px",marginTop:"50px"}}>
    <h3>User List</h3>
  
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        
          <th>SurName</th>
          <th>Name</th>
          <th>Email</th>
          
        </tr>
      </thead>
      <tbody>
      {list.map((elem) => (<tr>
        <td>{elem.surname} 

        </td>
        <td>{elem.name} 

</td>
        <td>{elem.email}</td>
        <td>  <Button
                  className="btn-round mr-1"
                  color="warning"
                  outline
                  type="button" onClick={Update}
                >Modifier
                  </Button></td>
        <td>

        <Button
                  color="danger"
                  outline
                  size="sm"
                  type="button"
                  className="mr-1" onClick={()=>deleteUser(elem._id)}
                >
                 Supprimer
                </Button>
          </td>
         </tr>
            ))}
      </tbody>
    </Table>
   
    </div>
  </div>
  )
}

export default List