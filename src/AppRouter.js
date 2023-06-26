import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <HomePage/>
                }/>
                <Route path="/projects" element={
                    <Projects/>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;