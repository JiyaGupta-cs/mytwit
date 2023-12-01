import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import TweetBox from './TweetBox';
import { RouterContext } from 'react-router';
import Dashboard from './Dashboard';
import Jobs from './Jobs'
import Donate from './Donate'
// import DonateBox from './DonateBox'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/donate' element={<Donate />} />
          {/* <Route path=':productId' element={<Product />} /> */}
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
