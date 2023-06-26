import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from './pages/Home/Home';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/aboutme" element={
                    <HomePage/>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;