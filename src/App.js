import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Card from './components/Card/Card';
import Imag from "./components/Imag/imag";
import Dom from "./components/Dom/Dom";
import Swiper from './components/Swiper/swiper';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Card />
      <Imag />
      <Dom />
      <Swiper />
      <Footer />
    </div>
  );
}

export default App;