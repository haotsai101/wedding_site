import './App.css';
import Gallery from './Gallery';
import Invitation from './Invitation';
import Navbar from './NavBar';
import Registry from './Registry';

function App() {
  return (
    <div className="App">
      <head>
        <title>TT Getting Married!!</title>
      </head>
      <body>
        <Navbar></Navbar>
        <div>
          <Gallery/>
          <Invitation/>
        </div>
        <div className='h-96'/>
        <Registry/>
      </body>
    </div>
  );
}

export default App;
