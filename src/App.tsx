import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {TopHeader} from './Components/TopHeader';
import Card2 from './Components/Revenue';
import Card3 from './Components/Performance';
import Card1 from './Components/Visits';
import {LeftSideBarComp} from "./Components/LeftSidebarComp";
import Card4 from './Components/ServerOverview';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
<>
<div className='d-flex border'>
<div className='col-2'>

<LeftSideBarComp></LeftSideBarComp>



</div>
<div className='flex-fill align-self-stretch'>
  <TopHeader/>
  <div className='body-container p-4'>
    <h2>Analytics</h2>
<div className='row'>
<div className="col-lg-3 col-md-6 col-sm-12">
<Card1 />

</div>
<div className="col-lg-3 col-md-6 col-sm-12 ">
<Card2 />

</div>
<div className="col-lg-3 col-md-6 col-sm-12 ">
<Card3 />

</div>
<div className="col-lg-3 col-md-6 col-sm-12 ">
<Card4 />

</div>


</div>

  
  </div>
</div>


</div>

    <div className="App">
      <h1></h1>
      
      <div className='row'>
       
      </div>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </>);
}

export default App;
