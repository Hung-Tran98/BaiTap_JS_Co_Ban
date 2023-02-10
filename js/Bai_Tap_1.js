/**
 * Khối 1 : Input
 *          + luongNgay, soNgayLam
 * 
 * Khối 2 : Các bước xử lý
 *          
 *      B1 : Lấy giá trị từ form khi user click
 * 
 *          + Tạo hàm tính tổng lương
 *          + Gán hàm vào sự kiện click của button
 * 
 *      B2 : Trong hàm
 * 
 *          + Lấy giá trị từ form
 *          + Lập công thức tính lương
 *              tongLuong = luongNgay * soNgayLam
 *          + Hiển thị kết quả lên UI
 *          
 * Khối 3 : Output
 *          + tongLuong
 */
var tongLuong = 0;

function tinhTongLuong() {
    var luongNgay = 100000;
    var soNgayLam = document.getElementById("soNgayLam").value;
    tongLuong = luongNgay * soNgayLam;
    document.getElementById("txtTongLuong").innerHTML = "Tổng lương của nhân viên là : " + tongLuong.toLocaleString(); 
}

document.getElementById("btnTongLuong").onclick = tinhTongLuong;