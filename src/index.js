const form = document.querySelector("#form")
form.addEventListener("submit", (event) => {
  event.preventDefault()
  const emailValue = document.querySelector("#email").value
  const passwordValue = document.querySelector("#password").value
  const url = "https://reqres.in/api/register"
  fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      "email": emailValue,
      "password": passwordValue,
    })
  }).then(reponse => reponse.json()).then(data => console.log(data))
})

// // console.log("Hello from src/index.js!");

// // // Select the element
// // // Add event listener with a callback
// // const button = document.querySelector("#click")
// // button.addEventListener("click", (event) => {
// //   event.currentTarget.innerText = "Congratulations"
// //   event.currentTarget.setAttribute("disabled", "")
// // })

// // Create => POST => body {
// //   username: "asd",
// //   password: "asdsad"
// // }


// // Read => GET
// // Update => PATCH
// // Delete => DELETE

// const results = document.querySelector("#results")
// const form = document.querySelector("#search-form")

// const searchMovies = (query) => {
//   const url = `https://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`
//   fetch(url)
//     .then((response) => response.json())
//     .then(data => {
//       data.Search.forEach(movie => {
//         const movieTag =
//         `
//         <li class="list-inline-item">
//           <p>${movie.Title}</p>
//           <img src="${movie.Poster}" />
//         </li>
//         `
//         results.insertAdjacentHTML("afterbegin", movieTag)
//       });
//     })
// }


// form.addEventListener("submit", (event) => {
//   event.preventDefault()
//   const search = document.querySelector("#search-input")
//   results.innerHTML = ""
//   searchMovies(search.value)
// })

// searchMovies("Harry Potter")
