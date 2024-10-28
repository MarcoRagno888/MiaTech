import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
    )
}

export default App;
