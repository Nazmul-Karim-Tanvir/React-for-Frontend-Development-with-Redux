import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import FooterComponent from './components/FooterComponent';
import NavbarComponent from './components/NavbarComponent';
function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Home />
      <FooterComponent />
    </div>
  );
}

export default App;
