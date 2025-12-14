// 1. İki array-i birləşdirin və təkrarlanan elementləri silin.
// const user1 = ["Nuray", "Elgun", "Ezize", "Ulvi", "Ziba"];
// const user2 = ["Nuray", "Ezize", "Murad"];
// const user3 = [...user1, ...user2];
// const result = [];
// user3.forEach((user) => {
//   if (!result.includes(user)) {
//     result.push(user);
//   }
// });

// console.log(result);

// 2. İki array-dən yalnız birincidə olan elementləri tapın.
// const user1 = ["Nuray", "Elgun", "Ezize", "Ulvi", "Ziba"];
// const user2 = ["Nuray", "Ezize", "Asiman"];
// const newUsers = user1.filter((user) => !user2.filter(user));

// 3. sortArray() funksiyası yazın (massivi artan sıra ilə sıralayır).
// const numbers = [3, 7, 12, 25, 40, 8, 19];
// const sortArray = (arr) => arr.sort((a, b) => a - b);
// const result = sortArray(numbers);
// console.log(result);

// 4. Massivdəki mənfi ədədləri tapıb qaytaran funksiya yazın, yoxdursa mesaj verin.
// const numbers = [-12, 5, -3, 18, -7, 0, 9, -25, 14];
// const NegativeNumbers = (arr) => {
//   const negatives = arr.filter((n) => n < 0);
//   if (negatives.length > 0) {
//     return negatives;
//   } else {
//     return "menfi eded yoxdur";
//   }
// };
// const result = NegativeNumbers(numbers);
// console.log(result);

// 5. Kebab-case mətni UPPER_CASE formatına çevirən kebabToUpper() funksiyası yazın.
// const kebabToUpper = (text) => text.replaceAll("-", " ").toUpperCase();
// const result = kebabToUpper("kebab-case");
// console.log(result);

// 6. Verilən rəqəmlər massivindən yeni massiv yaradın:
// const numbers = [-12, 5, -3, 18, -7, 0, 9, -25, 14];
// mənfi → müsbət
// müsbət → 2 qat artır
// const numbers = [-12, 5, -3, 18, -7, 0, 9, -25, 14];
// const newArr = (arr) => {
//   return arr.map((n) => (n < 0 ? n * -1 : n * 2));
// };
// const result = newArr(numbers);
// console.log(result);

// 7. Adlar massivindən “A” ilə başlayanları seçən funksiya yazın (tapılmasa mesaj).
// const names = ["Nuray", "Elgun", "Ezize", "Ulvi", "Ziba", "Asim"];
// const names2 = [];
// const beginingofA = (arr) => {
//   const filtered = arr.filter((name) => name[0] === "A");
//   if (filtered.length > 0) {
//     return filtered;
//   } else {
//     return "A ile bashlayan ad yoxdur";
//   }
// };
// const result = beginingofA(names);
// const result2 = beginingofA(names2);
// console.log(result);
// console.log(result2);

// 8. Massivin bütün elementlərini ekrana yazın.
// const myarr = ["Nuray", "Elgun", "Ezize", "Ulvi", "Ziba", "Asim"];
// myarr.forEach((name) => {
//   console.log(name);
// });

// 9. Massivdəki ilk 18-dən böyük olan elementi tapın.
// const nums = [12, 15, 18, 22, 33, 47];
// const newarr = nums.find((n) => n > 18);
// console.log(newarr);

// 10. Yalnız cüt ədədlərdən ibarət yeni massiv yaradın.
// const nums = [12, 15, 18, 22, 33, 47];
// const newarr = nums.filter((n) => n % 2 === 0);
// console.log(newarr);

// 11. Bütün ədədləri 2 ilə vurub yeni massiv yaradın.
// const nums = [12, 15, 18, 22, 33, 47];
// const newarr = nums.map((n) => n * 2);
// console.log(newarr);
// 12. Massivdə 0-dan kiçik element olub-olmadığını yoxlayın.
// const nums = [12, 15, 18, 22, 33, 47, -5];
// const positive = nums.filter((n) => n > 0);
// const negatives = nums.filter((n) => n < 0);
// if (positive.length > 0) {
//   console.log(true);
// } else if (negatives.length > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// console.log(`musbetler: ${positive} `);
// console.log(`menfiler: ${negatives} `);

// funksiya ile
// const musbetofmenifivarmi = (arr) => {
//   const positive = arr.filter((n) => n > 0);
//   const negative = arr.filter((n) => n < 0);
//   if (negative.length > 0 || positive.length > 0) {
//     return true;
//   }
// };
// const result = musbetofmenifivarmi(nums);
// console.log(result);
// 13. Bütün elementlərin müsbət olduğunu yoxlayın.
// const nums = [-47, 0, 7, -3, 25, 30, 20, -11, 9, -6, 14, -8, 19, -2, 21, -15];
// const AllofIspositive = nums.every((n) => n > 0);
// console.log(AllofIspositive);

// 14. Massivi qiymətə görə kiçikdən böyüyə sıralayın.
// const nums = [-47, 0, 7, -3, 25, 30, 20, -11, 9, -6, 14, -8, 19, -2, 21, -15];
// const sorted_arr = nums.sort((a, b) => a - b);
// console.log(sorted_arr);

// 15. Massivi qiymətə görə böyükdən kiçiyə sıralayın.
// const nums = [-47, 0, 7, -3, 25, 30, 20, -11, 9, -6, 14, -8, 19, -2, 21, -15];
// const sorted_arr = nums.sort((a, b) => b - a);
// console.log(sorted_arr);

// 16. Massivdə dəyəri “Admin” olan obyekt olub-olmadığını yoxlayın.
// const arr = [
//   { role: "Admin", age: "25" },
//   { role: "User", age: "20" },
//   { role: "User", age: "21" },
// ];
// const newarr = arr.some((obj) => obj.role === "Admin");
// console.log(newarr);
// 17. age > 25 olan obyektləri götürüb yeni massiv yaradın.
// const arr = [
//   { role: "Admin", age: 25, name: "Nuray", isActive: true, email: "nuray@example.com" },
//   { role: "User", age: 20, name: "Elgun", isActive: false, email: "elgun@example.com" },
//   { role: "User", age: 21, name: "Ezize", isActive: true, email: "ezize@example.com" },
//   { role: "Moderator", age: 30, name: "Ulvi", isActive: true, email: "ulvi@example.com" },
//   { role: "Guest", age: 18, name: "Ziba", isActive: false, email: "ziba@example.com" },
//   { role: "Admin", age: 35, name: "Asiman", isActive: true, email: "asiman@example.com" },
// ];
// const newArr=arr.filter((obj)=>obj.age>25)
// console.log(newArr);

// 18. id = 5 olan obyekti tapın.
// const arr = [
//   { id: 1, role: "Admin", age: 25, name: "Nuray", isActive: true, email: "nuray@example.com" },
//   { id: 2, role: "User", age: 20, name: "Elgun", isActive: false, email: "elgun@example.com" },
//   { id: 3, role: "User", age: 21, name: "Ezize", isActive: true, email: "ezize@example.com" },
//   { id: 4, role: "Moderator", age: 30, name: "Ulvi", isActive: true, email: "ulvi@example.com" },
//   { id: 5, role: "Guest", age: 18, name: "Ziba", isActive: false, email: "ziba@example.com" },
//   { id: 6, role: "Admin", age: 35, name: "Asiman", isActive: true, email: "asiman@example.com" }
// ];
// const newArr=arr.find((obj)=>obj.id===5)
// console.log(newArr);

// 19. Massivin hər elementinin yanına “AZ” sözü əlavə edərək yeni massiv yaradın.
// const words = [
//   "apple",
//   "banana",
//   "orange",
//   "grape",
//   "melon",
//   "peach",
//   "cherry",
//   "mango",
//   "kiwi",
//   "pear",
// ];
// const newWord = words.map((element) => (element[0] = "AZ" + element.slice(0)));
// console.log(newWord);
// 20. Massivdəki ən uzun string dəyərini tapın.
// let sozler = ["alma", "armud", "banan", "portağal", "uzum"];

// let enUzun = sozler[0];

// for (let i = 1; i < sozler.length; i++) {
//   if (sozler[i].length > enUzun.length) {
//     enUzun = sozler[i];
//   }
// }

// console.log(enUzun);

// 21. Bütün adları böyük hərflərə çevirən yeni massiv yaradın.
// const names = [
//   "Nuray",
//   "Elgun",
//   "Ezize",
//   "Ulvi",
//   "Ziba",
//   "Asiman",
//   "Ramin",
//   "Aylin",
//   "Nihat",
//   "Leyla",
// ];
// const new_arr = names.map((n) => n.toUpperCase());
// console, console.log(new_arr);

// 22. Massivdə 100-dən böyük ədəd olub-olmadığını yoxlayın.
// const numbers = [12, -5, 18, 22, 33, -47, 7, -3, 25, -11];
// const arr = numbers.some((n) => n > 100);
// console.log(arr);
// 23. Rolu “user” olan obyektlərdən yeni massiv yaradın.
// const arr = [
//   { id: 1, role: "Admin", age: 25, name: "Nuray", isActive: true, email: "nuray@example.com" },
//   { id: 2, role: "User", age: 20, name: "Elgun", isActive: false, email: "elgun@example.com" },
//   { id: 3, role: "User", age: 21, name: "Ezize", isActive: true, email: "ezize@example.com" },
//   { id: 4, role: "Moderator", age: 30, name: "Ulvi", isActive: true, email: "ulvi@example.com" },
//   { id: 5, role: "Guest", age: 18, name: "Ziba", isActive: false, email: "ziba@example.com" },
//   { id: 6, role: "Admin", age: 35, name: "Asiman", isActive: true, email: "asiman@example.com" }
// ];
// const newArr=arr.filter((obj)=>obj.role==='User')
// console.log(newArr);
// 24. Obyektlərdən ibarət massivdə bütün istifadəçilərin isActive = true olub-olmadığını yoxlayın.
// const arr = [
//   { id: 1, role: "Admin", age: 25, name: "Nuray", isActive: true, email: "nuray@example.com" },
//   { id: 2, role: "User", age: 20, name: "Elgun", isActive: false, email: "elgun@example.com" },
//   { id: 3, role: "User", age: 21, name: "Ezize", isActive: true, email: "ezize@example.com" },
//   { id: 4, role: "Moderator", age: 30, name: "Ulvi", isActive: true, email: "ulvi@example.com" },
//   { id: 5, role: "Guest", age: 18, name: "Ziba", isActive: false, email: "ziba@example.com" },
//   { id: 6, role: "Admin", age: 35, name: "Asiman", isActive: true, email: "asiman@example.com" }
// ];
// const newArr=arr.every((obj)=>obj.isActive===true)
// console.log(newArr);
// 25. Massivi əlifba sırası ilə sıralayın.
// const words = [
//   "apple",
//   "banana",
//   "orange",
//   "grape",
//   "melon",
//   "peach",
//   "cherry",
//   "mango",
//   "kiwi",
//   "pear",
// ];
// const sorted = words.sort((a, b) => a - b);
// console.log(sorted);
// 26. salary ən yüksək olan işçini tapın.
// const employees = [
//   { name: "Nuray", salary: 1200, position: "Developer" },
//   { name: "Elgun", salary: 900, position: "Designer" },
//   { name: "Ezize", salary: 1100, position: "Tester" },
//   { name: "Ulvi", salary: 1500, position: "Team Lead" },
//   { name: "Ziba", salary: 800, position: "Support" },
//   { name: "Asiman", salary: 1300, position: "Backend Developer" },
//   { name: "Ramin", salary: 1000, position: "Frontend Developer" },
// ];

// const sorted_salry_Arr = employees.sort((a, b) => b.salary - a.salary);
// console.log(sorted_salry_Arr);

// 27. Massivin bütün ədədlərinin kvadratını hesablayıb yeni massiv yaradın.
// const numbers = [12, -5, 18, 22, 33, -47, 7, -3, 25, -11];
// const new_Arr = numbers.map((n) => n * 2);
// console.log(new_Arr);
// UserName Tapşırığı (28)
// 28. Bütün istifadəçilərə userName əlavə edin (name + surname + age).
// const users = [
//   { name: "Nuray", surname: "Sultanova", age: 20 },
//   { name: "Elgun", surname: "Mammadov", age: 22 },
//   { name: "Ezize", surname: "Huseynova", age: 20 },
//   { name: "Ulvi", surname: "Aliyev", age: 25 },
//   { name: "Ziba", surname: "Kerimova", age: 18 },
//   { name: "Asiman", surname: "Rustamov", age: 23 },
// ];
// const newarr = users.map((user) => {
//   user.username = user.name + user.surname + user.age;
//   return user;
// });
// console.log(newarr);
// Məs: RaminMammadzada23

// Graded Tapşırıqlar (29–33)
// 29. Üç adlıq massiv yaradın → sonuna yeni ad əlavə edin → ilkini silin → nəticəni çıxarın.
// let myarr = ["nuray", "elgun", "ulvi"];
// myarr.push("xeyale");
// myarr.splice(1, 1);
// console.log(myarr);
// 30. Üç addan ibarət massivdə ikinci elementi “Classified” ilə əvəz edin.
// let myarr = ["nuray", "elgun", "ulvi"];
// myarr.splice(1, 1, "Classificated");
// console.log(myarr);

// 31. Star Wars epizodlarını Episode 4–6 formatında konsola çıxarın.
// const starWars = [
//   "Episode I",
//   "Episode II",
//   "Episode III",
//   "Episode IV",
//   "Episode V",
//   "Episode VI",
//   "Episode VII",
// ];
// console.log(starWars[3], starWars[4], starWars[5]);

// for (let i = 4; i <= 6; i++) {
//   console.log(`episode ${i}`);
// }
// Verilən massivdən istifadə edin.

// 32. İstifadəçidən 5 ədəd alın, massivə yazın və ən kiçiyini tapın.
// let newarr = [];
// for (let i = 1; i <= 5; i++) {
//   newarr.push(+prompt(`${i}-ci ededi daxil edin: `));
// }
// newarr = newarr.sort((a, b) => a - b);
// console.log(newarr);
// console.log(newarr[0]);

// 33. Verilən mətndə vergülləri nöqtəli vergüllə əvəz edin.
// Məs: '32, 31, 34, 36, 31' → '32; 31; 34; 36; 31'
// const words = "32, 31, 34, 36, 31";
// new_Word = words.replaceAll(",", ";");
// console.log(new_Word);

// 34. Boş array yaradın və sonuna 3 element əlavə edin.
// let myarr = [];
// for (let i = 1; i <= 3; i++) {
//   myarr.push(prompt("element daxil edin"));
// }
// console.log(myarr);
// 35. Array-dən son elementi silin və silinən elementi ekrana yazın.
// let myarr = [2, 3, 4, 5, 6];
// const silinen_element = myarr.pop();
// console.log(silinen_element);
// 36. Array-in əvvəlinə iki element əlavə edin.
// let myarr = [2, 3, 4, 5, 6];
// myarr.unshift(1, "salam");
// console.log(myarr);
// 37. Array-in ilk elementini silin və silinən elementi ekrana yazın.
// let myarr = [2, 3, 4, 5, 6];
// const silinen_element = myarr.shift(myarr[0]);
// console.log(silinen_element);
// 38. Adlar massivini vergüllərlə ayrılmış string-ə çevirin.
// const names = ["Nuray", "Ulvi", "Elgun", "Ezize"];
// let string = "";
// for (let i = 0; i < names.length; i++) {
//   string += names[i] + ",";
// }
// console.log(string.slice(0, string.length - 1));

//2ci
// console.log(names.join(","));

// 39. Vergüllə ayrılmış string-i array-ə çevirin.
// const str = "apple,banana,cherry";
// const myarr = str.split(",");
// console.log(myarr);

// 40. Sözlər array-ni boşluq ilə birləşdirərək cümlə yaradın.
// const myarr = ["salam", "necesiniz", "yaxshiaym", "cox", "sagolun"];
// console.log(myarr.join(" "));
// 41. İki ayrı array-i birləşdirin.
// const arr1 = [1, 3, 5, 7, 9];
// const arr2 = ["Nuray", "Ulvi", "Elgun", "Ezize"];
// const new_arr = [...arr1, ...arr2];
// console.log(new_arr);
// 42. Verilən array-dən 2-ci elementdən 4-cü elementə qədər olan hissəni çıxarın.
// const arr1 = [1, 3, 5, 7, 9];
// console.log(arr1.slice(1, 4));
// 43. Xəbər siyahısından yalnız ilk 3 elementi götürün.
// const arr1 = [1, 3, 5, 7, 9];
// console.log(arr1.slice(0, 3));
// 44. Rənglər siyahısından ortadan iki elementi silin.
// let myarr = [1, 2, 3, 4, 5, 6, 7, 9, 10];
// let massivin_uzunlugu = myarr.length;
// myarr.splice(Math.floor(massivin_uzunlugu / 2), 2);
// console.log(myarr);

//------------------------------------------------------------------------------------------------------------------------
// 45. Proqramlaşdırma dilləri siyahısının ortasına yeni element əlavə edin.
// let programmingLanguages = ["c++", "python", "js", "kotlin", "c"];
// let massivin_uzunlugu = programmingLanguages.length;
// console.log(massivin_uzunlugu);
// programmingLanguages.splice(Math.floor(massivin_uzunlugu / 2), 0, "salam");
// console.log(programmingLanguages);

// 46. Rəqəmlərdən ibarət array-i tərsinə çevirin.
// const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// myarr.reverse();
// console.log(myarr);

// 47. Array-də müəyyən elementin olub-olmadığını yoxlayın və mesaj çıxarın.
// const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myarr.includes(20));

// 48. Meyvə string-i array-ə çevirin → tərsinə çevirin → sonuna yeni meyvə əlavə edin → “apple” olub-olmadığını yoxlayın.
// let meyveler = "alma, armud, banan, portağal, üzüm";
// let myarr_meyveler = meyveler.split(",");
// console.log(myarr_meyveler);
// myarr_meyveler.push("kivi");
// console.log(myarr_meyveler);
// console.log(myarr_meyveler.includes("alma"));

// 49. Ad siyahısından ilk iki adı silin və yerinə yenilərini əlavə edin.
// let adlar = ["Nuray", "Aylin", "Elgun", "Ramin", "Ulvi", "Ezize"];
// console.log(adlar);
// adlar.splice(0, 2);
// console.log(adlar);
// adlar.splice(0, 0, "Nergiz", "Nermin");
// console.log(adlar);

// 50. Rəqəmlər massivinin yalnız ortadakı 3 elementi ilə yeni massiv yaradın.
// let regemler = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let ortadaki_Reqem = Math.floor(regemler.length / 2);
// let yeni_reqegemler = regemler.splice(ortadaki_Reqem - 1, 3);
// console.log(yeni_reqegemler);
// 51. Cümləni söz-söz bölün → yenidən birləşdirin → tərsinə çevirin.
// let cumle = "JavaScript öyrənmək maraqlı və faydalıdır.";
// let yeni = cumle.split(" ");
// console.log(yeni);
// let birleshdir = yeni.join(" ");
// console.log(birleshdir.split("").reverse().join(""));

//qeyd:join massivi stringe cevirir
//split -stringi massive cevirir
//splice -silmek ,evez etmek,elave etmek olur
//splice le .splice(0,0,'salam')->elave edir basha
//splice le .splice(1,2)->2cini silir
//splice le .splice(3,1,'salam')->4cunu salamla evez edir

// 52. İki array-i birləşdirin və alınan array-in ilk 4 elementini götürün.

// let ededler = [10, 20, 30, 40, 50];
// let meyveler = ["alma", "armud", "banan", "portağal", "uzum"];

// let yeni_arr = [...ededler, ...meyveler];
// console.log(yeni_arr.slice(0, 4));

// 53. Array-i tam tərsinə çevirin → ilk elementi silin → sonuna yeni element əlavə edin.
// let meyveler = ["alma", "armud", "banan", "portağal", "uzum"];
// console.log(meyveler);
// meyveler.reverse();
// meyveler.shift();
// meyveler.push("salam");
// console.log(meyveler);
