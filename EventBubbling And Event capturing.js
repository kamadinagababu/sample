const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// event bubbling

// grandparent.addEventListener("click", () => {
//   console.log("grandparent");
// });

// parent.addEventListener("click", () => {
//   console.log("parent");
// });
// child.addEventListener("click", () => {
//   console.log("child ");
// });

// event capturing

// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("grandparent");
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   (event) => {
//     console.log("parent");
//   },
//   true
// );
// child.addEventListener(
//   "click",
//   () => {
//     console.log("child ");
//   },
//   true
// );
