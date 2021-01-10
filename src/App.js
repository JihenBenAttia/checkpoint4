import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import imageInSrc from './imageInSrc.jpg'
import React from "react";
import MyComponent from './Components/MyComponent';
import MyProfilePhoto from './Components/Profile/ProfilePhoto'
import MyFullName from './Components/Profile/FullName'
import MyAddress from './Components/Profile/Address'

const App = () => {
  return (
    <div className="App-header">
      <h2>Hello from my first component !!</h2>
      <MyFullName/>
      <MyProfilePhoto/>
      <MyAddress/>
    </div>
  );
 };
export default App;

