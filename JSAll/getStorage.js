
// đoạn này đang ngu vụ session vs đặt biến nên tạm thời hold on
function getGioHang() {

    var giohang = JSON.parse(localStorage.getItem("giohang"));
    let prop = ``;
    giohang.map((item, index) => {
        prop += `<tr>
        <td>${index + 1}</td>
        <td><img height="64" src="${item.hinh}"/></td>
        <td>${item.tenSP}</td>
        <td>${item.gia}</td> 
        <td>${item.soLuong}</td>
        <td>${item.gia * item.soLuong}</td>
        </tr>
        `
    });
    document.getElementById("mycart").innerHTML = prop;
}

getGioHang();
