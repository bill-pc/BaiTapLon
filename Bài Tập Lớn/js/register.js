// Lấy ra elements của trang
const formRegister = document.getElementById("formRegister");
const userNameElement = document.getElementById("userName");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const addressElement = document.getElementById("address");

// element có thể có lỗi
const userNameError = document.getElementById("userNameError")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")


//lấy dữ liệu từ localStorage
const userLocal = JSON.parse(localStorage.getItem("users")) || [];

//kiểm tra định dạng Họ tên 
function validateFullName(userName) {
    return String(userName)
        .match(/^([A-Z]{1}[a-z]+)(\s[A-Z]{1}[a-z]*)+$/); // nhập họ tên không có dấu 
};




//kiểm tra định dạng email
function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

//Lắng nghe sự kiện submit form đăng ký tài khoản 
formRegister.addEventListener("submit", function(e) {
    //ngăn chặn sự kiện load lại trang
    e.preventDefault();
    let isValid = true;
    // kiểm tra dữ liệu đầu vào
    if (!userNameElement.value) {
        //thông báo lỗi
        userNameError.style.display = "block";
        isValid = false;
    } else {
        //ẩn lỗi
        userNameError.style.display = "none";
        //kiểm tra định dạng Họ tên
        if (!validateFullName(userNameElement.value)) {
            userNameError.style.display = "block";
            //hiển thị lỗi định dạng
            userNameError.innerHTML = "Họ tên tối thiểu 2 từ và Chữ cái đầu của mỗi từ phải viết hoa, họ tên phải không dấu - Không chứa số và kí tự đặc biệt!";
            isValid = false;
        }
    }

    // kiểm tra dữ liệu đầu vào
    if (!emailElement.value) {
        //thông báo lỗi
        emailError.style.display = "block";
        isValid = false;
    } else {
        //ẩn lỗi
        emailError.style.display = "none";
        //kiểm tra định dạng email
        if (!validateEmail(emailElement.value)) {
            emailError.style.display = "block";
            //hiển thị lỗi định dạng
            emailError.innerHTML = "Email không đúng định dạng";
            isValid = false;
        }
    }

    // kiểm tra dữ liệu đầu vào
    if (!passwordElement.value) {
        //thông báo lỗi
        passwordError.style.display = "block";
        isValid = false;
    } else {
        //ẩn lỗi
        passwordError.style.display = "none";
    }



    // gửi dữ liệu từ form lên localStorage
    if (
        userNameElement.value &&
        emailElement.value &&
        passwordElement.value &&
        validateFullName(userNameElement.value) &&
        validateEmail(emailElement.value)
    ) {
        //Lấy dữ liệu từ form và gửi thành đối tượng user
        const user = {
            userId: Math.ceil(Math.random() * 100000000),
            userName: userNameElement.value,
            email: emailElement.value,
            password: passwordElement.value,
            address: addressElement.value,
        };

        //PUSH user vào trong mảng userlocal
        userLocal.push(user);
        // lưu trữ dữ liệu lên local
        localStorage.setItem("users", JSON.stringify(userLocal));

        // Nếu tất cả các trường hợp hợp lệ, thông báo thành công và chuyển hướng
        if (isValid) {
            // Thông báo thành công
            alert("Đăng ký thành công!");

            // Chuyển hướng sang trang login (có thể thay đổi đường dẫn theo yêu cầu)

            window.location.href = "login.html"; // Đảm bảo trang login.html tồn tại trong dự án của bạn


        }
    }


});