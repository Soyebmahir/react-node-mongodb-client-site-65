import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/user'> Home</Link>
            <Link to='/user/add'>Add User</Link>
            {/* <Link to='/updateUser'>UpdateUser</Link> */}
        </div>
    );
};

export default Header;