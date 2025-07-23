import logo from './logo.svg';
import './App.css';
import Navbar from './Componenets/Navbar';
import HeroSection from './Componenets/HeroSection';
import SearchBox from './Componenets/SearchBox';
import FullImageComponent from './Componenets/FullImageComponent';
import ServiceIcons from './Componenets/ServiceIcons';
import HolidayPackages from './Componenets/HolidayPackages';
// import Footer from './Componenets/Footer';
import VideoPlayer from './Componenets/VideoPlayer';

function App() {
  return (
   <div>
    <Navbar/>
    <HeroSection/>
    <SearchBox/>
    <FullImageComponent/>
    <ServiceIcons/>
    <VideoPlayer/>
    <HolidayPackages/>
    {/* <Footer/> */}
   </div>
  );
}

export default App;
