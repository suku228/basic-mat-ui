import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container, Grid } from "@material-ui/core";

export default function Color() {
  const [count, setCount] = React.useState('enter');
  const [val, setVal]=React.useState('val');
  const clickCounter = (val)=>{
    setCount(val)
  }

  React.useEffect(()=>{
    if(count.length > 10){
      setVal(count)
    }
    console.log(count)
  },[count])
  const shadow = {
    boxShadow: "1px 1px 3px 2px #888888",
    height: "440px",
  };

  const shadow1 = {
    boxShadow: "1px 1px 3px 2px #888888",
    height: "200px",
  };
  const borderblack1 = {
    border: "1px solid black",
    padding: "10px 0px",
    margin: "5px",
  };
  const borderblack2 = {
    border: "1px solid black",
    padding: "20px 0px",
    margin: "5px",
  };
  const borderblack3 = {
    border: "1px solid black",
    padding: "30px 0px",
    margin: "5px",
  };
  return (
    <div>
      <Container maxWidth="lg" style={{ margin: "5px" }}>
        <Grid container direction="row"
              justify="center"
              alignItems="center" style={shadow}>
        <Grid item lg="3" style={shadow1}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ height: "200px" }}
            >
              <Grid item lg="1"></Grid>
              <Grid item lg="10" >
                2 2 2 22 2 2 22 
              </Grid>
              <Grid item lg="1"></Grid>
            </Grid>
          </Grid>
          <Grid item lg="1"></Grid>
          <Grid item lg="3" style={shadow1}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ height: "200px" }}
            >
              <Grid item lg="1"></Grid>
              <Grid item lg="10">
                2 2 2 22 2 2 22 2 
              </Grid>
              <Grid item lg="1"></Grid>
            </Grid>
          </Grid>
          <Grid item lg="1"></Grid>
          <Grid item lg="3" style={shadow1}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ height: "200px" }}
            >
              <Grid item lg="1"></Grid>
              <Grid item lg="10">
                2 2 2 22 2 2 22 2 2 22
              </Grid>
              <Grid item lg="1"></Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <button onClick={()=>clickCounter()}>click-{count}</button> */}
        <input type="text" onChange={(event)=>clickCounter(event.target.value)}/>
        <div>{val}</div>
      </Container>
    </div>

    //</Typography>
  );
}
