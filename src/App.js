import './App.css';
import Routes from './Routes';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Foot';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
