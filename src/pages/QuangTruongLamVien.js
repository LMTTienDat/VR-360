import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


export default function QuangTruongLamVien() {
  return (
    <>
    <Navbar/>
      <div className='QuangTruongLamVien'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Quảng trường Lâm Viên Đà Lạt – Góc check in CỰC HOT nhất định phải đến</h2>
          <p>Quảng trường Lâm Viên Đà Lạt hay còn được du khách biết đến với tên gọi khác đó là Quảng trường Đà Lạt. Đây là một trong những địa điểm vui chơi thú vị, hấp dẫn nhất tại Đà Lạt mà bạn không thể nào bỏ qua được. Nơi đây chính là nơi tụ họp vui chơi của tất cả người dân Đà Lạt cùng khách du lịch vào mỗi dịp cuối tuần</p>

          <h3>Giới thiệu về Dinh 1 Đà Lạt</h3>
          <h4>Thông tin</h4>
          <ul>
            <li>Địa chỉ: Tọa lạc tại cung đường Trần Quốc Toản, thuộc phường 1 của thành phố Đà Lạt, tỉnh Lâm Đồng.</li>
            <li>Giờ mở cửa: Cả ngày </li>
          </ul>
          <h4>Mô tả</h4>
          <p>Quảng trường Lâm Viên được ra đời nhằm mục đích quảng bá và phát triển ngành du lịch tại Đà Lạt. Một địa điểm để người dân địa phương và du khách có thể hòa mình vào với nhau. Cùng nhau vui chơi, giải trí sau những ngày làm việc mệt mỏi. Phía trong quảng trường Lâm Viên còn có một siêu thị Big C để người dân địa phương và du khách có thể tha hồ mua sắm.</p>
          <p>Quảng trường Lâm Viên là nơi thu hút rất đông du khách trong lẫn ngoài nước đến đây tham quan và du lịch. Điều khiến du khách và các bạn trẻ yêu thích nhất tại quảng trường này chính là những góc chụp hình sống ảo. Tại quảng trường hầu như bạn đứng bất kỳ vị trí nào cũng có thể săn cho mình những bức ảnh đẹp nhất. Mang đậm dấu ấn của Đà Lạt. Chỉ cần nhìn vào ảnh là họ sẽ biết bạn chụp ở Đà Lạt.</p>
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
