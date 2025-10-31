// Chờ cho toàn bộ nội dung HTML được tải xong
document.addEventListener('DOMContentLoaded', () => {

    console.log('Trang chủ đã tải xong!');

    // Lấy tất cả các nút hành động (Like, Comment, Share)
    const actionButtons = document.querySelectorAll('.action_button');

    actionButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Lấy text của nút (Like, Comment, hoặc Share)
            const actionType = button.textContent;
            alert('Bạn vừa nhấn nút ' + actionType + '!');
        });
    });

    // Lấy nút "Tham gia"
    const joinButton = document.querySelector('.join_button');
    if (joinButton) {
        joinButton.addEventListener('click', (e) => {
            // Ngăn sự kiện click lan ra các phần tử cha
            e.stopPropagation(); 
            alert('Chào mừng bạn đã đến với bình nguyên vô tận');
        });
    }
    const postImageUploadInput = document.getElementById('post_image_upload');
    const postPlaceholderText = document.getElementById('post_placeholder_text');
    const postUploadedImage = document.getElementById('post_uploaded_image');
    
    // Thêm sự kiện 'change' cho input file của bài post
    if (postImageUploadInput) { // Đảm bảo phần tử tồn tại
        postImageUploadInput.addEventListener('change', (event) => {
            const file = event.target.files[0]; // Lấy file được chọn

            if (file) {
                const reader = new FileReader(); // Tạo FileReader

                reader.onload = (e) => {
                    const imageUrl = e.target.result;
                    
                    // Ẩn chữ "Image"
                    postPlaceholderText.style.display = 'none';
                    
                    // Hiển thị ảnh đã tải lên
                    postUploadedImage.src = imageUrl;
                    postUploadedImage.style.display = 'block'; 
                };

                reader.readAsDataURL(file); // Đọc file dưới dạng URL dữ liệu
            } else {
                // Nếu người dùng không chọn file hoặc hủy bỏ
                postPlaceholderText.style.display = 'block';
                postUploadedImage.style.display = 'none';
                postUploadedImage.src = ''; // Xóa src ảnh
            }
        });
    }
});
