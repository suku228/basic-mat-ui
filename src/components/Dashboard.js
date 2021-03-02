import React from 'react'
import TableComponent from './TableComponent'
import axios from 'axios'
import Layout from './Layout'
import NormalUser from './NormalUser';

function Dashboard({setUser, setLogin}) {
    const [usersList, setUserList] = React.useState([]);
    const [role, setRole] = React.useState("user");
    const roles = ["User", "Admin"]
    React.useEffect(()=>{
      axios.get('https://randomuser.me/api/').then(res=>{
        setUserList(res.data.results)
        console.log(res.data.results)
      })
    }, []);

   

    //const Com = React.useMemo(<TableComponent setUser={setUser} list={usersList}/>)
    return (
        <Layout roles={roles} setRole={setRole} setLogin={setLogin}>
{role === "Admin" ? <TableComponent setUser={setUser} list={usersList}/>:<NormalUser />}
        </Layout>
            
    )
}

export default Dashboard

