import {Routes, Route} from "react-router-dom";

import HomePage from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from "./pages/Contact/Contact";

function AppRouter() {
    return (
        <Routes>
            <Route exact path="/" element={
                <HomePage/>
            }/>
            <Route path="/projects" element={
                <Projects/>
            }/>
            <Route path="/contact" element={
                <Contact/>
            }/>
        </Routes>
    )
}

export default AppRouter;