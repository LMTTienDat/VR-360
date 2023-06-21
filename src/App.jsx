import React from 'react';

import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import Destination from './pages/Dinh1';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Dinh1 from './pages/Dinh1';
import NhaThoConGa from './pages/NhaThoConGa';
import HoXuanHuong from './pages/HoXuanHuong';
import DaLatPalace from './pages/DaLatPalace';
import CaPheF from './pages/CaPheF';
import DLU from './pages/DLU';
import CaoDangSuPham from './pages/CaoDangSuPham';
import DaLatWonder from './pages/DaLatWonder';
import HoTuyenLam from './pages/HoTuyenLam';
import QuangTruongLamVien from './pages/QuangTruongLamVien';
import NhaTho from './VR/NhaTho/NhaTho';
import AdminHome from './pages/admin/AdminHome';

function App() {
  return (
    <div className='App'>
      <ScrollToTop>
      
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/sign-up' exact element={<SignUp />} />
          <Route path='/services/Dinh1' element={<Dinh1 />} />
          <Route path='/services/NhaThoConGa' element={<NhaThoConGa />} /> 
          <Route path='/VR/NhaTho' element={<NhaTho />} /> 


          <Route path='/services/HoXuanHuong' element={<HoXuanHuong />} />
          <Route path='/services/DaLatPalace' element={<DaLatPalace />} />
          <Route path='/services/CaPheF' element={<CaPheF />} />
          <Route path='/services/DLU' element={<DLU />} />
          <Route path='/services/CaoDangSuPham' element={<CaoDangSuPham />} />
          <Route path='/services/DaLatWonder' element={<DaLatWonder />} />
          <Route path='/services/HoTuyenLam' element={<HoTuyenLam />} />
          <Route path='/services/QuangTruongLamVien' element={<QuangTruongLamVien />} />


          <Route path='/admin' element={<AdminHome />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
