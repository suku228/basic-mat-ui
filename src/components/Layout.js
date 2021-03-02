import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";

function Layout(props) {
  const shadow = {
    boxShadow: "1px 1px 3px 2px #888888",
    height: "440px",
  };

  const shadow1 = {
    boxShadow: "1px 1px 3px 2px #888888",
    height: "200px",
    margin:'5px'
  };

  const logoutHandler = ()=>{
    localStorage.setItem('sessionExist', false)
    props.setLogin(false);
  }

  return (
     <div>
          <div style={{ height:'60px', backgroundColor:'#61578a'}}>
          <Button onClick={logoutHandler}  variant="contained" color="primary" style={{float:'right', marginTop: '10px',
    marginRight:' 10px'}}>
        logout
      </Button>
      <select style={{float: 'right'}} onChange={(e)=>props.setRole(e.target.value)}>
            <option>--select--</option>
            {props.roles.map((role,k)=><option key={k} value={role}>{role}</option>)}
          </select>
          </div>
         
      <Grid container style={{height:'720px'}}>
          
          <Grid item lg={1} style={{backgroundColor:'#61578a'}}></Grid>
          <Grid item lg={1} ></Grid>
        <Grid item lg={6}>{props.children}</Grid>
      </Grid>
     </div>

      
  );
}

export default Layout;
