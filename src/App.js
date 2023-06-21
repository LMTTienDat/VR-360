import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Destination from './components/pages/Dinh1';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Dinh1 from './components/pages/Dinh1';
import NhaThoConGa from './components/pages/NhaThoConGa';
import HoXuanHuong from './components/pages/HoXuanHuong';
import DaLatPalace from './components/pages/DaLatPalace';
import CaPheF from './components/pages/CaPheF';
import DLU from './components/pages/DLU';
import CaoDangSuPham from './components/pages/CaoDangSuPham';
import DaLatWonder from './components/pages/DaLatWonder';
import HoTuyenLam from './components/pages/HoTuyenLam';
import QuangTruongLamVien from './components/pages/QuangTruongLamVien';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/sign-up' exact element={<SignUp />} />
          <Route path='/services/Dinh1' element={<Dinh1 />} />
          <Route path='/services/NhaThoConGa' element={<NhaThoConGa />} /> 
          <Route path='/services/HoXuanHuong' element={<HoXuanHuong />} />
          <Route path='/services/DaLatPalace' element={<DaLatPalace />} />
          <Route path='/services/CaPheF' element={<CaPheF />} />
          <Route path='/services/DLU' element={<DLU />} />
          <Route path='/services/CaoDangSuPham' element={<CaoDangSuPham />} />
          <Route path='/services/DaLatWonder' element={<DaLatWonder />} />
          <Route path='/services/HoTuyenLam' element={<HoTuyenLam />} />
          <Route path='/services/QuangTruongLamVien' element={<QuangTruongLamVien />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
