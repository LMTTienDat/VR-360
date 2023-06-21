import React from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

export default function CaoDangSuPham() {
  return (
    <>
      <div className='CaoDangSuPham'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Khám phá toàn cảnh trường Cao Đẳng Sư Phạm Đà Lạt với vẻ đẹp độc đáo</h2>
          <p>Từng được đánh giá là một trong những công trình xây dựng độc đáo của thế kỷ 20. Có tuổi đời cả gần 100 năm. Trường Cao Đẳng Sư Phạm  ít nhiều cũng có đóng góp nhất định. Cho nét đẹp về hạ tầng của thành phố sương mù.</p>

          <h3>Giới thiệu trường Đại học Đà Lạt</h3>

          <h4>Thông tin</h4>
          <ul>
            <li>Địa chỉ: số 29 Yersin, phường 10, Đà Lạt </li>
            <li>Số điện thoại: 0633 822 489 </li>
            <li>Giờ mở cửa: 6:00 - 16:30 </li>
            <li>Mã trường: C42</li>
            <li>Năm thành lập: 3-9-1976</li>
            <li>Website: https://cdspdalat.edu.vn</li>
          </ul>

          <h4>Lịch sử của trường</h4>
          <p>Đây là công trình kiến trúc độc đáo mang đậm dấu ấn Châu Âu. Nhưng cũng đồng thời kết hợp được nhiều chi tiết kiến trúc bản địa. Để tạo thành một công trình kiến trúc hòa hợp giữa Đông và Tây.</p>
          <p>Được đánh giá là một kiến trúc theo phái hiện đại lúc bấy giờ. Đây quả là một thành công của tác giả. Khi gắn bó tổng thể công trình với địa hình khu vực.</p>
          <p>Xứng đáng được các nhà phê bình. Các kiến trúc sư và các nhà nghiên cứu kiến trúc nổi tiếng trên thế giới. Trong hiệp hội Kiến trúc Quốc tế (UIA) công nhận. Là một trong số 1.000 công trình kiến trúc tiêu biểu của thế giới trong thế kỷ XX.</p>
          <p>Ngày 28–12–2001 Trường Cao Đẳng Sư Phạm Đà Lạt. Được công nhận là Di tích Kiến trúc Quốc gia.</p>

          <h4>Khám phá trường ĐH Đà Lạt</h4>
          <p>Như nhiều công trình mang nét Pháp rất dễ thấy ở thành phố Đà Lạt. Trường Cao Đẳng Sư Phạm cũng có một bề ngoài rất phương Tây. Được xây dựng với những bức tường gạch đỏ. Tạo vẻ ấm cúng giữa phố núi đầy sương lạnh. Tháp chuông cao mái xám tựa như cây bút chì được gọt cẩn thận. Dựng đứng ngạo nghễ giữa trời.</p>
          <p>Điểm nhấn đặc biệt khác về kiến trúc của ngôi trường. Là dãy lớp học được xây dựng theo hình vòng cung mềm mại. Trông càng nghệ thuật hơn giữa không gian thoáng đãng của sân trường bao quanh. Chiều dài của dãy nhà chưa đến 100 m, 3 tầng lầu. Và 24 phòng học ở mỗi tầng. Trường Cao Đẳng Sư Phạm với cấu trúc này. Đã như đẹp thêm giữa khoảng trời đầy thơ mộng của thành phố.</p>
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

