import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import CoinPage from './pages/Coin';
import ComparePage from './pages/ComparePage';
import Watchlist from './pages/WatchList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
        <Route path="/coin/:id" element={<CoinPage/>} />
        <Route path="/compare" element={<ComparePage />}/>
        <Route path="/watchlist" element={<Watchlist />} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
