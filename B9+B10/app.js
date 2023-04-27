let car1 = "Honda";
let car2 = "Suzuki";
let car3 = "KIA";
let car100 = "Martin";

//  Xin chào bạn, mời bạn trải nghiệm dòng xe "_"
//console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe: ", car1);
//console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe: ", car2);
//console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe: ", car3);
//console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe: ", car100);

// Array: mảng, danh sách
let cars = ["Honda", "Suzuki", "KIA", "Martin"];  //mảng 1 chiều
        //     0        1        2        3
cars.push("Datbike");
cars.push("Ford");
cars.push("Căng Hải");
cars.push("Toyota");
cars.push("Mazda");
cars.push("Mec");
//console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe: ", cars[0]);
//console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe: ", cars[1]);
//console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe: ", cars[2]);
//console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe: ", cars[3]);
console.log("Tổng số xe ở trong xưởng là:", cars.length)
/* 
    - Mảng xe hơi cars [ ]
    - Mỗi phần tử trong mảng (element) sẽ ngăn cách bởi dấu ","
    - index => chỉ số của mảng
            => sẽ bắt đầu từ vị trí thứ 0
    - length => chiều dài của mảng
*/

// Cách duyệt một mảng một chiều
//Car đang có chiều dài là 4: 
// i < 4 => i bé hơn hoặc bằng 3
for(let i = 0; i < cars.length; i++) {
    const car = cars[i];
    console.log("Xin chào bạn, mời bạn trải nghiệm dòng xe: ", cars[i]);
}

console.log("BEFORE POP:Tổng số xe ở trong xưởng là:", cars.length); // 10
console.log("BEFORE POP:Tổng số xe ở trong xưởng là:", cars); // 10

cars.pop();
console.log("AFTER POP:Tổng số xe ở trong xưởng là:", cars.length); 
console.log("AFTER POP:Tổng số xe ở trong xưởng là:", cars); 

const firstArr = [1, 2, 123, 125, 192, 4];
const secondArr = [-19, 2, 4, 6, 1];
const result = firstArr.concat(secondArr);
console.log("First Arr:", firstArr); 
console.log("Second Arr:", secondArr);
console.log("Result array:", result);

// Objects
// Cách truy xuất đến các giá trị
// Cách lặp qua từng thuộc tính
let myCar = {
    name: "Mazda",
    releaseYear: "2018",
    price: 20000,
    color: "black",
};

console.log("Chiếc xe được sản xuất năm:", myCar.releaseYear);
const carName = myCar.name;

// Dynamic key
const key = "price";
console.log(myCar[key]); // 20000

// Lặp qua các thuộc tính của một object
for(let carKey in myCar) {
    const value = myCar[carKey] // mycar["price"]
    console.log(carKey, "-", value);
}

console.log("MyCar trước khi xóa thuộc tính releaseYear:", myCar);
delete myCar.releaseYear;
console.log("MyCar sau khi xóa thuộc tính releaseYear:", myCar);

const additionalCarInformation = {
    quantity: 100,
    maximumSpeed: "300km/h",
}

const fullInFormationCar = Object.assign(myCar, additionalCarInformation);
console.log(fullInFormationCar);

const person = {
    name: "Messi",
    age: 36,
    major: "Cầu thủ bóng đá",
    salary: 7000000,
    favouriteColor: ["red", "yellow", "blue"],
    isHandsome: true,
    //  address: "125 Hai Bà Trưng, quận 1, Hồ Chí Minh"
    address: {
        no: 125,
        street: "Hai Bà Trưng",
        distric: "Quận 1",
        city: {
            cityName: "Hồ Chí Minh",
            cityCode: "00008",
        },
    },
};
console.log(person.address.city.cityName);

if(Boolean(person.isHandsome)) {
    console.log("Bạn đẹp trai nhất đấy, xứng đáng có 10 người yêu");
} else {
    console.log("Bạn hơi hơi đẹp trai");
}

/* 
    1. Thêm phần tử vào đầu/cuối/ một vị trí bất kỳ trong mảng
    2. Xóa phần tử đầu/ cuối/ một vị trí bất kỳ trong mảng
    3. Sắp xếp mảng theo thứ tự tăng dần/ giảm dần
    4. Nối mảng từ 2 hay nhiều mảng
    5. Duyệt mảng
    6. Truy xuất một phần tử bất kỳ trong mảng
    7. Tìm giá trị lớn nhất trong mảng
    8. Tìm giá trị nhỏ nhất trong mảng
*/

// Function
const students = [
    {
        name: "Nguyen Van A",
        gender: "male",
        math: 8,
        english: 7,
        chemistry: 6,
    },
    {
        name: "Nguyen Van B",
        gender: "male",
        math: 10,
        english: 4,
        chemistry: 2,
    },
    {
        name: "Nguyen Van C",
        gender: "male",
        math: 9,
        english: 9,
        chemistry: 9,
    },
];

//const gpa_1 = (student[0].math + student[0].chemistry + student[0].english) / 3;
//const gpa_2 = (student[1].math + student[1].chemistry + student[1].english) / 3;
//const gpa_3 = (student[2].math + student[2].chemistry + student[2].english) / 3;

// Input: diem toan, diem hoa, diem tieng anh
// Output: diem trung binh
// Function => hàm


// Function không có tham số đầu vào
function greeting() {
    console.log("Hello bro, welcome to MindX Technology");    
}

greeting();
greeting();
greeting();

function greetingWithName(name) {
    console.log("Hello " + name + ", welcome to MindX Technology");
}
greetingWithName("Ronaldo");
greetingWithName("Messi");
greetingWithName("M3P");


function calculateScore(math, chemistry, english) {
    const result = (math + chemistry + english) / 3;

    return result;

    console.log("abcsda");
}
const studentAScore = calculateScore(10, 8, 7);
const studentBScore = calculateScore(6, 5, 10);
console.log("Điểm trung bình của HS A là:", studentAScore);
console.log("Điểm trung bình của HS B là:", studentBScore);
if(studentAScore > studentBScore) {
    console.log("Học sinh A học giỏi hơn học sinh B");
} else {
    console.log("Học sinh B học giỏi hơn học sinh A");
}


// Primitive datatype(kiểu dữ liệu nguyên thủy)
// Reference datatype: array, object(kiểu dữ liệu tham chiếu)