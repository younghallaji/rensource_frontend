import './App.css';
import React from 'react';
import AchieveProject from './components/AchieveProject/AchieveProject';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import PressRelease from './components/PressReleases/PressRelease';
import ExecutiveTeam from './components/Executive/ExecutiveTeam';
import Header from './components/Header/Header';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div>
      {/* <Container><Header/></Container> */}
      <Home/>
      <AchieveProject />
      <ExecutiveTeam/>
      <PressRelease />
      <Footer/>
    </div>
  );
}

export default App;
