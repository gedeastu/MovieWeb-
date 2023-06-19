import './App.css';
import Header from './components/index/main'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <div className='container max-w-full bg-[#080B10] min-h-screen'>
      <header>

      </header>
      <main className='grid grid-cols-2'>
        <div id="content">
          <Header/>
        </div>
        <aside>

        </aside>
      </main>
      <footer>

      </footer>
    </div>
    </>
  );
}

export default App;
