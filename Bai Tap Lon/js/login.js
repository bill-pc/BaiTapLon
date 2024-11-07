// Lấy ra elements của trang
const formLogin = document.getElementById("formLogin");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const alertError = document.getElementById("alertError");
//Lắng nghe sự kiện submit form đăng ký tài khoản 
formLogin.addEventListener("submit", function(e) {
    //ngăn chặn sự kiện load lại trang
    e.preventDefault();
    // kiểm tra dữ liệu đầu vào
    //lấy dữ liệu từ local vèe
    const userLocal = JSON.parse(localStorage.getItem("users")) || [];
    //tim kiếm email và mật khẩu người dùng nhập vào có tồn tại trên local không?
    const findUser = userLocal.find((user) => user.email === emailElement.value && user.password === passwordElement.value);

    if (!findUser) {
        alertError.style.display = "block";
    } else {
        // Lưu thông tin user vào localStorage để sử dụng trong trang user
        localStorage.setItem("currentUser", JSON.stringify(findUser));
        alert("Đăng nhập thành công!");
        window.location.href = "Trang chủ.html";
    }

});