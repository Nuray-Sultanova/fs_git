// TAPŞIRIQ 1
// let number = 153;

// a) Rəqəmlərinin cəmini tap
// b) Ən böyük və ən kiçik rəqəmi tap
// c) Əgər 3 rəqəmlidirsə → "Normal", əks halda "Uyğun deyil"

// a)

// let number = 153;
// let reqem;
// let cem = 0;
// while (number > 0) {
//   reqem = number % 10;
//   cem += reqem;
//   number = Math.floor((number /= 10));
// }
// console.log(cem);

// b)
// let number = 153;
// let max = 0;
// let min = 9;
// let reqem;
// let eded = number;
// while (eded > 0) {
//   reqem = eded % 10;
//   eded = Math.floor(eded / 10);

//   if (reqem > max) max = reqem;
//   if (reqem < min) min = reqem;
// }

// console.log(number);
// console.log(max);
// console.log(min);

// c)
// let number = +prompt("eded daxil edin:");
// let say = 0;
// let reqem = number;

// while (reqem > 0) {
//   say++;
//   reqem = Math.floor(reqem / 10);
// }

// console.log(say);
// if (say === 3) {
//   console.log("normal");
// } else {
//   console.log("normal deyil");
// }

// ---------------------------------------------------------------------------------------------------------------------------

// TAPŞIRIQ 2
// const text = "JavaScript proqramlaşdırma dili çox maraqlıdır";

// a) Mətndə neçə söz olduğunu tap
// b) Neçə hərf olduğunu tap (boşluqları sayma)
// c) a hərfi neçə dəfə təkrarlanıb
// d) Əgər mətndə "Script" sözü varsa → "Tapıldı" yazdır
// e) Ən uzun sözü tap və ekrana çıxar
// f) İlk və son sözü birləşdirib yeni string yarat

// a)
// const text = "JavaScript proqramlaşdırma dili çox maraqlıdır";
// let myarr = text.split(" ");
// console.log(myarr);
// console.log(myarr.length);

// b)
// let myarr = text.split("");
// console.log(myarr);
// console.log(myarr.length);

// c)
// let myarr = text.split("");
// let say = 0;
// for (let i = 0; i < text.length; i++) {
//   if (text[i].toLocaleLowerCase() == "a") {
//     say++;
//   }
// }
// console.log(say);

// d)
// let myarr = text.split(" ");
// if (text.includes("Script")) {
//   console.log("tapildi");
// } else {
//   console.log("tapilmadi");
// }

// e)
// let myarr = text.split(" ");
// let max = myarr[0].length;
// for (let i = 0; i < myarr.length; i++) {
//   if (max < myarr[i].length) {
//     max = myarr[i];
//   }
// }
// console.log(max);

// f)
// let myarr = text.split(" ");
// let first = myarr[0];
// let last = myarr[myarr.length - 1];
// let mystring = first + " " + last;
// console.log(mystring);

// TAPŞIRIQ 3

// Verilmiş string-in palindrom olub-olmadığını tap
// "level" → true
// "hello" → false

// let word = prompt("soz daxil edin");
// let myarr = word.split("");
// let new_arr = myarr.reverse();
// let new_word = new_arr.join("");
// console.log(word);
// console.log(new_word);
// if ((new_word = word)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// TAPŞIRIQ 4

// String-də neçə sait hərf (a, e, i, o, u) var?

// let word = prompt("soz daxil edin");
// let myarr = word.split("");
// let saitler = ["a", "e", "i", "o", "u", "i"];
// let say = 0;
// for (let i = 0; i < myarr.length; i++) {
//   if (saitler.includes(myarr[i])) {
//     say++;
//   }
// }
// console.log(say);

// TAPŞIRIQ 5

// Bütün sözlərin ilk hərfini böyük et
// "javascript is fun" → "Javascript Is Fun"
// let str = "javascript is fun";
// let myarr = str.split(" ");
// let new_str;
// console.log(myarr);
// for (let i = 0; i < myarr.length; i++) {
//   new_str =
//     myarr[i].slice(0, 1).toLocaleUpperCase() +
//     myarr[i].slice(1, myarr[i].length);
// }
// console.log(new_str);

// TAPŞIRIQ 6

// String-i tərsinə çevir (reverse)

// let word = prompt("soz daxil edin");
// let myarr = word.split("");
// let new_arr = myarr.reverse();
// let new_word = new_arr.join("");
// console.log(word);
// console.log(new_word);

// TAPŞIRIQ 7

// let eded = +prompt("eded daxil edin");
// let isPower = false;

// for (let i = 0; i <= eded; i++) {
//   if (Math.pow(2, i) === eded) {
//     isPower = true;
//     break;
//   }
// }

// console.log(isPower);

// TAPŞIRIQ 11

// const student = {
//   name: "Ramin",
//   surname: "Mammadov",
//   age: 22,
//   scores: [85, 90, 78],
//   isActive: true,
// };

// a. Tələbənin ortalama balını tap
// b. Əgər orta bal >= 80 → "Uğurlu", əks halda "Kafi"
// c. Obyektdə neçə açar (key) var
// d. Obyektdə yalnız number tipli dəyərləri ekrana çıxar
// e. scores array-ində ən yüksək balı tap
// f. Obyektin bütün açarlarını böyük hərflə yeni obyektə köçür
// g. Əgər isActive === true-dirsə → "Aktiv tələbə"
// h. Obyektə yeni property əlavə et: "email"

// a)
// let sum = 0;

// student.scores.forEach((score) => {
//   sum += score;
// });

// let average = sum / student.scores.length;
// console.log("Orta bal:", average);

// // b)
// if (average >= 80) {
//   console.log("Ugrulu");
// } else {
//   console.log("kafi");
// }

// c)
// let arr = [];
// for (let key in student) {
//   arr.push(key);
//   console.log(key);
// }
// console.log(arr.length);

// d)
// for (let key in student) {
//   if (typeof student[key] === "number") {
//     console.log(student[key]);
//   }
// }

// e)
// let max = 0;

// student.scores.forEach((score) => {
//   if (max < score) {
//     max = score;
//   }
// });

// console.log(max);

// f)
// let newStudent = {};

// for (let key in student) {
//   newStudent[key.toUpperCase()] = student[key];
// }

// console.log(newStudent);

// if (student.isActive === true) {
//   console.log("Aktiv tələbə");
// }

// student.email = "ramin@mail.com";
// console.log(student);
