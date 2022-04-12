import logo from './logo.svg';
import './App.css';
import { Carousel } from './carousel/Carousel';
import Header from './header/Header';
import GetStarted from './Home/GetStarted/GetStarted';
import OurClients from './Home/Clients/OurClients';
import Sliding from './Home/Sliding/Sliding';
import Casement from './Home/Casement/Casement';
import Special from './Home/Special/Special';
import Premium from './Home/Premium/Premium';
// import CpcNavigation from './header/Header';
// import Carousel from "./carousel/Carousel";

function App() {
  return (
    <div className="App">
     <Header />
      <Carousel />
      <GetStarted />
      <OurClients />
      <Sliding />
      <Casement />
      <Special />
      <Premium />
    </div>
  );
}

export default App;
