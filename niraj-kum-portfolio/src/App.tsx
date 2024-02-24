import './App.css';
import { Experience } from './Experience/Experience';
import { Home } from './Home/Home';
import { Navbar } from './Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Experience />
    </div>
  );
}

export default App;
