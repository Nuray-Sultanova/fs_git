// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <style>
//       .dark,
//       .dark * {
//         color: white;
//         background-color: black;
//       }
//       .light,
//       .light * {
//         color: black;
//         background-color: white;
//       }
//     </style>
//   </head>
//   <body>
//     <button id="modeBtn">dark</button>
//     <h1>title</h1>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde a quo
//       commodi? Eaque optio animi laborum itaque laboriosam error velit? Porro,
//       similique id aliquam dicta ex mollitia architecto vel delectus.
//     </p>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde a quo
//       commodi? Eaque optio animi laborum itaque laboriosam error velit? Porro,
//       similique id aliquam dicta ex mollitia architecto vel delectus.
//     </p>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde a quo
//       commodi? Eaque optio animi laborum itaque laboriosam error velit? Porro,
//       similique id aliquam dicta ex mollitia architecto vel delectus.
//     </p>
//     <script src="app.js"></script>
//   </body>
// </html>

// const modeBtn = document.getElementById("modeBtn");
// let mode = localStorage.getItem("mode") || "light";

// const showMode = () => {
//   if (localStorage.getItem("mode") === "dark") {
//     document.body.classList.remove("light");
//     document.body.classList.add("dark");
//     modeBtn.innerText = "light";
//   } else {
//     {
//       document.body.classList.remove("dark");
//       document.body.classList.add("light");
//       modeBtn.innerText = "dark";
//     }
//   }
// };
// showMode();

// modeBtn.onclick = () => {
//   if (localStorage.getItem("mode") === "dark") {
//     localStorage.setItem("mode", "light");
//   } else {
//     localStorage.setItem("mode", "dark");
//   }
//   showMode();
// };

// AD,SOYAD,YAS,EMAIL
// SUBMIT DUYMESI

// SUBMIT EDENDEN SONRA LOGIN MENYU SILINECEK, VE ORDA YAZILAN MELUMATLAR OBYEKT KIMI LOCAL STORAGE DE SAXLANILACAQ
// CONST DATA = {
//     NAME:
//     SURNAME
//     EMAIL
//     AGE:
// }

// PENCERE ACILIR ORDA BUTUN MELUMATLAR QEYD EDILIR VE CIXIS ET DUYMESI OLUR
// O DUYMEYE KLIK ETDIKDE LOCALSTORAGEDEN HEMIN MELUMATLAR SILINIR VE YENIDEN LOGIN PAGE ACILIR

function saveData(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
    age: document.getElementById("age").value,
    email: document.getElementById("email").value,
  };

  localStorage.setItem("data", JSON.stringify(data));

  showProfile(data);
}

function showProfile(data) {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("profile").style.display = "block";

  document.getElementById("info").innerHTML = `
    Ad: ${data.name}<br>
    Soyad: ${data.surname}<br>
    Yaş: ${data.age}<br>
    Email: ${data.email}
  `;
}

function logout() {
  localStorage.removeItem("data");

  document.getElementById("profile").style.display = "none";
  document.getElementById("loginForm").style.display = "flex";
  document.getElementById("loginForm").reset();
}
