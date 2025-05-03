module.exports.config = {
    name: "namedai",
    version: "0.0.1",
    hasPermssion: 0,
    credits: "Quách Tất Lộc",
    description: "Coppy Name Để Rename",
    commandCategory: "Nhóm",
    cooldowns: 5
};

module.exports.run = function ({ api, event }) {
    const data = [" 你是我的灵魂和灵魂的呼吸是日新月异的信念和希望。 没有你生命毫无意义 这种爱是我不能没有的。 和那个我会永远爱的女孩 此生永不分离。 因为我们在一起可以使彼此变得完整 没有你在我身边我就无法存在",

"𓂄𓆩𑁍𓆪𓂁 Người Yêu Ơi Em Đi Nhé 𓃰 Cho Em Quay Bước Đi Trong Lặng Thinh Em Anh Nhé 𓃽 Bao Nhiêu Khoảnh Khắc Khi Ta Gần Nhau Xin Hãy Xếp 𓃚 Vào Nơi Gọi Là Quá Khứ 𓆉 Bình Yên Bên Ai Anh Nhé Em Không Muốn Thấy Anh Đau Buồn Đâu Xin Hãy Nhớ 𓃹 Mai Sau Nếu Có Vô Tình Hặp Nhau Lòng Em Sẽ Đau Nếu Như Anh Buồn 𓂄𓆩𑁍𓆪𓂁",

"𓂄𓆩𑁍𓆪𓂁 Dù Cho Mai Về Sau 𓉢 Mình Không Bên Cạnh Nhau 𓂹 Làm Tim Anh Quặn Đau 𓅕 Anh Trông Ngóng Bao Nhiêu Lâu 𒅒 Dù Vương Vấn U Sầu 𓆉 Mùa Thu Có Phai Màu 𓋜 Anh Vẫn Muốn Yêu Em 𓀨 Dù Cho Muôn Trùng Phương 𓇻 Còn Bao Nhiêu Lời Thương 𓃞 Dù Mênh Mông Đại Dương 𖣔 Phai Đi Sắc Hương Mơ Mộng 𓆣 Anh Vẫn Yêu Mình Em Thôi Đấy 𓅷 Em Ơi 𓆇 Đừng Để Tình Anh Dở Dang 𓂄𓆩𑁍𓆪𓂁",

"𓂄𓆩𓆣𓆪𓂁 Anh Không Thể Biến Em Thành Người Hùng 𓅄 Nhưng Anh Có Thể Biến Em Thành Người Dùng Facebook www.defloration.biz",

" 𓇻𑁍 Anh Yêu Em Đơn Giản Vì Anh Ngu Như Chó Thêm Một Lần Nữa Để Anh Bớt Ngu Ra Thiên Thần Trong Bar Chơi Đá Còn Anh Thì Nằm Khóc Trên Chiếc Ghế SoFa Lớp Năm Anh Biết Mùi Thuốc Lá Mười Tuổi Anh Biết Đến Rượu Bia Mối Tình Đầu Vào Năm Lớp Bốn Đều Tan Nát Cộng Thêm Máy Vụ Kia Khả Năng Anh Chính Là SadBoiz 𓇻𑁍",

"𓇻𓆪𓂁 想念和爱一个人的那一天 是我知道我很快就要离开你的那一天 烟花的声音在天空中与值得的人一起爆炸 一旦我受到伤害和伤害 悲伤的我就在身后 无言的爱当我失去某人的时候你也是𓂄𓆩𑁍",

"𓂄𓆩𑁍𓆪𓂁 Có Cơn Mưa Nào Đôi Mình Đi Qua Anh Đến Bên Em Ngày Đòi Mình Chia Xa 𓃟 Mùa Lá Rơi Bên Hồ Nỗi Cô Đơn Lớn Lên Mùa Thu Ấy Em Không Còn Bên Cạnh Anh Nữa 𓆉 Anh Vẫn Đứng Nơi Đây Chờ Em Cùng Cơn Mưa 𓄿 Chúng Ta Sau Này Chẳng Có Chúng Ta Bây Giờ 𓆏 Một Người Âm Thầm Đứng Dưới Mưa Nhìn 𓉣 Em Một Người Giữa Thành Phố Vẫn Cứ Chờ Em 𓂄𓆩𑁍𓆪𓂁",

"Theo Thời Gian Những Hạt Mưa Như Nặng Thêm 𓃔 Xóa Hết Thương Yêu Mặn Nồng Ngày Nào Giữa Chúng Ta 𓃬 Anh Lục Tìm Vẫn Cứ Mãi Lục Tìm Giơ Bàn Tay Cố Kìm Nén Những Cảm Xúc 𓀁 Vùi Mình Vào Đêm Đen Anh Chẳng Tìm Thấy Lối Ra Oh Oh 𓆤 Sau Lưng Là Tiếng Nói Yêu Anh Chẳng Rời Xa Anh Trước Mắt Anh Điều Đấy Nó Dối Trá Tại Sao Người Vội Quên Mau 𓁔 Bài Ca Anh Viết Sẽ Không Được Trọn Vẹn Đâu Em 𓂄𓆩𑁍𓆪𓂁",

"𓂄𓆩𑁍𓆪𓂁 Tiếc Thay Những Năm Tháng Ân Cần 𓆉 Cớ Sao Anh Chẳng Hề Phân Vân Lá Thư Tay Cũng Đã Vơi Dần 𓉡 Im Lặng Hay Nhẫn Tâm Khi Lời Hẹn Ước Càng Thêm Bẽ Bàng 𓅔 Lặng Thầm Quay Bước Nhanh 𓃟 Ba Kiếp Tình Đổi Một Kiếp Duyên Chẳng Thành Cố Gắng 𓉢 Nhưng Nào Thắng Duyên Trời Bắt Đôi Ta Phải Chia Đôi Nơi Biết 𓉣 Bao Nhiêu Hạnh Phúc Trên Đời Cớ Sao Mỗi Mình Ta Chơi Vơi 𓂄𓆩𑁍𓆪𓂁",

"𓅄 Vì Ngày Hôm Nay Em Cưới Rồi Vụn Vỡ Vết Thương Đau Mãi Trong Tim 𓃓 Người Đàn Ông May Mắn Ấy Từ Nay Đã Có Em 𓃔 Vẫn Muốn Đến Đây Gặp Em Một Lần Để Thấy Em Hạnh Phúc Như Thế Nào Rồi Anh Đi 𓃕 Vì Ngày Hôm Nay Em Cưới Rồi 𓃖 Mai Sau Anh Sống Thế Nào 𓃯 Một Người Đã Mang Cả Thế Giới Sánh Đôi Với Tình Yêu Mới 𓃰 Ngày Em Đẹp Nhất Trên Đời Là Ngày Chúng Ta Xa Mãi Một Người 𓃱",

"Chúc Em Rơi Nước Mắt 𒅒 Vì Hạnh Phúc Bên Người Mà Em Yêu 𓆉 Một Tràng Trai Xuất Sắc 𓅛 Để Dư Giả Tiếng Cười Cho Em Tiêu 𓅢 Anh Đã Không Còn Những Thù Hận 𓃹 Không Còn Muốn Chết Ngay Trong Đêm Khi Chia Tay 𓆌 Ngày Không Em Lại Là Càng Bận Cảm Ơn Em Đã Xa Nơi Đây 𓃟 Một Ngày Tình Cờ Anh Sẽ Mỉm Cười Khi Thấy Em Cùng Ai 𓃰 Trời Không Than Thở 𓉣 Trời Ban Tía Nắng Khi Biết Ta Dừng Lại 𓆤",

"𓂄𓆩𑁍𓆪𓂁 Xe Đạp Lách Cách Tôi Vẫn Chưa Quen Đường Thì Tối Chơi Vơi Còn Tôi Vẫn Cứ Đứng Đợi Em Nhẹ Bước Đến Mi Đã Thôi Hoen Trời Trở Gió Heo May Vì Tôi Đã Lỡ Yêu Em Cũng May Đường Về Nhà Em Quá Xa Tôi Mới Được Trông Ngóng Em Buông Lời Hát Nhớ Thương Ngại Ngùng Nhìn Em Thoáng Qua Hạ Ơi Đừng Trôi Mãi Mặc Kệ Em Với Tôi Đi Về 𓂄𓆩𑁍𓆪𓂁",

"𓂄𓆩𑁍𓆪𓂁 Xe Đạp Lách Cách Tôi Vẫn Chưa Quen Đường Thì Tối Chơi Vơi Còn Tôi Vẫn Cứ Đứng Đợi Em Nhẹ Bước Đến Mi Đã Thôi Hoen Trời Trở Gió Heo May Vì Tôi Đã Lỡ Yêu Em Cũng May Đường Về Nhà Em Quá Xa Tôi Mới Được Trông Ngóng Em Buông Lời Hát Nhớ Thương Ngại Ngùng Nhìn Em Thoáng Qua Hạ Ơi Đừng Trôi Mãi Mặc Kệ Em Với Tôi Đi Về 𓂄𓆩𑁍𓆪𓂁",

"𓂄𓆩𑁍𓆪𓂁Ngày Hôm Ấy Em Buông Tay Anh Vì Lí Do Gì𓆤Người Hãy Nói Đi𓃰Đừng Bắt Anh Phải Nghĩ Suy𓆉Để Rồi Từng Đêm𓆫Thao Thức Lệ Tràn Ướt Đôi Khóe Mi𓅢Cũng Chỉ Bởi Vì Em Ra Đi Chẳng Lời Biệt Ly𓅇Rồi Những Ngày Qua Anh Phải Sống𓃦Trong Nỗi Cô Đơn𓆦Phố Đông Tim Lạnh Lòng Say Mình Anh Hiu Quạnh 𓅷Giờ Em Nơi Đâu 𓅾Xin Hãy Trả Lời Một Lần Anh Đi𓆫Lí Do Hai Ta Kết Thúc Là Tại Sao卐 𓂄𓆩𑁍𓆪𓂁",

"𓂄𓆩𑁍𓆪𓂁 Tricker Đang Đòi Pem Acc Anh𓅃 Anh Không Ước Die 𓊑 Anh Chỉ Muốn Tài Khoản Facebook Của Mình 𓆣 Bị Đình Chỉ Vào Mỗi Buổi Sáng 𓀃 Để Anh Nói Cho Các Em Nghe 𓀌 Là Một Tricker Không Nên Đi Gây War Hay Show Trình 𓅇 Hãy Đem Những Gì Mình Biết Được 𓆗 Để Bảo Vệ Người Mình Yêu Thương 𓆏 Đó Mới Là Chân Lí 𓂄𓆩𑁍𓆪𓂁",

"𓂄𓆩𑁍𓆪𓂁Tại Vì Thích Em Nhiều Quá Nhưng Em Lại Nói Là À Lôi𓆥 Cũng Định Solo Hiphop Cùng Với Trai Bản Nhưng Mà Thôi 𒈞Anh Gửi Vào Trong Câu Rap Cho Em Dính Cả Thính Cả Mồi 𓊗Nhà Em Có Mấy Quả Đồi Ừ Thì Anh Cũng Tính Cả Rồi𓂄𓆩𑁍𓆪𓂁",

"𓂄𓆩𑁍𓆪𓂁 Cuộc Tình Xưa Phai Dấu Từ Một Buổi Chiều 𓆡Thật Buồn Mây Xám Theo Nhau Về𓃠Sầu Thương Giăng Kín Lấp Lối Dĩ Vãng Tương Lai Mịt 𓆉Mù Bóng Anh Đã Quá Xa Vời 𓆜Một Mình Lê Chân Lạc Loài 𓃟Lang Thang Đường Về Mù Khơi 𓃷Còn Gì Đâu Anh Hỡi Từng Kỷ Niệm Nhạt Nhòa Theo Tháng Năm Mong Chờ 𓆗Về Đâu Đêm Tối Với Bóng Dáng Ấy Tan Theo Làn Mây 𓆈Giấc Mơ Nay Đã Phai Tàn 𓂄𓆩𑁍𓆪𓂁",

"𓂄𓆩𓉢𓆪𓂁You Took My Heart Held𓆤it And Ripped It Apart Make Me A Prisoner𓅢Got Me Going Right Under Feelling That You Feign Fooling Me𓆉again No Need To Explain Taking My Own Lane𓆣God’s Helping Me Out Get Over My Doubt𓆉Thought I Can’t Live Without𓅇Forget You Right Now𓃯Ah Ah Ah Ah Ah Ah Ah Ah Ah Ah Ah Ah Ah Ah Ah Ah𓆙Making My Way Making My Way𑁍 𓇽𑁍",

"𓂄𓆩𑁍𓆪𓂁 Tôi Muốn Kiếm Tờ Xanh Lục 𓅋Tôi Muốn Kiếm Tờ Xanh Dương 𒈞Đừng Làm Cái Tính Của Anh Thêm Cục𒈒Mà Hãy Làm Cho Anh Mà Hãy Làm Cho Anh Thương𓆉Anh Cứ Loay Hoay Đi Tìm Cái Chất Của Anh𓃟Trong Nó Đang Chạy Quanh Xương 𓃰Thằng Em Anh Vẽ Cho Quả Cảnh 𓃯Cứ Phải Gọi Là Đẹp Như Tranh Luôn𓅋And I'm On The Move 𓂄𓆩𑁍𓆪𓂁",

"𓇻𑁍 Anh Yêu Em Đơn Giản Vì Anh Ngu Như Chó Thêm Một Lần Nữa Để Anh Bớt Ngu Ra Thiên Thần Trong Bar Chơi Đá Còn Anh Thì Nằm Khóc Trên Chiếc Ghế SoFa Lớp Năm Anh Biết Mùi Thuốc Lá Mười Tuổi Anh Biết Đến Rượu Bia Mối Tình Đầu Vào Năm Lớp Bốn Đều Tan Nát Cộng Thêm Máy Vụ Kia Khả Năng Anh Chính Là SadBoiz𓇻𑁍",

"𓃰𓂄𓆩 Không Cần Mang Giày Cao Gót 𓆉 Không Cần Phấn Son Cầu Kì 𓅿 Mà Khiến Anh Nằm Mơ Em Đêm Ngày 𓆦 Bên Cạnh Em Bình Yên Quá 𓆩 Anh Chỉ Muốn Nói Mãi Trong Tóc Làn Thơm Dịu Dàng 𓆛 Hay Là Anh Anh Ba Má 𓆤 Xin Được Rước Em Về Nhà 𓅥 Để Giữ Em Của Riêng Anh Cả Đời 𓄁 Đợi Chờ Anh Bấy Lâu Em Muốn Bên Người 𓆣𓆪𓂁",

"𓇻𑁍Đã Từng Khóc Xuyên Qua Đêm Tỉnh Mộng Gối Đã Ướt Đẫm Chợt Anh Như Hè Qua Ngập Tràn Ấm Áp Nắng Sớm Dù Hai Ta Già Đi Và Dù Hai Ta Già Đi Vẫn Còn Đậy Bóng Dáng Ngày Ấy Một Điều Xa Xưa Ta Từng Thề Nguyện Qua Rồi Cùng Đi Cùng Đi Ngàn Năm Về Sau Mình Vẫn Có Nhau Tô Màu Lên Trải Hoa Tình Yêu Chúng Mình Đập Tan Màn Sương Mù Kia Còn Vương Vấn Không Buông Bàn Tay Đắm Đuối Đắm Đuối Mê Say𑁍𓇻 ",

"𓆉 Có Lẽ Anh Đã Quá Yêu Em 𓃔 Và Rồi Nhận Ra 𓃬 Em Mang Cho Ta Những Đắng Cay 𓀁 Và Có Lẽ Anh Đã Quá Thương Em 𓆤 Giờ Còn Hư Vô 𓁔 Anh Muốn Vùi Chôn Bao Tháng Ngày 𓅄 Em Đã Xa Anh 𓃹 Vào Trong Một Chiều Mưa Bay 𓂄𓆩𑁍𓆪𓂁 Mang Những Yêu Thương 𓅋 Hòa Du Câu Ca Với Mây 𓃠 Quên Hết Đi Bao Ngày 𓃟 Còn Đọng Lại Trong Nơi Tim 𓅘 Anh Biết Những Chân Thành 𓅕 Sẽ Không Dành Cho Anh ⸙",

"𓂄𓆩𑁍𓆪𓂁 Có Những Ngày Mùa Đông Lạnh Thấu Nhưng Cha Vẫn Chưa Về 𓁏 Mẹ Cười Nhưng Con Biết Mẹ Lo Lắm Cha Ơi 𓅑 Xuân Chỉ Về Khi Con Nghe Thấy Tiếng Xe Quen Thuộc 𓃦 Tuổi Thơ Ơi Nhớ Lắm Bánh Cáy Theo Tôi Lớn Khôn 𓀠 Thời Gian Trôi Con Lớn Dần Con Biết Ước Mơ Của Con Là Gì 𓅓 Chạy Theo Đam Mê Con Sợ Con Quên Đi Quê Hương 𓂄𓆩𑁍𓆪𓂁",

"𓂄 Anh Trông Theo Đó Đâу𓅃 Nhưng Sao Chẳng Thấу Những Dấu Son Còn Tươi Trên Môi Hồng Em Từ Ngàу Em Đi𓆣 Khi Bao Nhiêu Khó Khăn Bên Anh Nhiều Lắm Em Nói Em Sẽ Về Đâу Khi Mùa Đông Tàn𓆏 Anh Nhớ Em Khi Cơn Mưa Dài Lạnh Lùng Chưa Tan𓇻 Anh Nhớ Em Khi Em Ôm Chầm Vào Lòng Anh Khóc Oà𓃰 Anh Nhớ Em Khi Trên Vai Mình Còn Nhiều Âu Lo𓄀 Anh Nhớ Em Khi Trăng Vừa Lên Ban Đêm Dài Hơn Ban Ngàу𓅥",

"𓂄𓆩𑁍𓆪𓂁 Vòng Tay Anh Áp Ôm Em Ngày Xưa Đã Dành Cho Ai Kia𓅇Môi Trà Hương Em Đê Mê Nhưng Khi Bên Người Anh Cũng Thế𓆉 Đừng Xin Lỗi Với Những Lừa Dối Em Đã Vẫn Rồi𓇻 Mình Không Thể Tiếp Tục Lầm Lỗi𓃰Trở Về Mở Bên Cô Ấy Hãy Xoá Đi Hết Yêu Thương Ngày Nào Ta Bên Nhau𓆏Em Sẽ Thầm Chúc Phúc Cho Anh Sẽ Trọn Vẹn Yêu Thương 𓂄𓆩𑁍𓆪𓂁",

"𓇻𑁍 Nếu Ngày Ấy Anh Ngỏ Lời Thương Và Yêu Đậm Sâu Với Em 𓅶 Em Có Tin Anh Và Nắm Tay Anh 𓃖 Mình Cùng Đi Qua Từng Mùa Đông Rét Buốt 𓆥 Nếu Ngày Ấy A Là Chàng Trai 𓄚 Mà Em Ngày Đêm Ước Ao 𓆲 Dẫu Nắng Hay Mưa Dù Có Ra Sao 𓃲 Thì Giờ Đây Anh Đã Có Câu Chuyện Thật Đẹp 𑁍𓇻",

"𓂄𓆩𑁍𓆪𓂁 Nhưng Vẫn Còn Đâu Đó Ở Vùng Ngoại Ô Những Chiếc Xe Tank Đầy Máu Chảy 𓆤 Sài Gòn Ngày Xưa Chiều Thu Tím Biếc Nhẹ Đưa Tà Áo Gái Gia Long Hò Hẹn Nơi Góc Quán Nhỏ Sau Giờ Tan Học Đó Là Điều Mà Ta Mong 𖣔 Sài Gòn Ngày Xưa Ví Mặt Em Đẹp 𖣘 Như Hòn Ngọc Của Đông Dương 𓅄 Rồi Chàng Nghệ Sĩ Hoài Mơ Trong Đó Tạm Quen Chuỗi Ngày Dài Phong Sương 𓂄𓆩𑁍𓆪𓂁 𓆤",

"𓂄𓆩𑁍𓆪𓂁Baby Can You Kiss Me𑁍Ở Sâu Trong Tâm Trí𓆡Bàn Tay Em Sát Bên Anh𓆉Anh Có Thể Được Nắm Chặt Lấy𓆏Nếu Đây Là Giấc Mơ Thì Hãy Để Anh Chìm Thật Sâu𓅓Anh Không Muốn Thức Dậy Để Lỡ Vụt Mất Em Nữa Đâu𓆣Nếu Em Có Giống Anh Thì Hãy Đưa Tay Chạm Vào Nhau𓆤Vì Anh Tin Phép Nhiệm Màu Sẽ Biến Thành Sự Thật 𓅥Www.Defloration.Biz𓇼",

"𓂄𓆩𑁍𓆪𓂁Anh Cũng Chỉ Muốn Ở Bên Em Vào Tối Nay Dù Người Ở Đâu Thì Anh Vẫn Chờ Giá Như Cơn Giông Kia Cuốn Trôi Em Đến Đây Dù Là Điều Này Xuất Hiện Ở Trong Mơ Anh Cũng Chỉ Muốn Trao Cho Em Cái Nắm Tay Đắm Say Vào Tối Nay 𑁍 I’m Falling Down You Break My Soul 𓆤 Em Đã Dịu Dàng Còn Hay Nở Nụ Cười Đó Là Lần Đầu Mà Anh Đắm Say Một Người Ánh Mắt Tựa Ngàn Vì Sao Sáng Trên Bầu Trời𒅒",

"𓂄𓆩𑁍𓆪𓂁Mà Vì Lòng Thương Lắm Ngậm Ngùi𓃠 Mình Tôi Gánh Phiền Lo𓃹 Thương Chẳng Thể Buông𓃢 Em Có Đâu Ngờ𓆉 Trên Khoé Miệng Cười Tôi Khóc Trong Tim𓅃 Em Ở Cạnh Người Môi Mắt Em Vui𓅨 Thôi Chắc Đành Vậy Cạnh Tôi Thấy Em Buồn𓃮 Tôi Chẳng Đành Lòng Nhìn Đôi Mắt Em Sầu𓃓 Thương Lắm Rồi Giờ Đành Buông Để Người Đi𓃬 Tôi Sầu 𓂄𓆩𑁍𓆪𓂁",

"𓂄𓆩𑁍𓆪𓂁Anh Thường Hay Vẫn Nằm Mơ Về Một Ngôi Nhà𓅇Ở Một Nơi Chỉ Có Đôi Ta𓃰Nơi Đã Có Anh Và Em Xây Từng Câu Chuyện𓃹Cùng Sẻ Chia Về Những Ước Mơ𖣘Trên Trời Cao Muôn Vì Sao Soi Từng Con Đường𓃟Hoà Làn Mây Cùng Gió Đến Đây𓅭Em Đã Nói Sẽ Ở Bên Anh Thật Lâu Và𓅋Chẳng Thể Quên Được Những Vấn Vươngマ 𓂄𓆩𑁍𓆪𓂁",

"𓂄𓆩𑁍𓆪𓂁 Bên Nhau Cả Quãng Đường Dài 𓆉 Mà Giờ Em Nói Em Muốn Dừng Lại 𖣘 Anh Phải Làm Gì Để Em Đừng Nghĩ Em Không Quan Trọng 𓅋 Nuốt Hết Đắng Cay Vào Trong Lòng 𖤍 Cuộc Đời Anh Như Con Số Không 𓆣 Cha Mẹ Già Vất Vả Đêm Ngủ Chẳng Ngon 𓅃 Phận Làm Con Anh Đây Chữ Hiếu Chưa Tròn 𖠌 Anh Phải Bù Đắp Cho Em Bao Nhiêu 𓆤 Để Em Chẳng Còn Thấy Thiếu 𓂄𓆩𑁍𓆪𓂁",

"𓆦Em Giờ Đang Nơi Đâu𓉈Có Nhớ Đến Anh Phút Chốc Cô Đơn Tìm Lại Kí Ức Năm Tháng Bên Nhau Mà Ta Đã Đắm Say𓅀Bao Hạt Mưa Bên Nhiên Làm Giọt Lệ Rơi Mãi Mãi Không Ngưng𓀊Tình Người Tan Phái Như Điếu Thuốc Trên Môi Mà Anh Đâu Có Hay𓆏Người Vọi Quay Bước Đi Chẳng Để Lại Câu Chi Anh Nếu Em Về Bên Anh𓆉Nhưng Trái Ngang Vỡ Tan Vỡ Tan Thật Ròi Giấc Mọng Hạnh PhúcEm Cũng Đã Mang Về Nơi Xa Kia𓅷",

"𓆩𓂄𑁍𓂁𓆪 Cẩn Chào Các Con Vợ Và Mấy Thằng Cu Tao Là Trùm Trong Làng Rename Facebook Với Pháp Danh Vua Mõm Tiktok Cụ Tổ Bảo Kê Phây Búc Mấy Thằng Nhóc Lóc Chóc Chơi Phây Búc Phải Hỏi Ý Kiến Của Tao Bần Tăng Chưa Ngán Ai Bao Giờ Đụng Là Chơi Đến Là Chém 𓂄𓆩𑁍𓆪𓂁",

"𖣘 𒅒 𓂄𓆩𑁍𓆪𓂁 Ngoài Đường Đông Vui Tràn Ngập Bao Tiếng Ca 𓅙 Xuân Năm Naу Đã Đến Rồi Em Ơi 𓆡 Người Người Bên Nhau Tạm Biệt Năm Cũ Qua 𓃟 Xuân Yên Vui Về Khắp Bên Mọi Nhà 𓇼 Xuân Năm Naу Đến 𓅋 Bao Nhiêu Câu Chúc 𓆤 Chúc Gia Đình Nhà Nhà Luôn Hạnh Phúc 𓅃 Hoa Mai Đua Sắc 𓅮 Cùng Rạo Rực Đón Xuân 𒅒 Hу Vọng Một Năm Mới Luôn Bình An 𓂄𓆩𑁍𓆪𓂁",

"Rót 𓆏 Cho Ta Say Chén Men Tình Sầu 𓃰 Bởi Ngày Mai Thức Giấc Thì Liệu Ta Còn Cơ Hội Nhìn Nhau 𓆈 Người Rời Đi Khi Ta Mộng Tưởng Rằng Chuyện Đôi Mình Sẽ Chẳng Ly Tan 𓃖 Rồi Bỏ Ta Lại Giữa Khoảng Trời Rộng Gom Góp Kỉ Niệm Chôn Vào Dĩ Vãng 𓃶 Anh Đào Rơi Trong Gió 𓆤 Xuân Hạ Thu Đông Cũng Đã Mấy Lần 𓆉 Người Gieo Bao Thương Nhớ 𓃟 Lại Khiến Ta Đau Thấu Tận Đáy Lòng 𓃯",

"𓂄𓆩𑁍𓆪𓂁 Nhắm Đôi Mắt Lại Em Đã Thấy Gì 𓃰 Anh Ko Nghĩ Là Tụi Mình Cũng Chỉ Đáy Thì 𓆉 Ờ Người Ấy Là Vài Tờ Giấy Màu 𓅂 Chẳng Nhìn Đến Nhau Cũng Là Vì Người Đến Sau 𓃵 Anh Không Phải Là Người Tồi Tệ 𓆈 Không Phải Chỉ Đến Bên Em Anh Không Thích Xem Ai Nô Lệ 𓃟 Bộ Phim Mà Em Đang Đóng Nó Cũng Chỉ Là Tạm Thời 𓆦 Em Kể Ra Những Lí Do Anh Im Lặng Như Cạn Lời 𓂄𓆩𑁍𓆪𓂁",

"𓂄𓆩𑁍𓆪𓂁 Quá Khứ Ta Đã Không Thể Bên Nhau 𓄁 Anh Sẽ Ở Đây Và Vì Em Một Lần Nữa 𓇽 Nắm Lấy Đôi Tay Và Bước Qua Những Thương Đau 𓆉 Hãy Cho Anh Cơ Hội Để Sau Này Mình Cùng Sửa 𓅨 Anh Dám Chắc Đây Không Phải Là Nhất Thời 𓆣 Lời Từ Tâm Và Con Tim Mình Muốn Nói 𓆏 Khi Đã Thương Thì Phải Thương Đến Hết Đời 𓃒 Vì Đây Là Chân Thành Của Gã Say Được Chấp Nối 𓇻𑁍",

"𖤓 Baby Em Là Aii 𓉣 Cho Anh Quên Ngày Mai 𓅨 Nếu Yêu Em Là Sai 𓅋 Anh Sẽ Chẳng Còn Tin Vào Ai 𒈒 Tim Anh Overdose 𓅽 Do Yêu Em Đậm Sâu 𓆩𑁍𓆪 Cho Anh Bên Cạnh Em 𓅂 Yêu Em Như Là Simple Man 𖤐 Sẽ Chẳng Yêu Người Khác Đâu 𓃥 Nếu Như Không Yêu Em Sẽ Chẳng Yêu Người Khác Đâu 𓅋 Ừ Thì Ai Cũng Biết Đau 𓃺 So Sory Baby Nhưng Con Tim Anh Cũng Biết Đau 𖤓",

"𓅄 Dẫu Anh Không Là Chàng Hoàng Tử Mà Em Đắm Say 𓅷 Chỉ Là Giản Đơn Thôi Như Hình Hài Anh Lúc Này 𓃰 Anh Vẫn Muốn Quỳ Gối Trước Nàng Công Chúa Đẹp Nhất Đêm Nay 𖣘 Điều Anh Muốn Là Luôn Thấy Em Cười 𖠃 Chẳng Cần Phải Lo Lắng Vì Anh Ở Đây Rồi 𖣦 Để Anh Che Chở Em Hết Quãng Đường Ngày Sau Nhé 𖣔 Ngày Đầu Tiên Cùng Nhau Sống Suốt Đời 𓅘 Cùng Nhìn Về Phía Trước Cầm Tay Mãi Không Rời",

"Rồi Ai Sẽ Nhớ Ai 𓆣Khi Chẳng Còn Bên Nhau𓀿Để Trái Tim Ai 𓆤Sẽ Càng Thêm Đau𓃠Bao Nhiêu Kỉ Niệm Cứ Thế Qua Mau𓆦 Hay Chỉ Càng Thêm Sâu𓃤 Thời Gian Liệu Có Phai Nhòa Chuyện Tình Đôi Ta𓅂Vì Sao Anh Không Thể Lãng Quên𓆏Yêu Thương Hôm Qua Dù Đã Mãi Mãi 𓆉Muôn Trùng Cách Xa",

"𓂄𓆩𑁍𓆪𓂁 Cùng Anh Băng Qua Bao Đại Dương Cùng Anh Đi Vượt Ngàn Con Đường Phiêu Lãng Như Áng Mây Trời Xanh Ngát Như Giấc Mơ Ta Và Đời Vẫn Thế Vẫn Mãi Trôi Tháng Năm Dài Mình Có Đôi Dù Là Ngày Mưa Hay Nắng Xanh Ngời Vẫn Mong Cùng Người Bước Qua Nắm Tay Em Chặt Hơn Đi Để Chẳng Lạc Mất Nhau Dẫu Mai Về Đâu Nép Sau Lưng Anh Mọi Bộn Bề Mọi Lo Lắng Nhẹ Như Mây Bay 𓂄𓆩𑁍𓆪𓂁",

"𓇻𑁍Em Ơi Đừng Khóc Bóng Tối Trước Mắt Sẽ Bắt Em Đi 𓅃Em Ơi Đừng Lo Em Ơi Đừng Cho Tương Lai Vụt Tắt 𓆉Sâu Trong Màu Mắt Có Chút Tiếc Nuối Phút Cuối Chỉ Vì 𓆤Em Đâu Hề Sai Em Đâu Thể Mãi Để Trái Tim Đau Không Còn Tương Lai Em Cũng Chẳng Còn Thương Ai 𓆫 Sau Bao Niềm Đau Em Mong Rằng Con Tim Em Dừng Lại 𓆢Nỗi Nhớ Này Lâu Phai Nhốt Em Trong Một Lâu Đài Lâu Đài Của Những Cơn Đau Bất Tận𑁍",

"𒈞 Giờ Mình Anh Ơi Ây Ôm Nỗi Nhớ Em Trong Tim Anh Lại Càng Buồn Thêm Suy Nghĩ Anh Sai Vì Sự Thật Em Lừa Dối 𓉣 Tình Yêu Anh Trao Em Đã Quá Ngu Ngơ Sao Chỉ Để Một Mình Anh Nhớ Dẫu Em Có Biết Em Cũng Không Màng Đến 𓅥 Rồi Thời Gian Trôi Đi Lời Hứa Phai Màu Câu Yêu Thương Chẳng Còn Bền Lâu Lúc Ấy Con Tim Của Anh Sẽ Nguôi Lạnh Như Thời Gian Thời Gian Cứ Trôi Đi Mãi Anh Sẽ Không Còn Buồn Đâu 𒈞",

"𓆦 Phải Làm Sao Để Níu Kéo Một Người 𓄃 Đã Cùng Đi Qua Tháng Năm 𓆣 Phải Làm Sao Để Níu Kéo Bạn Đời 𓅄 Người Đã Yêu Cả Trái Tim 𓅔 Bao Nhiêu Chông Gai Cuộc Đời 𓅋 Cùng Đi Qua Bên Nhau 𓅜 Dù Rằng Đã Hứa Sẽ Bên Nhau Mãi Mãi 𓅒 Nhưng Cớ Sao Nay Buông Tay Để Mình Anh Lẻ Loi 𓅇 Trôi Theo Những Tiếc Nuối Muộn Màng 𓅕 Giờ Em Bên Ai Có Yên Vui 𓆤",

"𓂂 𓂃Bỏ Em Vào Balo 𓃟 Đưa Em Ra Khỏi Thủ Đô Mình Cùng Rời Thành Phố 𓅂 Tránh Những Làn Khói Ô Tô Xây Một Căn Nhà Gỗ Ở Mãi Xa Tận Ngoại Ô Vứt Hết Những Bão Tố Giữa Chốn Hà Nội Đông Đúc Xô Bồ 𖣘 Gạt Bỏ Muộn Phiền Đằng Sau Mình Sống Như Là Đen Vâu Về Mình Nuôi Thêm Cá 𓆡 Buồn Quá Mình Trồng Thêm Rau 𑁍 Anh Chẳng Ngại Điều Gì Đâu",

"Tiếc Nuối Ấy Cứ Thế Vẫn Mãi Khắc Sâu Trên Hàng Mi ʕ͜͡ʔ Và Rồi Nhận Ra Yêu Thương Bên Nhau Dần Vỡ Nát ꫞ Giọt Lệ Anh Đã Cố Dấu Bước Tiếp Để Nhìn Em Bước Đi 𒁂Nơi Đó Anh Nhớ Em Nhiều 𒈒Về Bên Anh Gió Lộng Đồi Hoang Ở Bên Anh Yên Giấc Mơ Màng𓇬Ngồi Đây Nghe Tiếng Lòng Thở Than 𖤛 Chờ Mong Ai Hơi Ấm Nhẹ Nhàng 𓈩",

"Và Ta Xin Đánh Đổi Một Rừng Tia Nắng 𓃱 Để Lấy Chút Hơi Ấm Của Em 𖤓 Xin Đổi Đi Hết Tiền Bạc Danh Tiếng 𓂄𓆩𖤓𓆪𓂁 Những Thứ Hàng Trăm Người Thèm 𓃫 Bởi Cả Ngàn Điều Phù Phiếm 𓃬 Đâu Bằng Một Thoáng Môi Mềm 𓃦 Khi Đời Này Sẽ Mang Đầy Nuối Tiếc Nếu Không Có Nàng Ở Bên 𓆈 Nhìn Em Ta Mới Thêm Yêu Từng Khoảnh Khắc 𓆤 Mang Hết Tương Tư Giấu Vào Theo Từng Bản Nhạc 𖤐",

"Dù Sao Thì Anh Vẫn Mong Em Luôn Bình Yên𓃟Và Xin Lỗi Vì Chẳng Đến Chúc Phúc Cho Em𓃹Vì Ngày Hôm Nay Em Cưới Rồi𓆣Vụn Vỡ Vết Thương Đau Mãi Trong Tim𓅗Người Đàn Ông May Mắn Ấy Từ Nay Đã Có Em𓅢Chỉ Muốn Đến Đây Gặp Em Một Lần𑁍Để Thấy Em Hạnh Phúc Thế Nào Rồi Anh Đi𓅨Vì Ngày Hôm Nay Em Cưới Rồi𓅾Mai Sau Anh Sống Thế Nào𓆦Một Người Đã Mang Cả Thế Giới Sánh Đôi Với Tình Yêu Mới",

"𓂄𓆩𑁍𓆪𓂁 Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau 𓃠 Trên Tầng Thượng 𓆤 Phía Bên Kia Dòng Sông 𓃔 Vạn Lời Chúc Ấm Êm Cho Nhau Là 𓆉 Sẽ Thành Đôi Sau Vài Cái Xuân 𓃰 Mong Trời Sẽ Thương Em Thương Anh 𓆏 Và Cho Đôi Mình Mãi Bên Nhau Dài Lâu 𓅕 Cho Dù Thế Gian Kia Cuồng Quay 𓁍 Trăm Bộn Bề Ta Vẫn Không Cách Rời 𓂄𓆩𑁍𓆪𓂁",

"Trái Tim Của Em Rất Đau Chỉ Muốn Buông Tình Ta Ở Đây Vì Cho Đến Giờ Chẳng Có Ai Biết Em Tồn Tại Những Lần Chào Nhau Bối Rối Người Ở Bên Cạnh Anh Chẳng Nghi Ngờ Lòng Em Lại Chẳng Nhẹ Nhàng Lời Biệt Ly Buồn Đến Mấy Cũng Không Thể Nào Làm Cho Em Gục Ngã Đến Mức Tuyệt Vọng Chỉ Là Vết Thương Sâu Một Chút Thôi Anh À Ngày Mà Anh Tìm Đến Em Tin Anh Thật Lòng Và Yêu Em Bằng Những Cảm Xúc",

"𓂄𓆩𑁍𓆪𓂁 Đúng Vậy Em Đẹp Nhất Trên Thế Gian Này Gặp Em Vào Thời Điểm Ảnh Đang Trắng Tay𓅋 Chả Lẻ Chỉ Riêng Ta Không May Mắng Vậy𓅄 Muốn Ôm Chặt Lấy Em Nhưng Tiếc Là Em Không Dang Tay𓃹 Yêu Em Là Trọng Tội Anh Sẵn Sàng Ra Pháp Trường Bài Thánh Ca Không Gọi Tên Anh Trong Lễ Đường Bao Tâm Sự Không Còn Là Lời Rap Thường Hai Đường Thẳng Cắt Nhau Rồi Mãi Rẻ Hướng 𓂄𓆩𑁍𓆪𓂁",

"𓂄𓆩𑁍𓆪𓂁Gió Nhẹ Sang Tôi Ngỡ Trời Xuân 𓅄 Nắng Hừng Lên Tôi Ngỡ Đông Tàn 𓅇 Ai Có Ngờ Đâu Đông Vẫn Còn Đây 𓆉 Xuân Chưa Về 𓅛 Tôi Ngỡ Tình Ta Xanh Ngát Trời Xuân 𓄂 Đâu Biết Ngày Đông Kéo Đến Bất Chợt 𓅋 Yêu Mấy Rồi Nay Cũng Hóa Tàn Phai 𓃭 Theo Người 𓃽 Gió Mang Hương Về Giờ Em Ở Đâu 𓆣 Vương Trên Môi Nụ Hôn Của Ai 𓆤 Để Bây Giờ Tình Ta 𖣘 Sẽ Không Bền Lâu Được Thêm Nữa Đâu 𓂄𓆩𑁍𓆪𓂁",
 ];
  return api.sendMessage(`${data[Math.floor(Math.random() * data.length)]}`, event.threadID, event.messageID);
                  }