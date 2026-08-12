// ===== Bài 1: Điểm trung bình =====
const diem1 = 8;
const diem2 = 7.5;
const diem3 = 9;
const diemTrungBinh = (diem1 + diem2 + diem3) / 3;
console.log("Điểm trung bình:", diemTrungBinh);


// ===== Bài 2: Chu vi + diện tích hình chữ nhật =====
const rectWidth = 5;
const rectHeight = 10;
const chuVi = (rectWidth + rectHeight) * 2;
const dienTich = rectWidth * rectHeight;
console.log("Chu vi:", chuVi);
console.log("Diện tích:", dienTich);


// ===== Bài 3: Đổi Celsius sang Fahrenheit =====
const celsius = 30;
const fahrenheit = celsius * 9 / 5 + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);


// ===== Bài 4: Tính tiền tip =====
const billAmount = 200000;
const tipPercent = 10;
const tip = billAmount * tipPercent / 100;
const total = billAmount + tip;
console.log("Tiền tip:", tip);
console.log("Tổng cộng:", total);


// ===== Bài 5: Kiểm tra chẵn/lẻ =====
const soCanKiemTra = 7;
const ketQuaChanLe = soCanKiemTra % 2 === 0 ? "chẵn" : "lẻ";
console.log(`Số ${soCanKiemTra} là ${ketQuaChanLe}`);


// ===== Bài 6: Tính BMI =====
const canNang = 60;      // kg
const chieuCao = 1.65;   // m
const bmi = canNang / (chieuCao * chieuCao);
console.log("BMI:", bmi.toFixed(2));
