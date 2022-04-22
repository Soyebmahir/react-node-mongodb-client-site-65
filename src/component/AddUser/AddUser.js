import React from 'react';

const AddUser = () => {
    const handleAddUser=(event)=>{
        event.preventDefault()
        const name =event.target.name.value
        const email =event.target.email.value
        console.log(name,email);
        const user={name,email}
        //send data to the server
        fetch('http://localhost:5000/user',{
          method:'POST'  ,
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(user)
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

            <h1>Hellow User</h1>
            <form onSubmit={handleAddUser}>
                <input type='text' name='name' placeholder='Name'></input>
                <br/>
                <input  type='text' name='email' placeholder='Email' ></input>
                <br/>
                <input type='submit' value='Add User'></input>
            </form>
            

        </div>
    );
};

export default AddUser;