// 1.İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. Bu rəqəmi üçrəqəmli olana qədər, 7 artırın. Son dəyəri konsola çıxarın.
// let n = +prompt("2 reqemli eded daxil:");

// while (n < 100) {
//   n += 7;
// }
// console.log(n);

// 2.Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.

// let n=+prompt("eded daxil edin:");
// let mesaj="«I know how to use cycles \n";
// console.log(mesaj.repeat(n))

// 3.İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin. Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,
// let Ad_Soyad=prompt("Adinizi ve soyadiniz daxil edin:");
// console.log(Ad_Soyad);
// new_name=Ad_Soyad.split(" ");
// console.log(new_name[1]+ " "+new_name[0]);

// 4.Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın. Telefon nömrəsi 11 rəqəmdən ibarət olduqda və 7 ilə başladıqda, funksiya true qaytarır.

// const ısvalidnumber = (phone_number) => {
//   let mesaj = "fasle";
//   if (phone_number.length === 11 && +phone_number[0] === 7) {
//     mesaj = true;
//   }
//   return mesaj;
// };

// phone_number = prompt("telefon nomresini daxil edin:");
// const y = ısvalidnumber(phone_number);
// console.log(y);

// 5.Funksiya yazın.Arqument olaraq aldığı sözün içərisində rəqəmləri seçsin və geri qaytarsın.
// Məsələn: "hell5o wor6ld" -> 56
// getNumberFromString(number)
// const getNumberFromString = (number) => {
//   for (let i = 0; i < number.length; i++) {
//     if (!isNaN(number[i])) {
//       mesaj += number[i];
//     }
//   }
//   return mesaj;
// };
// let mesaj = "";
// const number = prompt("soz ve reqem daxil edin:");
// const y = getNumberFromString(number);
// console.log(y);

// 6.Remove all exclamation
// Funksiya yazın.Arqument olaraq string alsın,sözün içərisindəki bütün nida işarələrini silsin və sözün sonuna bir ədəd nida işarəsi əlavə etsin.
// məsələn:
// He!llo! !!FE-25 // netice olmalıdır Hello FE-25!

// const Removeallexclamation = (mesaj) => {
//   let new_mesaj = mesaj.replaceAll("!", "") + "!";
//   return new_mesaj;
// };
// let mesaj = prompt("! isaresi olan ifade daxil edin");
// const y = Removeallexclamation(mesaj);
// console.log(y);

// 7.Funksiya yazın,qəbul etdiyi parametrin baş hərfini böyütsün və ekarana yazdırsın
// const uppercase_of_first_letter=()=>{
// return mesaj[0].toUpperCase()+mesaj.slice(1);
// }
// let mesaj=prompt("mesaj daxil edin:")
// const y = uppercase_of_first_letter(mesaj);
// console.log(y);

// 8.Funksiya yazın,qəbul etdiyi parametrin bütün hərflərini böyütsün və ekarana yazdırsın
// const uppercase_of_all_letters = (mesaj) => {
// return mesaj.toUpperCase();
// };
// let mesaj = prompt("mesaj daxil edin:");
// const y = uppercase_of_all_letters(mesaj);
// console.log(y);
// 9.Funksiya yazın,qəbul etdiyi parametrin bütün hərflərini kiçiltsin və ekarana yazdırsın
// const lowercase_of_all_letters = (mesaj) => {
// return mesaj.toLowerCase();
// };
// let mesaj = prompt("mesaj daxil edin:");
// const y = lowercase_of_all_letters(mesaj);
// console.log(y);

// 10.Funksiya yaradin, ilk characterimizi deyisek: ilkHerfiDeyis(soz, ilkHerf)
// ilkHerfiDeyis('Qara', "Y") // Yara

// const ilkHerfiDeyis=(soz, ilkHerf)=>{
// return soz.replace(soz[0],ilkHerf);
// }
// let soz = prompt(" sozu daxil edin:");
// const ilkHerf= prompt("ilk herfi daxil edin")
// const y=ilkHerfiDeyis(soz,ilkHerf);
// console.log(y);

// 11. funksiya yazın ad və soyad alsın və aşağıdakı kimi nəticə versin
// nameFormat(str) —> Ramin Mammadzada-=> M. Ramin
// const nameFormat = (str) => {
//   let info_caught = str.split(" ");
//   let surname =(info_caught[1])[0] + ".";
//   let name = info_caught[0];
//   return surname + " " + name;
// };

// let str = prompt("adinizi  ve soyadinizi daxil edin:");
// const y = nameFormat(str);
// console.log(y);

// 12. verify gmail address. (gmail addressleri sonu @gmail.com ile bitmelidir, abcdf@gmail.com meselen) //true
// const GmailAdressdirmi = (sentence) => {
//   let mesaj = false;
//   let check_gmail = sentence.slice(-10);
//   if (check_gmail === "@gmail.com") {
//     mesaj = true;
//   }
//   return mesaj;
// };
// const sentence = prompt("cumle daxil edin:");
// const y = GmailAdressdirmi(sentence);
// console.log(y);
// 13. Funksiya yazın,aldığı paramterdə bütün hərflər böyükdürsə true deyilsə false qaytarsın
// const ButunHerflerBoyukdurmu = (sentence) => {
//   let mesaj = true;
//   for(let i=0;i<sentence.length;i++){
//     if(sentence[i]!==sentence[i].toUpperCase()){
//         mesaj=false
//     }
//   }
//   return mesaj;
// };
// const sentence = prompt("cumle daxil edin:");
// const y = ButunHerflerBoyukdurmu(sentence);
// console.log(y);
// 14. Funksiya yazın.Cümlə alacaq parametr olaraq.Funksiya isə cümlənin ilk 5 simvolunu geri qaytaracaq
// const ilkBesSimvol = (sentence) => {
//   return sentence.slice(0,6);
// };
// const sentence=prompt("cumle daxil edin:");
// const y = ilkBesSimvol(sentence);
// console.log(y);
// 15. Funksiya yazın.Parametr alsın.Sözün içərisində nəqədər boşluq varsa hamsı - işarəsi olsun
// const replaceSpace=(word)=>{
// return word.replaceAll(" ","-");
// }
// const word=prompt("metn ve ya soz daxil edin");
// const y=replaceSpace(word);
// console.log(y);
