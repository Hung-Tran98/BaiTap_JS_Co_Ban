/**
 * Khối 1 : Input
 *          + chieuDai, chieuRong 
 * 
 * Khối 2 : Các bước xử lý
 *          
 *      B1 : Lấy giá trị từ form khi user click
 * 
 *          + Tạo hàm tính chu vi và diện tích
 *          + Gán hàm vào sự kiện click của button
 * 
 *      B2 : Trong hàm
 * 
 *          + Lấy giá trị từ form
 *          + Lập công thức tính chu vi và diện tích
 *              chuVi = (chieuDai + chieuRong)*2
 *                 dienTich = chieuDai * chieuRong
 *          + Hiển thị kết quả lên UI
 *          
 * Khối 3 : Output
 *          + chuVi
 *          + dienTich
 */
var chuVi = 0;
var dienTich = 0;
function tinhChuViDienTich() {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    chuVi = (Number(chieuDai)+Number(chieuRong))*2;
    dienTich = chieuDai*chieuRong;
    document.getElementById("txtChuVi").innerHTML = "Chu vi của hình chữ nhật là : " + chuVi;
    document.getElementById("txtDienTich").innerHTML = "Diện tích của hình chữ nhật là : " + dienTich;
}

document.getElementById("btnTinhCVDT").onclick = tinhChuViDienTich;