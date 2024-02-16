// Thêm sản phẩm bào giỏ hàng 
let giohang = [];
function addCart() {
    var hinh = document.getElementById('a').src;
    var tensp = document.getElementById('itemName').innerHTML;
    var gia = document.getElementById('itemPrice').innerHTML

    var isInCart = false;
    giohang = JSON.parse(localStorage.getItem("giohang"))
    if (giohang == null) {
        giohang = []
        {
            // khởi tạo object
            var item = {
                hinh: hinh,
                tenSP: tensp,
                gia: gia,
                soLuong: 1
            }
            giohang.push(item);
            localStorage.setItem('giohang', JSON.stringify(giohang));
            getGioHang();
        }
    } else {
        if (!isInCart) {
            giohang.map((p, index) => {
                if (p.tenSP === tensp) {
                    p.soLuong++;
                } else {
                    isInCart = true;
                }
            })
        } else {
            var item = {
                hinh: hinh,
                tenSP: tensp,
                gia: gia,
                soLuong: 1
            }
            giohang.push(item);
        }
        localStorage.setItem('giohang', JSON.stringify(giohang));
        getGioHang();
    }
}




// // Xóa sản phẩm trong giỏ hàng , thêm button vào sau
// function deleteCart(button) {
//     var row = button.parentElement.parentElement;
//     document.getElementById("cart-shopping").removeChild(row);
// }
// Xóa sản phẩm trong giỏ hàng, thêm button vào sau
function deleteCart(button) {
    var row = button.parentElement.parentElement;
    var tensp = row.getElementsByTagName('td')[2].innerHTML;
    for (var i = 0; i < giohang.length; i++) {
        if (tensp == giohang[i][1]) {
            giohang.splice(i, 1); // remove the product from the cart
            break;
        }
    }
    localStorage.setItem('giohang', JSON.stringify({ giohang: giohang }));
    document.getElementById("cart-shopping").removeChild(row);
}


function showHide() {
    var x = document.getElementById('giohang');
    x.style.display = x.style.display == 'block' ? 'none' : 'block';
}