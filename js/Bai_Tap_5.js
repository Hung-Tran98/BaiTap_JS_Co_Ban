/**
 * Khối 1 : Input
 *          + soNguyen
 * 
 * Khối 2 : Các bước xử lý
 *          
 *      B1 : Lấy giá trị từ form khi user click
 * 
 *          + Tạo hàm tính tổng 2 ký số
 *          + Gán hàm vào sự kiện click của button
 * 
 *      B2 : Trong hàm
 * 
 *          + Lấy giá trị từ form
 *          + Lập công thức tính tổng 2 ký số
 *              hangDonVi = soNguyen % 10 
 *               hangChuc = soNguyen / 10
 *               Tong2KySo = hangDonVi + hangChuc
 *          + Hiển thị kết quả lên UI
 *          
 * Khối 3 : Output
 *          + Tong2KySo
 */

var Tong2KySo = 0;
function tinhTongKySo() {
    var soNguyen = document.getElementById("soNguyen").value;
    var hangDonVi = soNguyen % 10;
    var hangChuc = parseInt(soNguyen / 10);
    console.log(hangChuc,hangDonVi);
    Tong2KySo = hangDonVi + hangChuc;
    document.getElementById("txtTong2KySo").innerHTML = "Tổng hai ký số = " + Tong2KySo;
   
}

document.getElementById("btnTinhTong2KySo").onclick = tinhTongKySo;