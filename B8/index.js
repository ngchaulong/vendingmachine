const num_1 = 10;
let num_2 = 100;
let PI = 3.14;
PI = 3.14;

/*
Comment
theo
multiple lines
*/
let sum = num_1 + num_2;
console.log(sum);
console.log("PI is:", PI)

const firstname = "Long";
const lastname = "Nguyen";

const anothr_first_name = "Fernando";
const anothr_last_name ="Torres";
console.log(firstname)
console.log(lastname)

const specialNumber = null;
let score;
console.log("specialNumber:", specialNumber);
console.log("score:", score);

console.log("----------Scope---------");
let x = 10;
{
    let y = 15;
    console.log(x);
    console.log(y);
}

console.log(x);


const age = 20;

if(age >=18 ) {
    console.log("Bạn đã đủ tuổi lái xe");
} else {
    console.log("Bạn chưa đủ tuổi lái xe máy");
}
const studentScore = 8.5;
if (studentScore >= 8) {
    console.log("Provip đấy => GIỎI");
}
else if(studentScore >= 6.5){
    console.log("CẤn cải thiện nhiều hơn nữa nha => KHÁ");
}
else if (studentScore >= 5 ) {
    console.log("Hên là vẫn lên lớp đó => TRUNG BÌNH");
}
else {
    console.log("Chia buồn nha => Ở lại lớp");
}
const rating = 5;
switch (rating) {
    case 1:
        console.log("Phim quá dở");
    case 2:
        console.log("Phim dở");
    case 3:
        console.log("phim tạm được");
    case 4:
        console.log("phim hay");
    case 5:
        console.log("phim Siêu cấp vipro");
        break;
       default:
        console.log("Giá trị không hợp lệ");         
}
const month = 3;
const year = 2012;

switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Tháng có 31 ngày");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Tháng này có 30 ngày");
    case 2:
        if ((year & 4 === 0 && year & 100 !== 0)|| year % 400 === 0) {
            console.log("Đây là tháng có 29 ngày");
        } else {
            console.log("Đây là tháng có 28 ngày");
        }                    
        default:
            console.log("Tháng và năm không hợp lệ");
}

for (let i = 0 ; i <= 100 ; i++) {
    console.log(i);
}

let sumFromOneToTen = 0;
for (let i = 1; i <= 10; i++) {
    sumFromOneToTen = sumFromOneToTen + i;
}
console.log("Tổng từ 1 đến 10 là:", sumFromOneToTen);

let sumbogiemanfromonetoten = 0;
for (let i =1; i <= 10; i++){
    if (i % 2 ===0) {
        sumbogiemanfromonetoten = sumbogiemanfromonetoten + i;

    }
}
console.log("Tổng các số chẵn từ 1 đến 10 là",sumbogiemanfromonetoten);