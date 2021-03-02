import React from "react";
import '../App.css'

function TableComponent({ list ,setUser}) {
  const border = {
    border: "1px solid red",
  };
 const onUserClick = (res)=>{
  setUser(res);
  // $location.path('/login')
 }
  return (
    <div>
      <table style={{marginTop: '10%'}}>
        <thead>
          <tr>
            <th >S No.</th>
            <th >Name</th>
            <th >E - Mail</th>
          </tr>
        </thead>
        <tbody>
          {list.map((res,key) => {
            return (
              <tr  key={key}>
                <td >{key+1}</td>
                <td ><a onClick={()=>onUserClick(res)}>{res.name.title} {res.name.first} {res.name.last}</a></td>
                <td >{res.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
