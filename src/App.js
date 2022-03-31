import logo from './logo.svg';
import './App.css';
import { Carousel } from './carousel/Carousel';
import Header from './header/Header';
// import CpcNavigation from './header/Header';
// import Carousel from "./carousel/Carousel";

function App() {
  return (
    <div className="App">
     <Header />
      <Carousel />
    </div>
  );
}

export default App;
