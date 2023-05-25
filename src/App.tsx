import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import LandingPage from './components/landing-page';
import DetailPage from './components/product/detail-page';
import ListPage from './components/product/list-page';

function App() {
  return (
    <div className="app-wrapper">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/products" element={<ListPage />}></Route>
            <Route
              path="/products/:productInfo"
              element={<DetailPage />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
