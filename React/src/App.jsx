import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import { Route, Routes } from "react-router-dom";
import Layout from './layouts/Layout';
import TodoDetails from './Components/TodoDetails';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="todos/:id" element={<TodoDetails />} />  {/* Aggiungi questa route */}
            </Route>
        </Routes>
    );
};

export default App;
