import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/Components/Home'
import AboutMe from './assets/Components/AboutMe'
import Habilities from './assets/Components/Habilities'
import MyProyects from './assets/Components/MyProyects'
import ContactMe from './assets/Components/ContactMe'
import Header from './assets/Header'
import Footer from './assets/Footer'

function App() {
    return (
    <div className="App">
      <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element= {<AboutMe />} />
        <Route path="/Habilities" element= {<Habilities />} />
        <Route path="/MyProyects" element= {<MyProyects />} />
        <Route path="/ContactMe" element= {<ContactMe />} />
      </Routes>  
      <Footer />
    </div>
  )
}

export default App
