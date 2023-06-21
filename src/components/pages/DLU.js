import React from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

export default function DLU() {
  return (
    <>
      <div className='TruongDaiHocDaLat'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Tìm hiểu tất tần tật về Trường Đại Học Đà Lạt</h2>
          <p>Trường đại học Đà Lạt là một trong 3 trường đại học nổi tiếng tại Đà Lạt. Hiện nay ở Đà Lạt có 3 trường đại học lớn đó chính là trường ĐH Kiến Trúc Tp.HCM (cơ sở Đà Lạt), Trường ĐH Đà Lạt, Trường ĐH Yersin.  Để tìm hiểu thêm về địa điểm du lịch Đà Lạt trường ĐH Đà Lạt này có gì thì bạn hãy cùng theo chân chúng tôi tìm hiểu chi tiết nhất nhé. Let Go!</p>

          <h3>Giới thiệu trường Đại học Đà Lạt</h3>

          <h4>Thông tin</h4>
          <ul>
            <li>Địa chỉ: số 1 Phù Đổng Thiên Vương, phường 8, Tp. Đà Lạt, tỉnh Lâm Đồng </li>
            <li>Số điện thoại: 0263 3822 246 </li>
            <li>Giờ mở cửa: 6:00 - 18:00 </li>
            <li>Mã trường: TDL</li>
            <li>Năm thành lập: 27/10/1976</li>
            <li>Diện tích: 8.400 m² </li>
            <li>Website: www.dlu.edu.vn</li>
          </ul>

          <h4>Lịch sử của trường</h4>
            <p>Đại học Đà Lạt có tiền thân là Viện ĐH Đà Lạt được thành lập từ năm 1957 và chính thức hoạt động vào năm 1958.</p>
            <p>Sau này, mãi đến năm 1976, ĐH Đà Lạt mới chính thức ra đời. ĐH Đà Lạt (hay Da Lat University) là một trong 35 trường ĐH tốt nhất Việt Nam (Webometrics, 2019).</p>
            <p>Đây cũng là cơ sở đào tạo duy nhất ở khu vực Tây Nguyên vinh dự được góp mặt trong danh sách này.</p>

          <h4>Khám phá trường ĐH Đà Lạt</h4>
          <p>Với diện tích siêu rộng rãi, để tham quan hết ngôi trường quả thực tốn cũng khá nhiều thời gian đấy! Từ cổng trường đi vào là những con đường được đổ nhựa. Sạch sẽ và mượt mà, uốn lượn theo sườn đồi. Trục đường của trường rất rộng rãi, các loại xe dễ dàng lưu thông. Do đó, vỉa hè chính là nơi dành cho các bạn sinh viên đi bộ.</p>
          <p>Đi học trong trường mà như đi tản bộ bên Hàn Quốc vậy đó. Đặc biệt khi mùa xuân tới, hai bên đường là hoa Anh Đào nở rộ. Thật khiến người ta phải thốt lên với quang cảnh trữ tình như vậy Ngoài ra, còn có đường Hướng Dương, đường Thông reo,… Đều là những con đường siêu đẹp, siêu thơ mộng và siêu lãng mạn.</p>
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
