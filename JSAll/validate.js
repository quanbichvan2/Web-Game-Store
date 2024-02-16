const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    // Prevent the form from submitting
    event.preventDefault();
    //
    const data = new FormData(event.target);
    // entries trả về 1 cái key mảng nên bên html có key name
    const arr = [...data.entries()];
    const userName = arr[0][1];
    const email = arr[1][1];
    const confirmEmail = arr[2][1];
    const phone = arr[3][1];
    const password = arr[4][1];
    const confirmPassword = arr[5][1];
    const checkBox = document.querySelector('.checkbox').checked;
    // Validate the fields
    let errors = [];

    if (userName.trim() === '') {
        errors.push('tên tài khoản không được để trống');
    }

    if (email.trim() === '') {
        errors.push('Địa chỉ email không được để trống');
    } else if (!isValidEmail(email)) {
        errors.push('Địa chỉ email không hợp lệ');
    } else if (email !== confirmEmail) {
        errors.push('Địa chỉ email không khớp');
    }

    if (phone.trim() === '') {
        errors.push('Số điện thoại không được để trống');
    } else if (!isValidPhone(phone)) {
        errors.push('Số điện thoại không hợp lệ, vui lòng nhập lại từ 10 đến 11 số');
    }

    if (password.trim() === '') {
        errors.push('Mật khẩu không được để trống');
    } else if (password !== confirmPassword) {
        errors.push('Mật khẩu không khớp');
    }

    if (!checkBox) {
        errors.push('Bạn phải đồng ý với các chính sách và nội quy của The Gamers');
    }

    // Show any errors
    if (errors.length > 0) {
        const errorMessage = errors.join('\n');
        alert(errorMessage);
        return;
    }
    // Tạo một object chứa thông tin người dùng
    var user = {
        userName: userName,
        email: email,
        phone: phone,
        password: password
    };

    // form.submit(); cái này ảnh hưởng tới việc lưu user dòng 55
    alert('Đăng ký thành công !');
    // Lưu object vào Local Storage
    localStorage.setItem('user', JSON.stringify(user));

    // If there are no errors, submit the form
    localStorage.setItem("isLogin", true);
    console.log(localStorage.getItem('user'));

    window.location.href = "../index.html"


});

function isValidEmail(email) {
    // Use a regular expression to validate the email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Use a regular expression to validate the phone number
    const phoneRegex = /^[0-9]{10,11}$/;
    return phoneRegex.test(phone);
}


