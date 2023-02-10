/**
 * Khối 1 : Input
 *          + soThu1, soThu2,soThu3,soThu4,soThu5
 * 
 * Khối 2 : Các bước xử lý
 *          
 *      B1 : Lấy giá trị từ form khi user click
 * 
 *          + Tạo hàm tính trung bình
 *          + Gán hàm vào sự kiện click của button
 * 
 *      B2 : Trong hàm
 * 
 *          + Lấy giá trị từ form
 *          + Lập công thức tính trung bình
 *              ketQua = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5 ) / 5
 *          + Hiển thị kết quả lên UI
 *          
 * Khối 3 : Output
 *          + ketQua sau khi tính trung bình
 */


var ketQua = 0;

function tinhTrungBinh() {
    var soThu1 = document.getElementById("soThu1").value;
    var soThu2 = document.getElementById("soThu2").value;
    var soThu3 = document.getElementById("soThu3").value;
    var soThu4 = document.getElementById("soThu4").value;
    var soThu5 = document.getElementById("soThu5").value;

    ketQua = (Number(soThu1)+Number(soThu2)+Number(soThu3)+Number(soThu4)+Number(soThu5))/5;
    document.getElementById("txtTrungBinh").innerHTML = "Giá trị trung bình là : " + ketQua; 
}

document.getElementById("btnTinhTB").onclick = tinhTrungBinh;