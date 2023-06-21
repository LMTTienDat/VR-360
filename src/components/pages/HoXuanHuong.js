import React from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

export default function HoXuanHuong() {
  return (
    <>
      <div className='HoXuanHuong'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Khám phá vẻ đẹp thơ mộng của Hồ Xuân Hương</h2>
          <p>Hồ Xuân Hương là một trong những địa điểm quen thuộc của Đà Lạt. Là nguồn cảm hứng lớn cho các thi sĩ, nhạc sĩ cho ra những tác phẩm lãng mạn, thơ mộng.</p>

          <h3>Giới thiệu Hồ Xuân Hương</h3>
          <h4>Thông tin</h4>
          <ul>
            <li>Địa chỉ: Phường 1, thành phố Đà Lạt, tỉnh Lâm Đồng </li>
            <li>Giờ mở cửa: Cả ngày </li>
            <li>Mức giá: miễn phí </li>
            <li>Diện tích: 5 km² </li>
          </ul>
          <h4>Mô tả</h4>
          <p>Đến và tham quan hồ Xuân Hương nhưng bạn đã được nghe về sự tích nơi đây. Trước đây, hồ là một dãy đầm lầy được một người Pháp.</p>
          <p>Dẫn nước từ suối Cam Ly và ngăn đập tạo hồ. Nhận thấy địa hình đắc địa với dạng lưỡi liềm rộng 25ha, có tiềm năng phát triển. Vì thế mà đến năm 1919, hồ mới bắt đầu được xây dựng. 5 năm sau chính quyền mới xây thêm một con đập tạo thành 2 hồ nhỏ.</p>
          <p>Xung quanh là sự phát triển tốt tươi của thiên nhiên bốn mùa. Cái tên hồ Xuân Hương được đặt tên từ năm 1953, nhà báo Nguyễn Vỹ là người đặt tên cho mặt hồ.</p>
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
