import './App.css';
import Header from './components/index/header';
import HeaderPage from './pages/HeaderPage';
import FilterPage from './pages/FilterPage';
import Main from './components/index/main'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <div className='container max-w-full bg-[#080B10] min-h-screen'>
      <header>
      <Router>
            <Routes>
              <Route path='/' element={<HeaderPage/>}/>
              <Route path='/filter' element={<FilterPage/>}/>
            </Routes>
        </Router>
      </header>
      <Main/>
      <footer>

      </footer>
    </div>
    </>
  );
}

export default App;
