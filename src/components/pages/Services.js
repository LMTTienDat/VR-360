import React from 'react';
import CardItem from '../CardItem';
import Footer from '../Footer';

import '../../App.css';
import '../Cards.css';
import './Services.css';

export default function Services() {
  return (
    <>
      <h1 className='services'>SERVICES</h1>
      <section className='heading'>
        <h2>Các địa điểm chúng tôi nghĩ rằng bạn sẽ thích</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="img-9.jpg"
              text="Khám phá kiến trúc độc đáo của Dinh 1 Đà Lạt"
              label="Kiến trúc"
              path="/services/Dinh1"
            ></CardItem>
            <CardItem 
              src="img-2.jpg"
              text="Khám phá vẻ đẹp thơ mộng của Hồ Xuân Hương"
              label="Thiên nhiên"
              path="/services/HoXuanHuong"
            ></CardItem>
            <CardItem 
              src="img-4.jpg"
              text="Khám phá kiến trúc độc đáo của Nhà Thờ Con Gà Đà Lạt"
              label="Kiến trúc"
              path="/services/NhaThoConGa"
            ></CardItem>
            <CardItem 
              src="img-3.jpg"
              text="Khám phá vẻ đẹp cổ kính của khách sạn Dalat Palace"
              label="Lưu trú"
              path="/services/DaLatPalace"
            ></CardItem>
            <CardItem 
              src="img-8.jpg"
              text="Khám phá Cà Phê F Cánh Đồng Hoa"
              label="Cà phê"
              path="/services/CaPheF"
            ></CardItem>
          </ul>
          </div>
        </div>
      </section>

      <section className='heading'>
        <h2>Các địa điểm mới</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="New01.jpg"
              text="Trường Đại học Đà Lạt"
              label="Giáo dục"
              path="/services/DLU"
            ></CardItem>
            <CardItem 
              src="New02.jpg"
              text="Trường cao đẳng sư phạm"
              label="Giáo dục"
              path="/services/CaoDangSuPham"
            ></CardItem>
            <CardItem 
              src="New03.jpg"
              text="Dalat Wonder Resort"
              label="Lưu trú"
              path="/services/DaLatWonder"
            ></CardItem>
            <CardItem 
              src="New04.jpg"
              text="Hồ Tuyền Lâm"
              label="Thiên nhiên"
              path="/services/HoTuyenLam"
            ></CardItem>
            <CardItem 
              src="New05.jpg"
              text="Quảng trường Lâm Viên"
              label="Kiến trúc"
              path="/services/QuangTruongLamVien"
            ></CardItem>
          </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  
  
  );
}