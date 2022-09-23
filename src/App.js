import './App.css';
import React from 'react';
import AchieveProject from './components/AchieveProject/AchieveProject';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import PressRelease from './components/PressReleases/PressRelease';
import ExecutiveTeam from './components/Executive/ExecutiveTeam';


function App() {
  return (
    <div>
      <Home/>
      <AchieveProject />
      <ExecutiveTeam/>
      <PressRelease />
      <Footer/>
    </div>
  );
}

export default App;
