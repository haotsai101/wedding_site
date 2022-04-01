import './App.css';
import Gallery from './Gallery';
import Trips from './Trips';
import Navbar from './NavBar';
import Registry from './Registry';
import Invitation from './Invitation';
import { Helmet } from 'react-helmet'
import React from 'react';
import RSVP from './RSVP';

function App() {
  const TITLE = 'Tina and Ty Getting Married!!'
   return (
    <div>
      <Helmet>
        <title>{ TITLE }</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Helmet>
      <body className='App font-caveat '>
        <Navbar/>        
        <div className='divide-y-4'>
          <Gallery/>
          <Invitation/>
          <RSVP/>
          <Registry/>
          <Trips/>
        </div>
      </body>
    </div>
  );
}

export default App;
