import './App.css';

import Welcome from './components/Welcome'
import About from './components/About';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Welcome />
      <About />
      <Footer />
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
