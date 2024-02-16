const nav = `<div class="menu">
<div class="left">
    <a class="logo" href="./index.html">
        <img src="./image/gamer21.png" alt="">
    </a>
    <ul>
        <li><a href="./index.html">TRANG CHỦ</a></li>
        <li><a href="./pages/stores.html">CỬA HÀNG</a>
            <ul class="sub-menu">
                <li><a href="./pages/stores.html">Hành động</a></li>
                <li><a href="./pages/stores.html">Phiêu Lưu</a></li>
                <li><a href="./pages/stores.html">Kinh Dị</a></li>
                <li><a href="./pages/stores.html">Quản Lý Thời Gian</a></li>
                <li><a href="./pages/stores.html">Giải Đố</a></li>
                <li><a href="./pages/stores.html">Nhập Vai</a></li>
                <li><a href="./pages/stores.html">Bắn Súng</a></li>
                <li><a href="./pages/stores.html">Giả Lập</a></li>
            </ul>
        </li>
        <li><a href="./pages/about.html">GIỚI THIỆU</a></li>
        <li><a href="./pages/support.html">HỖ TRỢ</a></li>
    </ul>
</div>
<div class="right">
    <input type="checkbox" id="searchx" style="display: none;">
    <div class="search">
        <label for="searchx"><ion-icon name="search-outline"></ion-icon></label>
        <input type="text" placeholder="Tìm kiếm" id="ipn_search">
    </div>
    <div class="log" id="loginMenu">
        <a href="./PagesAccount/login.html">Đăng Nhập</a>
        <a href="./PagesAccount/register.html">Đăng Ký</a>
    </div>
    <div class="log" id="profileMenu">
        <a onclick="logout()">Đăng xuất</a>
    </div>
    <div class="cart">
        <a href="#">
            <ion-icon name="cart-outline"></ion-icon>
        </a>
        <div id="cart-shopping" class="cart-shopping">
            <table>
                <tr>
                    <th style="width: 40px;">STT</th>
                    <th style="width: 100px;">Hình Ảnh</th>
                    <th style="width: 210px;">Sản Phẩm</th>
                    <th style="width: 100px;">Đơn giá</th>
                    <th style="width: 100px;">Số lượng</th>
                    <th style="width: 100px;">Thành tiền</th>
                </tr>
                <tbody id="mycart">
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>`

const nav2 = `<div class="menu">
<div class="left">
    <a class="logo" href="../index.html">
        <img src="../image/gamer21.png" alt="">
    </a>
    <ul>
        <li><a href="../index.html">TRANG CHỦ</a></li>
        <li><a href="../pages/stores.html">CỬA HÀNG</a>
            <ul class="sub-menu">
                <li><a href="../pages/stores.html">Hành động</a></li>
                <li><a href="../pages/stores.html">Phiêu Lưu</a></li>
                <li><a href="../pages/stores.html">Kinh Dị</a></li>
                <li><a href="../pages/stores.html">Quản Lý Thời Gian</a></li>
                <li><a href="../pages/stores.html">Giải Đố</a></li>
                <li><a href="../pages/stores.html">Nhập Vai</a></li>
                <li><a href="../pages/stores.html">Bắn Súng</a></li>
                <li><a href="../pages/stores.html">Giả Lập</a></li>
            </ul>
        </li>
        <li><a href="../pages/about.html">GIỚI THIỆU</a></li>
        <li><a href="../pages/support.html">HỖ TRỢ</a></li>
    </ul>
</div>
<div class="right">
    <input type="checkbox" id="searchx" style="display: none;">
    <div class="search">
        <label for="searchx"><ion-icon name="search-outline"></ion-icon></label>
        <input type="text" placeholder="Tìm kiếm" id="ipn_search">
    </div>
    <div class="log" id="loginMenu">
        <a href="../PagesAccount/login.html">Đăng Nhập</a>
        <a href="../PagesAccount/register.html">Đăng Ký</a>
    </div>
    <div class="log" id="profileMenu">
        <a onclick="logout()">Đăng xuất</a>
    </div>
    <div class="cart">
        <a href="#">
            <ion-icon name="cart-outline"></ion-icon>
        </a>
        <div id="cart-shopping" class="cart-shopping">
            <table>
                <tr>
                    <th style="width: 40px;">STT</th>
                    <th style="width: 100px;">Hình Ảnh</th>
                    <th style="width: 210px;">Sản Phẩm</th>
                    <th style="width: 100px;">Đơn giá</th>
                    <th style="width: 100px;">Số lượng</th>
                    <th style="width: 100px;">Thành tiền</th>
                </tr>
                <tbody id="mycart">
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>`


let navbar = document.querySelector(".navbar-ss");

if (window.location.pathname.split('/')[1] == 'pages') {

    navbar.innerHTML = nav2
}
else {
    navbar.innerHTML = nav

}



//đặt biến isLogin = true nếu đã đăng nhập
let isLogin = Boolean(localStorage.getItem("isLogin"));
// nếu login true thì hiện menu profile và ẩn menu login
if (isLogin) {
    //.remove() xóa menu
    document.querySelector("#loginMenu").remove();
}
else {
    document.querySelector("#profileMenu").style.display = 'none';
    // style.display = 'none' ẩn menu
    // style.display = 'block' hiện menu
}
//hàm logout
const logout = () => {
    // .clear để xóa localStorage
    localStorage.clear();
    // .reload để tải lại trang
    window.location.reload();
}