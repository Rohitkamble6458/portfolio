import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Experience from './Components/Experiance/Experiance'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
import Gallery from './Components/Certifi/Gallery'


function App() {

  return (
    
    <div className="bg-[#171d32] h-auto w-full overflow-hidden "> 
    <Navbar/>
    <Home/>
    {/* <About/> */}
    {/* <Experience/> */}
    <Projects/>
    <Gallery/>
    <Footer/>
    

    </div>

    
  )
}

export default App
