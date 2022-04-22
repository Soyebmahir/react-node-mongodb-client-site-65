import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    const handleDelete=id=>{
        const proceed =window.confirm('are you sure you want to delete')
        if(proceed){
            console.log('deleting user Id',id);
            const url =`http://localhost:5000/user/${id}`
            fetch(url,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount >0){
                    console.log('deleted');
                    const remaining =users.filter(user=>user._id !==id)
                    setUsers(remaining)
                }
              
            })
            
        }
        
    }
    return (
        <div>
            <h1>Total users {users.length}</h1>
            {
                users.map(user=><li key={user._id} >Name: {user.name} Email: {user.email}
                <button onClick={()=>handleDelete(user._id)} style={{color:'red'}}>x</button><Link to={`/update/${user._id}`}><button >Update</button></Link></li>)
            }
        </div>
    );
};

export default Home;