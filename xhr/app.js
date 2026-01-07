// const endpoint = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("Get", endpoint);
// xhr.send();

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4) {
//     const data = JSON.parse(xhr.response);

//     const posts = document.getElementById("posts");

//     data.forEach((post) => {
//       posts.innerHTML += `<div class="post">
//         <h2>${post.title}</h2>
//         <p>${post.body}</p>
//         </div>`;
//     });
//   }
// };

// const endpoint = "https://jsonplaceholder.typicode.com/users";
// const xhr = new XMLHttpRequest();
// xhr.open("Get", endpoint);
// xhr.send();

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4) {
//     const data = JSON.parse(xhr.response);

//     const posts = document.getElementById("posts");

//     data.forEach((post) => {
//       posts.innerHTML += `<div class="post">
//         <p>${post.name}</p>
//          <p>${post.username}</p>
//         <p>${post.email}</p>

//         </div>`;
//     });
//   }
// };

// const endpoint = "https://dummyjson.com/products";

// const xhr = new XMLHttpRequest();
// xhr.open("Get", endpoint);
// xhr.send();

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4) {
//     const data = JSON.parse(xhr.response);

//     const posts = document.getElementById("posts");

//     data.products.forEach((post) => {
//       posts.innerHTML += `<div class="post">
//         <p>${post.title}</p>
//         <img src="${post.images}">
//         </div>`;
//     });
//   }
// };
