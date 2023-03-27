/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React , { useState }   from "react";
import axios from "axios";
// nodejs library that concatenates strings
import classnames from "classnames";
import {useSelector}  from 'react-redux'
import { selectCurrentToken} from "../store/authSlice"
import jwtDecode from 'jwt-decode'

import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button
} from '@material-ui/core';

// reactstrap components
import {
 
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";
import { Link ,useNavigate   } from "react-router-dom";
import Header from "./Header";
import DemoFooter from "./Footers/DemoFooter";
import useAuth from "./useAuth"
import { setAuthentification } from "helpers/auth";
import { isAuthenticated } from "helpers/auth";

function Login() {

  const [values,setValues]=useState({email:"",password:""});
  const navigate =useNavigate();
  const {surname,status,isAdmin,isUser,role} = useAuth()
   
const handelSubmit = async (event) =>
{
  event.preventDefault();
  await axios.post("http://localhost:5009/api/login",{...values},{withCredentials:true}).then((response)=>{
  
      setAuthentification(response.data.token,response.data.exist);
     
        if(isAuthenticated() && isAuthenticated().role ==='admin'){
          console.log('redirect to admin');
          navigate('/list')
        }else{
          console.log('redirect to userProfile');
          navigate('/user')
        }

  }).catch((error=>{console.log('error');
  }))
}
 
  return (
    <>
   <Header/>

   <div>
<div className="row d-flex justify-content-center" style={{marginTop:"50px"}}>


</div>
    </div>
    <form onSubmit={(e)=>handelSubmit(e)}>
    <div  style={{marginTop:"200px",paddingBottom:"200px"}}>
      <h2 style={{marginLeft:"610px",fontWeight:"bold",marginBottom: "30px",fontSize:"var(--font-size-heading-m-highlight)",fontWeight:"var(--font-weight-medium)",fontStretch:"var(--font-stretch-normal)"
}
}><span style={{verticalAlign:"baseline",fontWeight:"bold"}}>ACCÉDEZ À VOTRE COMPTE</span></h2>
      <Paper>
        <Grid style={{paddingBottom:"200px"}}
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField style={{width:"390px"}} label="E-MAIL" name="email" onChange= {(e)=>setValues({...values,[e.target.name]:e.target.value})}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField style={{width:"390px"}} label="MOT DE PASSE" type={'password'} name="password" onChange= {(e)=>setValues({...values,[e.target.name]:e.target.value})}></TextField>
          </Grid>
          <Grid item xs={12}>
      
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit" style={{backgroundColor:"black",padding:"10px 140px",marginTop: "30px"}}> <span style={{color:"#fff"}}>SE CONNECTER</span> </Button>
           
            
          </Grid>
          <Link to={"register"} style={{fontSize:"11px",color:"black",marginTop:"10px"}}>CRÉER UN COMPTE</Link>
        </Grid>
      </Paper>
      
    </div>
    </form>
    <DemoFooter/>
    </>
  );
}

export default Login;
