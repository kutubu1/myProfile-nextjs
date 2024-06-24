import Image from "next/image";
import Navbar from "./components/Navbar";
import MainView from "./components/MainView";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <main>
    <Navbar/>
    <MainView/>
    <About/>
    <Footer/>
    
    </main>
   
  );
}
