import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header"   ;   
import {
    Checkbox,
    Grid,
    TextField,
    FormControlLabel,
    Paper,
    Button
  } from '@material-ui/core';
import DemoFooter from './Footers/DemoFooter';
const Register =() => {

const [values,setValues]=useState({name:"",email:"",password:""})
//sucess notification 
const generateSucess= (sucess) =>
{
toast.success(sucess,{
    position:"top-right"
})
}
const generateError= (error) =>
{
toast.error(error,{
    position:"top-right"
})
}
const handelSubmit = async(event) => {
    event.preventDefault();
    await axios.post("http://localhost:5009/api/register",{...values},{withCredentials:true}).then((response)=>{
        console.log(response);
        generateSucess('user created with sucess')
    }).catch((err=>{console.log(err);
    
    if(err.response.data.msg){
        generateError(err.response.data.msg);
      
    }
if(err.response.data.errors){
    err.response.data.errors.map(el=>{
        return generateError(el.msg)
    })
}}))
}

    return (
<div>
<Header/>
<h2>
    Register page
</h2>

<form onSubmit={(e)=>handelSubmit(e)}>
<div  style={{marginTop:"200px",paddingBottom:"200px"}}>

<Paper>
        <Grid style={{paddingBottom:"200px"}}
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField style={{width:"390px"}} type="text" name="name" onChange= {(e)=>setValues({...values,[e.target.name]:e.target.value})}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField style={{width:"390px"}} type="email" name="email"   onChange= {(e)=>setValues({...values,[e.target.name]:e.target.value})}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField style={{width:"390px"}} label="Mot de passe" type={'password'} name="password"  onChange= {(e)=>setValues({...values,[e.target.name]:e.target.value})}></TextField>
          </Grid>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12}>
            <Button style={{backgroundColor:"black",padding:"10px 140px",marginTop: "30px"}} fullWidth type="submit"> <span style={{color:"#fff"}}>ENREGISTRER</span>  </Button> 
            
          </Grid>
        </Grid>
      </Paper>
      </div>
      </form>
      <ToastContainer/>
<DemoFooter/>
</div>

    )
}
export default Register