import React from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

export default function DaLatWonder() {
  return (
    <>
      <div className='DaLatWonder'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Khu nghỉ dưỡng Dalat Wonder Resort</h2>
          <p>Dalat Wonder Resort một khu resort nằm yên bình bên bờ hồ Tuyền Lâm. Với tiêu chuẩn 4 sao, hệ thống nội thất, trang thiết bị hiện đại cùng không khí thoải mái trong lành. Chắc chắn Đà Lạt Wonder Resort là một điểm dừng chân lý tưởng cho bạn và gia đình trong kỳ nghỉ tại Đà Lạt.</p>

          <h3>Giới thiệu Khách sạn Dalat Palace </h3>
          <h4>Thông tin</h4>
          <ul>
            <li>Địa chỉ: Số 19 Đường Hoa Hồng, Phường 4, Thành phố Đà Lạt, Tỉnh Lâm Đồng</li>
            <li>Số điện thoại: 0936 968 151</li>
            <li>Tiêu chuẩn sao: 4 Sao</li>
            <li>Số lượng phòng: 146 phòng</li>
          </ul>
          <h4>Mô tả</h4>
          <p>Được mệnh danh như một ngôi làng Châu Âu thu nhỏ ngay giữa lòng Đà Lạt, Dalat Wonder Resort nằm xinh xắn trong khuôn viên của khu du lịch Quốc gia Hồ Tuyền Lâm với diện tích hồ nước, đồi thông bao quanh thơ mộng, trữ tình. Với công suất phục vụ lên tới 312 phòng nghỉ của khối building và 38 căn villa, tiêu chuẩn chất lượng dịch vụ 4 sao đẳng cấp quốc tế, nơi đây sẽ là sự lựa chọn hoàn hảo cho chuyến nghỉ dưỡng của Quý khách và người thân.</p>
          <p>Không chỉ phục vụ hoạt động nghỉ dưỡng, đến với chúng tôi, Quý khách có thể dễ dàng thiết kế các hoạt động vui chơi cùng gia đình, bạn bè, người thân ngay tại Resort khi tham quan Khu Vui chơi Giải trí WonderLand. Với các hoạt động trò chơi mạo hiểm phong phú như đua xe địa hình, xe trượt, cưỡi đà điểu, hay các hoạt động trải nghiệm độc đáo như: tham quan nhà tuyết với cái lạnh âm độ duy nhất tại Đà Lạt, hết hồn trải nghiệm nhà ma, hay phiêu lưu với thế giới games thực tế ảo, du ngoạn cưỡi ngựa, sôi động cùng cuộc đua chó, cưỡi đà điểu... Đây là môi trường lí tưởng cho mọi độ tuổi, mọi thành viên đều có thể tham gia và ghi dấu kỷ niệm.</p>
          <p>hông chỉ thế, quý khách còn có thể lắng đọng những phút giây lãng mạn trên chuyến du thuyền ngắm cảnh hồ Tuyền Lâm nên thơ, cảm nhận cái khí trời se sắt của Đà Lạt và những vi vu, réo rắt của ngàn thông giữa mênh mông mặt nước... Các dịch vụ tiện ích như hồ bơi vô cực, phòng Gym, Spa, tham quan vườn dâu, vườn rau... luôn sẵn sàng phục vụ bất kỳ khi nào Quý khách có nhu cầu. Từ Dalat Wonder Resot, Quý khách cũng có thể dễ dàng di chuyển tới nhiều điểm tham quan nổi tiếng như Thiền Viện Trúc Lâm, Thác Prenn, Thác Pongour, Nhà thờ Con Gà, Dinh Bảo Đại, XQ Sử quán, Biệt điện Trần Lệ Xuân, Cung Nam Phương Hoàng Hậu...</p>
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
