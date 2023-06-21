import React from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

export default function HoTuyenLam() {
  return (
    <>
      <div className='HoTuyenLam'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Khám phá vẻ đẹp thơ mộng của Hồ Tuyền Lâm</h2>
          <p>Hồ Tuyền Lâm Đà Lạt là một trong top 3 hồ nước tại Đà Lạt mà du khách không thể bỏ qua khi đến với Đà Lạt. Nơi đây được mệnh danh là lá phổi xanh của xứ sở sương mù.  Khi đến hồ Tuyền Lâm du khách sẽ được thả hồn vào gió ngắm nhìn khung cảnh hồ nước và những tán rừng thông tuyệt đẹp. Hồ Tuyền Lâm và Hồ Xuân Hương là 2 hồ nước đẹp nhất Đà Lạt đó các bạn.</p>

          <h3>Giới thiệu Hồ Xuân Hương</h3>
          <h4>Thông tin</h4>
          <ul>
            <li>Địa chỉ: cách trung tâm khoảng 7 km</li>
            <li>Mức giá: miễn phí </li>
            <li>Diện tích: 350 ha </li>
          </ul>
          <h4>Mô tả</h4>
          <p>Được mẹ thiên nhiên và núi rừng ưu ái. Hồ Tuyền Lâm mang một vẻ đẹp hoang sơ hùng vĩ. Mà không phải một hồ nước nào cũng có được. Nhìn thì chắc ít ai biết được đây là một hồ nước nhân tạo. Nhưng đúng là như vậy hồ nước này được hình thành nhân tạo.</p>
          <p>Vào thập niên 30, hồ nước được bao bọc và che chở bởi ngọn núi Voi. Hùng vĩ và hiên ngang bên dưới là dòng suối tía rất đỗi thơ mộng. Hồ Tuyền Lâm được một người nông dân người Pháp tìm thấy. Người khai phá khu vực này đó chính là ông Farraut.</p>
          <p>Trong thời kỳ kháng chiến chống Mỹ. Quanh khu vực hồ Tuyền Lâm này là một căn cứ bí mật. Trong kháng chiến cách mạng của của nước ta khi xưa. Nơi đây lúc trước được gọi là khu Suối Tía (hoặc khu Quang Trung).</p>
          <p>Nhưng vào năm 1987 một công ty thủy lợi lớn của Lâm Đồng. Đã xây dựng đập nước chắn ngang khu vực suối tía này. Sau đó đổi tên thành ”Hồ Tuyền Lâm”. Ý nghĩa cái tên hồ Tuyền Lâm có nghĩa là non nước hữu tình. Hiện nay hồ nước này thuộc sở hữu của SAM Tuyền Lâm.</p>
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
