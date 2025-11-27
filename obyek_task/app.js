// 1. Car adinda constructor function yaradın, marka,model,year,engine deyə key-ləri olsun.
// Bu constructor vasitəsi ilə 3 fərqli obyekt yaradın
// function Car(marka,model,year,engine){
// this.marka=marka;
// this.model=model;
// this.year=year;
// this.engine=engine;
// }
// const bmw=new Car("BMW","M5",2020,"4.4L V8 Twin-Turbo");
// const Mercedes_Benz=new Car("Mercedes-Benz","C200",2018,"1.5L Turbo");
// const Toyota=new Car("Toyota","Camry",2022,"2.5L Hybrid")
// console.log(bmw);
// console.log(Mercedes_Benz);
// console.log(Toyota);

// 2. size bir obyekt veriləcək.Həmin obyekti referansı ilə birlikdə kopyalayıb ikinci obyektə mənimsədin.İkinci obyektin name xüsusiyyətini,birinci obyektin username xüsusiyyətini dəyişin.Baş verən dəyişikliklər barədə öz fikirlərinizi yazın
// const user1 = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496"
//       }
//     }
// }
// const user2=user1;
// user2.name="nuray";
// user1.surname="sultanov";
// console.log(user2);
// console.log(user1);

//burada user1 deki obyekti refenace ile birlikde kopyaladigimiz ucun ,2ci obyektde eyni refenace'de olur ve netice etibari ile refenceler eyni olduguna gore value ler de eyni olur ,hemcinin 1 ve ya 2 de value lerde deyishiklik etsek her ikisinde eyni deyishlik bash verecekdir;

// 3. Object.assign() metodunu istifadə edin və nə işə yaradığı barədə məlumat yazın
//Object.assign() metodu value ler eyni amma refenace ler ferqli olmasi ucun istifade edilen metoddur.Bu metodda yeni refeance oldugunu bidirmek ucun bos obyek yaradilir ve user  menimsedilir;
//Numune:
// const user1={
// name:"nuray",
// surname:"sultanova",
// age:20,
// country:"Azerabijan"
// };

// const user2=Object.assign({},user1);
// console.log(user1===user2)//burada false qaytaracaq, cunki artiq {} yeni obyekt yaratmishiq sadece deyerleri eynidir ;

// 4. Spread və rest operatorları arasındakı fərqi izah edin.Hər ikisinin istifadəsinə aid nümunələr yaın
// spread - obyektde istifade edilen metoddur,burda obyekti hisselere ayirir parcalayir ve diger obyektin icine melumatlari daxil edir;
// const user1={
//   age:20,
//   surname:"quliyev"
// };

//  user2={...user1};
//  console.log(user1===user2);//false qaytaracaq ,cunki yeni obyekti icinde user1 i daxil etmishik;

// rest - funksiyalar istifade edilen operatordur,array seklinde qayatrir ve coxlu deyereleri bir araya yigmaq ucun istifade edilir;
// const test = (...numbers) => {
//   return numbers;
// };
// const result = test(1, 2, 3, 5, 6, 7, 8, 10, 11, 12);
// console.log(result);

// 5. propertyTaker() adinda funksiya yaradin. Argument kimi obyekt (obj) ve string (proprtyName) alsin. Hemin obyektin verdiyim propertyni ekrana cixarsin. Mes:

// propertyTaker({ continent: 'Asia', country: 'Japan'}, 'continent') // 'Asia'
// propertyTaker({ country: 'Sweden', continent: 'Europe'}, 'country') // 'Sweden'
// propertyTaker({name:'roma', age:12}, 'name') // 'roma'

// const propertyTaker = (obj, propertyName) => {
//   return obj[propertyName];
// };

// const user1 = {
//   continent: prompt("continent daxil edin:"),
//   country: prompt("country daxil edin:"),
// };

// const propertyName = prompt("continent or country");

// console.log(propertyTaker(user1, propertyName));

// 6. Heap və stack haqqında məqalə yazın

// / for(let key in test){
// //   console.log(key);
// // }
// 7. existsAndTruthy() adinda funksiya yaradin. 2 ədəd argument alır: obyekt(obj) ve string (propertyName). Eger hemin obyektden o adda property varsa ve truthy-dirse, true qaytarsin eks halda false qaytarsin. Mes:

// existsAndTruthy({a:1,b:2,c:3},'b') // true
// const existAndTrruthy = (obj, propertyName) => {
//   return obj[propertyName];
// };
// const test = {
//   x: "a",
//   y: null,
//   z: "c",
//   d:0,
//   k:undefined
// };

// const propertyName = "k";

// console.log(existAndTrruthy(test, propertyName));

// const m=Boolean(test[propertyName]);
// console.log(m)
// if(m===true){
//   console.log("thruthy deyerdir");
// }
// else{
//   console.log("falsy deyerdir");
// }
// existsAndTruthy({x:'a',y:null,z:'c'},'y') // false (obyektde 'y' var amma falsy-di ona gore false)
// existsAndTruthy({x:'a',b:'b',z:undefined},'z') // false (obyektde 'z' yoxdu ona gore false)
