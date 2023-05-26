import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import DetailPage from './components/product/detail-page';
import ListPage from './components/product/list-page';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ListPage />}></Route>
            <Route path="/products" element={<ListPage />}></Route>
            <Route
              path="/products/:productCode"
              element={<DetailPage />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
