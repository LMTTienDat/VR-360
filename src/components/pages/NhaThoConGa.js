import React from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

export default function NhaThoConGa() {
  return (
    <>
      <div className='NhaThoConGa'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Khám phá kiến trúc độc đáo của Nhà Thờ Con Gà Đà Lạt</h2>
          <p>Nhà thờ Con Gà Đà Lạt là một trong những địa điểm du lịch Đà Lạt được nhiều du khách yêu thích tại nước ta. Nhà thờ này có lối kiến trúc tiêu biểu và cổ xưa nhất tại thành phố Đà Lạt mộng mơ.</p>

          <h3>Giới thiệu về Nhà Thờ Con Gà Đà Lạt</h3>
          <h4>Thông tin</h4>
          <ul>
            <li>Địa chỉ: số 15 Đường Trần Phú, Phường 3, thành phố Đà Lạt, tỉnh Lâm Đồng, Việt Nam </li>
            <li>Giờ mở cửa: 05:15–06:15 & 17:15–18:15 </li>
            <li>Mức giá: miễn phí </li>
            <li>Số điện thoại: 02633821421 </li>
            <li>Cách trung tâm thành phố: 1,2 km</li>
          </ul>
          <h4>Mô tả</h4>
          <p>Nhà thờ Con Gà hay còn được gọi với cái tên khác là nhà thờ chính tòa Đà Lạt. Tên tiếng Anh là nhà thờ chính toà Thánh Nicôla Bari.</p>
          <p>Nhà thờ này được xây dựng năm 1931 đến năm 1942 thì hoàn thành. Nhà thờ đã trải qua 3 lần thi công xây dựng. Và trở thành một trong những công trình công giáo lớn nhất ở thành phố Đà Lạt.</p>
          <p>Nơi đây còn là địa điểm tham quan được nhiều du khách yêu thích khi đến với thành phố mộng mơ.</p>
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
