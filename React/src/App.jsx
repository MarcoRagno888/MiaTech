import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import { Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <Routes>
       <Route path="/" element={<Home /> } />
       <Route path="/about" element={<About /> } />
     </Routes> 
  )
}

export default App;
