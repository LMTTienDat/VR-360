import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function DaLatPalace() {
  return (
    <>
    <Navbar/>
      <div className='DaLatPalace'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Khám phá vẻ đẹp cổ kính của khách sạn  Dalat Palace</h2>
          <p>Khách sạn Dalat Palace – Đà Lạt nổi bật với rất nhiều homestay, khách sạn và nhiều khu nghỉ dưỡng để đáp ứng đủ nhu cầu của mọi du khách. Một trong những nơi được nhiều du khách ưa chuộng phải kể đến Dalat Palace Heritage, một nơi vô cùng lý tưởng với cảnh quan thơ mộng, phòng ốc hiện đại và nhiều tiện ích khác.</p>

          <h3>Giới thiệu Khách sạn Dalat Palace </h3>
          <h4>Thông tin</h4>
          <ul>
            <li>Địa chỉ: số 02 đường Trần Phú, phường 3, TP. Đà Lạt, tỉnh Lâm Đồng </li>
            <li>Giờ mở cửa: Cả ngày </li>
            <li>Số điện thoại: 0263 3825 444 </li>
            <li>Website: https://dalatpalacehotel.com/vi/</li>
          </ul>
          <h4>Mô tả</h4>
          <p>Tọa lạc trên một quả đồi riêng biệt, với vị trí đắc địa giữa trung tâm thành phố Đà Lạt, Dalat Palace Heritgae Hotel là điểm dừng chân lý tưởng cho du khách muốn tìm một nơi lưu trú thật sang trọng và tiện nghi. Đặt chân đến Dalat Palace, bạn sẽ cảm nhận được sự sang trọng qua phong cách Art-deco, thiết kế và trang trí trang nhã, mang tính thẩm mỹ cao. Được khởi công xây dựng năm 1916 và khánh thành năm 1922 theo trường phái Victoria, Dalat Palace đã đón tiếp các nhân vật nổi tiếng và giàu có thời bấy giờ.</p>
          <p>Dalat Palace được chia làm 2 khu : khu cổ điển (43 phòng)  -  khu hiện đại ( 30 phòng) được trang trí lộng lẫy với những tiện nghi 5 sao, thiết bị cao cấp, mang đến một không gian ấm cúng và sang trọng theo phong cách thuộc địa Pháp cùng tầm nhìn rộng hướng ra hồ Xuân Hương.</p>
          <p>Nơi đây vinh dự được đón tiếp nhiều lãnh đạo cấp cao như: Nguyên Chủ tịch Quốc hội Nguyễn Thị Kim Ngân, Nguyên Thủ tướng Nguyễn Xuân Phúc, Nguyên Chủ tịch nước Nguyễn Minh Triết, Nguyên Phó Chủ tịch nước Trương Mỹ Hoa, Chủ tịch Quốc hội Cộng hòa dân chủ nhân dân Lào – Bà Yathotou Pany, Tổ chức Hoa hậu hoàn vũ thế giới, Hoa hậu hoàn vũ Việt Nam qua các nhiệm kỳ….</p>
        </div>
        
      
        <div className='booking-container'>
          <div className='booking-wrapper'>
           <section className='booking-info'>
             <p className='price'>Xem ảnh 360</p>
            </section>
            <Link to='/360' className='btn-book'>360</Link>
          </div>
        </div>
      
      </div>
      <Footer />
    </>
  );
}
