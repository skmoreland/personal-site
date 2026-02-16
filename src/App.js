import './App.css';
import { BrowserRouter } from 'react-router-dom';
import WindowsNav from './components/WindowsNav/WindowsNav';
import Desktop from './pages/Desktop/Desktop';

function App() {
  return (
    <BrowserRouter baseline="/">
      <div className="App h-screen max-h-screen">
        <WindowsNav />
        <Desktop />
      </div>
    </BrowserRouter>
  );
}

export default App;
