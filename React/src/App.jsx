import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import { Route, Routes } from "react-router-dom";
import Layout from './layouts/Layout';
import TodoDetails from './Components/TodoDetails';
import { Provider } from 'react-redux';
import store from './redux/store';  

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;

