import React from 'react';

const UpdateUser = () => {
    const handleUpadteUser=(event)=>{
        event.preventDefault()
        const name =event.target.name.value
        const email =event.target.email.value
        console.log(name,email);
        const user={name,email}
    }
    return (
        <div>
          <h1>Please Update</h1>
          <form onSubmit={handleUpadteUser}>
                <input type='text' name='name' placeholder='Name'></input>
                <br/>
                <input  type='text' name='email' placeholder='Email' ></input>
                <br/>
                <input type='submit' value='Add User'></input>
            </form>
        </div>
    );
};

export default UpdateUser;