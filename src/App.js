import './App.css';
import Gallery from './Gallery';
import Invitation from './Invitation';
import Navbar from './NavBar';
import Registry from './Registry';
import { Helmet } from 'react-helmet'
import { useScrollDirection } from 'react-use-scroll-direction';

function App() {
  const TITLE = 'Tina and Ty Getting Married!!'
  const scrollDirection = useScrollDirection()
  return (
    <div className="App">
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
        <body>
        <div
          // style={{
          //   transform: `translateY(${scrollDirection === 'up' ? 0 : '-100%'})`
          // }}
          className="scroll-fixed-container scroll-fixed-container--top"
        >
          <Navbar/>
        </div>
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
