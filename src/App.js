import './App.css';
import Gallery from './Gallery';
import Invitation from './Invitation';
import Navbar from './NavBar';
import Registry from './Registry';
import { Helmet } from 'react-helmet'

function App() {
  const TITLE = 'Tina and Ty Getting Married!!'
  return (
    <div className="App">
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <body>
        <Navbar></Navbar>
        <div>
          <Gallery/>
          <Invitation/>
        </div>
        <Registry/>
      </body>
    </div>
  );
}

export default App;
