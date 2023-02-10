/**
 * Khối 1 : Input
 *          + tienUSD
 * 
 * Khối 2 : Các bước xử lý
 *          
 *      B1 : Lấy giá trị từ form khi user click
 * 
 *          + Tạo hàm tính quy đổi ra VND
 *          + Gán hàm vào sự kiện click của button
 * 
 *      B2 : Trong hàm
 * 
 *          + Lấy giá trị từ form
 *          + Lập công thức tính quy đổi ra VND
 *              tienVND = tienUSD * 23500
 *          + Hiển thị kết quả lên UI
 *          
 * Khối 3 : Output
 *          + tienVND
 */

var tienVND = 0 ;

function tinhQuyDoiVND() {
    var tienUSD = document.getElementById("tienUSD").value;
    tienVND = tienUSD * 23500;
    document.getElementById("txtQuyDoi").innerHTML = "Giá tiền sau khi quy đổi từ USD sang VND là : " + tienVND.toLocaleString() + " VND";
}

document.getElementById("btnQuyDoi").onclick = tinhQuyDoiVND;