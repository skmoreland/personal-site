import './App.css';
import AppRouter from './AppRouter'
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import WindowsNav from './components/WindowsNav/WindowsNav';

function App() {
  return (
    <BrowserRouter baseline="/">
      <div className="App">
        <WindowsNav />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
