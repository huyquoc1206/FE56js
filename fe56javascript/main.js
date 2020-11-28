console.log("Hello Cybersoft");

function themNguoiDung() {
    console.log("huyquoc120620 themNguoiDung");
}

/**
 * Biến
 */
//Number String
var username = "Dinh Phuc Nguyen";
var address = "112 Cao Thang";
//Number
var age = 18;
//Boolean
var status = false;
//Null
var numberStudent = null;
//undefined
var people;

var firstName = "Dinh";
var last_Name = "Nguyen";

var lop = "FE56";

// console.log("ten la: " + username);
// console.log("dia chi: " + address);
// console.log("ten la: " + username, "dia chi: " + address);

//Hoisting
console.log("fullname: " + fullName);
var fullName = "Nguyen Van A";

isLogin = true;
console.log("isLogin: ", isLogin);

const PI = 3.14;

/**
 * Câu lệnh điều kiện 
 * == so sánh giá trị
 * === so sánh giá trị & kiểu dữ liệu
 */
if (1 === "1") {
    console.log("DK dung");
} else {
    console.log("DK sai");
}

// DK ? "Dung" : "Sai"
1 === "1" ? console.log("DK dung") : console.log("DK sai")

var btA = true;
var btB = false;
console.log("Ket qua &&:", btA && btB);
console.log("Ket qua ||:", btA || btB);
console.log("Phu dinh cua btA:", !btA);

switch (0) {
    case 0:
        console.log("Day la so 0");
        break;
    case 1:
        console.log("Day la so 1");
        break;
    case 2:
        console.log("Day la so 2");
        break;
    default:
        console.log("Khong xac dinh");
        break;
}

var list = ["Nguyen", "Tay", "Long", "Nam"];

/**
 * Vong lap
 * . 0 < 4
 * . 1 < 4
 * . 2 < 4
 * . 3 < 4
 * . 4 < 4
 */
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}

var number_1 = 10;
var number_2 = 5;
var number_3 = 20;
var number_4 = 7;
var number_5 = 20;
var number_6 = 7;

var total = number_1 + number_2;
console.log("tong la:", total);
var total2 = number_3 + number_4;
console.log("tong la:", total2);
var total3 = number_5 + number_6;

/**
 * Hàm
 *  - Hàm không có tham số
 *  - Hàm có tham số
 *  - Hàm không có giá trị trả về
 *  - Hàm có giá trị trả về
 */
// tinhTong();
// tinhTong34();

// function tinhTong(){
//     var sum = number_1 + number_2;
//     console.log("sum la:", sum);
// }

// function tinhTong34(){
//     var sum = number_3 + number_4;
//     console.log("sum la:", sum);
// }

function tinhTong(a, b) {
    var sum = a + b;
    return sum;
}
// tinhTong(number_1, number_2);
// tinhTong(number_3, number_4);
// tinhTong(number_5, number_6);
// tinhTong(100, 10);

// var total2 = tinhTong(50, 50);
console.log("tong la: ", tinhTong(50, 50) + 100);

/**
 * (Bài tập) Tính điểm trung bình: toan, ly, hoa
 * dtb = (toan + ly + hoa) / 3;
 * Xếp loại:
 *  + 9 <= dtb <= 10 => Xuat sac
 *  + 8 <= dtb < 9 => Gioi
 *  + 7 <= dtb < 8 => Kha
 *  + 5 <= dtb < 7 => TB
 *  + Yeu
 * => tinhDTB(); xepLoai();
 */

function tinhDTB(toan, ly, hoa) {
    return (toan + ly + hoa) / 3;
}

function xepLoai(dtb) {
    var loai = "";
    if (9 <= dtb && dtb <= 10) {
        loai = "Xuat sac";
    } else if (8 <= dtb && dtb < 9) {
        loai = "Gioi";
    } else if (7 <= dtb && dtb < 8) {
        loai = "Kha";
    } else if (5 <= dtb && dtb < 7) {
        loai = "TB";
    } else {
        loai = "Yeu";
    }
    console.log("Loai la: ", loai);
}

var dtb = tinhDTB(9, 9, 9);
xepLoai(dtb);



// DOM 
var txtInput = document.getElementById("txtInput").value;
console.log(txtInput);

var pText = document.getElementById("pText");
console.log(pText.innerHTML);


//  Cách 1
//  function eventClick() {

//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);

//  }

// Cách 2
// document.getElementById("btnClick").onclick = function () {
//     var txtInput = document.getElementById("txtInput").value;
//     console.log(txtInput);
// };

// Cách 3
// document.getElementById("btnClick").addEventListener("click", function () {
//     var txtInput = document.getElementById("txtInput").value;
//     console.log(txtInput);
// });

// Cách 4

function demoClick() {
    var txtInput = document.getElementById("txtInput").value;
    console.log(txtInput);
}

document.getElementById("btnClick").addEventListener("click", demoClick);




document.getElementById("btnNhanEmDi").addEventListener("click", function () {
    document.getElementById("divContent").innerHTML = "mlem mlem!!";
    document.getElementById("divContent").style.backgroundColor = "red";
    document.getElementById("divContent").style.fontSize = "30px";
    document.getElementById("divContent").style.color = "yellow";


})

document.getElementById("btnHide").addEventListener("click", function () {
    document.getElementById("divContent").style.display = "none";


})

document.getElementById("btnShow").addEventListener("click", function () {
    document.getElementById("divContent").style.display = "block";

})

document.getElementById("btnDisable").addEventListener("click", function () {
    document.getElementById("btnNhanEmDi").disabled = true;

})

document.getElementById("btnOpen").addEventListener("click", function () {
    // document.getElementById("btnNhanEmDi").disabled=false;
    document.getElementById("btnNhanEmDi").removeAttribute("disabled");

})

document.getElementById("btnBulbOn").addEventListener("click", function () {
    document.getElementById("imgBulb").src = "./img/pic_bulbon.gif";

})

document.getElementById("btnBulbOff").addEventListener("click", function () {
    document.getElementById("imgBulb").src = "./img/pic_bulboff.gif";

})



document.getElementById("btnLogin").addEventListener("click", function () {
    // Lấy thông tin username password 
    var username = document.getElementById("txtUserName").value;
    var password = document.getElementById("txtPassWord").value;
    console.log(username);
    console.log(password);
    if (username === "cybersoft" && password === "cybersoft") {
        changeColor2("Login Thanh Cong", "alert alert-success");
    } else {
        changeColor2("Login That Bai", "alert alert-danger");
    }
});

function changeColor(mess) {
    document.getElementById("txtThongBao").innerHTML = mess;
    document.getElementById("txtThongBao").style.display = "block";
    document.getElementById("txtThongBao").style.backgroundColor = "bg";
    document.getElementById("txtThongBao").style.color = "white";
}

function changeColor2(mess, classes) {
    document.getElementById("txtThongBao").style.display = "block";
    document.getElementById("txtThongBao").innerHTML = mess;
    document.getElementById("txtThongBao").className = classes;
}

/**
 * DOM ClassName
 */

var _className = document.getElementsByClassName("btn")[0];
console.log(_className);


//  DOM querySelector

var _querySelector = document.querySelector(".container #txtThongBao");
console.log(_querySelector);


// DOM querySelectorAll

var _querySelectorAll = document.querySelectorAll(".container .form-group")[0];
console.log(_querySelectorAll)


document
    .querySelector("#btnTinhTienTip").addEventListener("click", function () {
        var _txtTongTien = document.getElementById("txtTongTien").value;
        var _txtPhanTramTip = document.getElementById("txtPhanTramTip").value;
        var _txtSoNguoi = document.getElementById("txtSoNguoi").value;

        var total = (_txtTongTien * _txtPhanTramTip) / _txtSoNguoi;

        document.getElementById("txtThongBaoTienTip").style.display = "block";

        document.getElementById("txtThongBaoTienTip").className = "alert alert-success";

        document.getElementById("txtThongBaoTienTip").innerHTML = total + "$ moi nguoi ";
    })













