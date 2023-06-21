import React from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';


export default function Dinh1() {
  return (
    <>
      <div className='Dinh1'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Khám phá kiến trúc độc đáo của Dinh 1 Đà Lạt</h2>
          <p>Dinh 1 Đà Lạt hay còn được du khách biết đến với tên gọi là Dinh Bảo Đại 1. Đà Lạt là một thành phố có khí hậu quanh năm mát mẻ, dễ chịu. Nơi đây không khác gì một thiêng đường trong mơ mà ai ai cũng ao ước được sống ở đây. Chính vì thế mà vua Bảo Đại đã chọn xây dựng nên 3 dinh thự xa hoa tráng lệ tại mảnh đất Tây Nguyên Lâm Viên này.</p>

          <h3>Giới thiệu về Dinh 1 Đà Lạt</h3>
          <h4>Thông tin</h4>
          <ul>
            <li>Địa chỉ: Phường 10, Thành phố Đà Lạt, Lâm Đồng, Việt Nam </li>
            <li>Giờ mở cửa: 07:00 – 17:30 </li>
            <li>Mức giá:  người lớn 40.000 VNĐ/vé và trẻ em 20.000 VNĐ/vé </li>
            <li>Số điện thoại: 093 370 91 77 </li>
            <li>Cách trung tâm thành phố: 4,8 km</li>
          </ul>
          <h4>Mô tả</h4>
          <p>Người xây dựng nên tòa cung điện mang tên King palace này chính là Robert Clément Bourgery. Ông là một triệu phú người pháp, đã cho xây dựng nên dinh 1 này vào năm 1940.</p>
          <p>Theo nhà nghiên cứu Lê Phi – tỉnh Lâm Đồng thì sau khi nơi đây được xây dựng xong. Chủ nhân của căn biệt điện này đã bán cho một người pháp. Lúc ấy cha vợ của vua Bảo Đại đã hỗ trợ tài chính mua lại cho vua Bải Đại vào năm 1949.</p>
          <p>Cha vợ của vua Bải Đại chính là quận công Nguyễn Hữu Hào. Về sau vua Bảo Đại đã đặt Tống Hành Dinh tại đây và lấy nơi đây là nơi làm việc trong thời gian ông làm Quốc Trưởng từ giai đoạn 1949 đến 1954.</p>
        </div>

        <div className='booking-container'>
          <div className='booking-wrapper'>
           <section className='booking-info'>
             <p className='price'>Xem ảnh 360</p>
            </section>
            <Link to='/VR/Dinh01' className='btn-book'>360</Link>
          </div>
        </div>

      
      </div>
      <Footer />
    </>
  );
}
