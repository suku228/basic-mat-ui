import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function LoginModule(props) {
    const onLoginHandler = ()=>{
        
        props.setLogin(true);
        localStorage.setItem('sessionExist', true)
    }

    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
  return (
    <div
      style={{
        boxShadow: "1px 1px 3px 2px #888888",
        position: "fixed",
        top: "39%",
        left: "39%",
        padding:"30px"
      }}
    >
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" value={username} label="User Name" onChange={(e)=>{setUsername(e.target.value)}} />
        <br />
        <TextField id="standard-basic" value={password} label="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
      </form>
      <Button onClick={onLoginHandler} variant="contained" color="primary" style={{marginTop:'10px',width:"195px"}}>
        login
      </Button>
    </div>
  );
}

export default LoginModule;
