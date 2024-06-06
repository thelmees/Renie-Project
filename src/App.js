import './App.css';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import  CardData from './components/CardData'
import { useEffect, useState } from 'react';
import HeroTwo from './components/HeroTwo';


function App() {

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App w-[30%] m-auto ">
      <Navbar isFixed={scrollPosition >= 0}/>
      <Banner/>
      <Hero isFixed={scrollPosition >=300}/>
      <div id="Hero"></div>
      <Cards cards={CardData} />
      <HeroTwo isFixed={scrollPosition >=900}/>

    </div>
  );
}

export default App;
