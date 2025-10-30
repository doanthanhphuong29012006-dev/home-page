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
});