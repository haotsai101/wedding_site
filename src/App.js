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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Helmet>
        <body className='font-caveat'>
        <Navbar/>        
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
