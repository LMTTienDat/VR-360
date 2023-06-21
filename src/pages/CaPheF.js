import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
export default function CaPheF() {
  return (
    <>
    <Navbar/>
      <div className='CaPheF'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Khám phá Cà Phê F Cánh Đồng Hoa</h2>
          <p>Một quán cà phê và cũng là điểm tham quan vô cùng thú vị và hấp dẫn vừa xuất hiện đã cực Hot tại thành phố du lịch Đà Lạt đó chính là F Cánh Đồng Hoa với view 360 vô cùng ảo diệu.</p>

          <h3>Giới thiệu cà phê F</h3>
          <h4>Thông tin</h4>
          <ul>
            <li>Địa chỉ: Cafe F cánh đồng hoa thuộc đường lánh nạn 1, đèo Mimosa, phường 10 thành phố Đà Lạt tỉnh Lâm Đồng </li>
            <li>Giờ mở cửa: 8:00 – 18:00 hằng ngày </li>
            <li>Mức giá: Người lớn 30.000 VNĐ - Trẻ em 20.000 VNĐ - Trẻ dưới 5 tuổi miễn phí </li>
            <li>Số điện thoai: 0263 3516 777 </li>
            <li>Cách trung tâm thành phố: 8,5km</li>
          </ul>
          <h4>Mô tả</h4>
          <p>Quán café F cánh đồng hoa không chỉ đơn thuần là một quán cà phê như những quán cà phê khác. Mà địa điểm này cực kỳ thích hợp để cho những du khách, những “tín đồ” ưa thích “sống ảo”. Bơi vì khung cảnh nơi đây sẽ giúp cho các bạn có được những bức ảnh “vô cùng ảo diệu”.</p>
          <p>Cà phê F tọa lạc tại một vị trí khá thơ mộng và trữ tình. Nằm ẩn mình trong một thung lũng bên sườn đồi thoai thoải. Với một khoảng không xanh mát của hoa và những bóng cây. Phía bên dưới là những cánh đồng hoa với muôn vàn màu sắc khác nhau. Đang đua nhau nở rộ dưới một vùng trời tuyệ đẹp mang đậm chất Đà Lạt.</p>
          <p>Đến với nơi đây, quý du khách không chỉ được thưởng thức hương vị cà phê thơm nogn đặc trưng. Hay những món ăn ngon đậm đà hương vị bản sắc của Đà Lạt. Mà khi đến với nơi đây các bạn còn được ngắm nhìn, đắm mình vào những bức tranh thiên nhiên ngập tràn sắc hoa. Khiến cho các bạn cứ ngỡ rằng mình đang lạc vào trong một câu chuyện cổ tích vậy!</p>
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
