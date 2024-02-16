let cart = [];

function addCartStores(index) {
    var hinh = document.getElementsByClassName("item")[index].children[0].src;
    var tensp = document.getElementsByClassName("poster_game_left_infor")[index]
        .children[1].innerHTML;
    var gia = document.getElementsByClassName("poster_game_left_infor")[index]
        .children[2].children[0].innerHTML;

    giohang = JSON.parse(localStorage.getItem("giohang"));

    var isInCart = checkIsInCart(giohang, tensp);

    if (isInCart) {
        // nếu có trong giỏ thì cộng dồn
        for (const item in giohang) {
            if (giohang[item].tenSP == tensp) {
                giohang[item].soLuong++;
                giohang[item].gia = Number(gia) + Number(giohang[item].gia);
                break;
            }
        }
    } else {
        // chưa có thì thêm mới
        var item = {
            hinh: hinh,
            tenSP: tensp,
            gia: gia,
            soLuong: 1,
        };
        giohang.push(item);
    }

    localStorage.setItem("giohang", JSON.stringify(giohang));
    //console.log(giohang)
    getGioHang();
}

function checkIsInCart(giohang, tensp) {
    for (const item in giohang) {
        if (giohang[item].tenSP == tensp) {
            return true;
        }
    }
    return false;
}

