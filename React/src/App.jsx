import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import { Route, Routes } from "react-router-dom";
import Layout from './layouts/Layout';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
