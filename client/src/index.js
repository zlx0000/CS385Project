import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Layout from './Pages/Layout';
import Release from './Pages/Release';
import AboutUs from './Pages/AboutUs';
// import Search from './Pages/Search'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search/>} />
          <Route path="release" element={<Release/>} />
          <Route path="aboutus" element={<AboutUs />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
