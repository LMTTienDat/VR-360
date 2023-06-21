import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Top điểm đến thú vị</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
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
          </ul>
          <ul className='cards__items'>
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
    </div>
  )
}

export default Cards;
