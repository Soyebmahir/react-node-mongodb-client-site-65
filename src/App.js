
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './component/AddUser/AddUser';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import UpdateUser from './component/UpdateUser/UpdateUser';


function App() {
  return (
    <div className="App">
  <Header></Header>
  <Routes>
<Route path='/user'element={<Home></Home>}></Route>
    <Route path='/updateUser' element={<UpdateUser></UpdateUser>}></Route>
    <Route path='/user/add' element={<AddUser></AddUser>}></Route>
  </Routes>
    </div>
  );
}

export default App;
