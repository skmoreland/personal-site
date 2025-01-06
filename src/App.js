import './App.css';
import NavBar from './components/NavBar/NavBar';
import AppRouter from './AppRouter'
import React from "react";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter baseline="/">
      <div className="App">
        <NavBar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
