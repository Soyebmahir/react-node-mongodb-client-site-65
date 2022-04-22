import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id}=useParams()
    const [user,setUser]=useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    const handleUpadteUser=(event)=>{
        event.preventDefault()
        const name =event.target.name.value
        const email =event.target.email.value
        console.log(name,email);
        const updateUser={name,email}
        const url =`http://localhost:5000/user/${id}`
        fetch(url,{
          method:'PUT'  ,
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('success',data)
            alert('Post successfully completed')
            event.target.reset()
        })
    }
    return (
        <div>
          <h1>User : {user.name}</h1>
          <form onSubmit={handleUpadteUser}>
                <input type='text' name='name' placeholder='Name'></input>
                <br/>
                <input  type='text' name='email' placeholder='Email' ></input>
                <br/>
                <input type='submit' value='Update'></input>
            </form>
        </div>
    );
};

export default UpdateUser;