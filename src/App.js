import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Auth />} />
					<Route path='dashboard' element={<Home />} />
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
