import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";

import "./index.css";

const about = document.getElementById("about");
const images = document.getElementsByClassName("image");
const menu = document.getElementById("menu");
const menu_links = document.getElementById("menu_links");
const all_links = document.getElementsByClassName("links");

about.addEventListener("click", (e) => {
  const about = e.currentTarget;
  const icon = about.children[0].children[1];
  const text = about.children[1];
  if (icon.classList.contains("fa-chevron-circle-down")) {
    icon.classList.remove("fa-chevron-circle-down");
    icon.classList.add("fa-chevron-circle-up");
    text.classList.remove("hidden");
  } else {
    icon.classList.add("fa-chevron-circle-down");
    icon.classList.remove("fa-chevron-circle-up");
    text.classList.add("hidden");
  }
});

menu.addEventListener("click", (e) => {
  const menu = e.currentTarget;
  const icon = menu.children[0];
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
    menu_links.classList.remove("hidden");
    menu_links.classList.add("flex");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    menu_links.classList.add("hidden");
    menu_links.classList.remove("flex");
  }
});

for (let i = 0; i < images.length; i++) {
  console.log("hi");
  const image = images[i];
  console.log(image);
  const icon = image.children[3];
  const links = image.nextElementSibling;
  image.addEventListener("click", (e) => {
    console.log("click");
    if (icon.classList.contains("fa-chevron-circle-down")) {
      for (link of all_links) {
        if (link.classList.contains("flex")) {
          link.classList.remove("flex");
          link.classList.add("hidden");
        }
      }
      const up_arrows = document.getElementsByClassName("fa-chevron-circle-up");
      for (arrow of up_arrows) {
        arrow.classList.remove("fa-chevron-circle-up");
        arrow.classList.add("fa-chevron-circle-down");
      }
      icon.classList.remove("fa-chevron-circle-down");
      icon.classList.add("fa-chevron-circle-up");
      links.classList.remove("hidden");
      links.classList.add("flex");
    } else {
      icon.classList.add("fa-chevron-circle-down");
      icon.classList.remove("fa-chevron-circle-up");
      links.classList.add("hidden");
      links.classList.remove("flex");
      for (link of all_links) {
        if (link.classList.contains("flex")) {
          link.classList.remove("flex");
          link.classList.add("hidden");
        }
      }
    }
  });
}

// for (image of images) {
//   image.addEventListener("click", (e) => {
//     console.log("click");
//     const image = e.currentTarget;
//     const icon = image.children[3];
//     const links = image.nextElementSibling;
//     if (icon.classList.contains("fa-chevron-circle-down")) {
//       for (link of all_links) {
//         if (link.classList.contains("flex")) {
//           link.classList.remove("flex");
//           link.classList.add("hidden");
//         }
//       }
//       const up_arrows = document.getElementsByClassName("fa-chevron-circle-up");
//       for (arrow of up_arrows) {
//         arrow.classList.remove("fa-chevron-circle-up");
//         arrow.classList.add("fa-chevron-circle-down");
//       }
//       icon.classList.remove("fa-chevron-circle-down");
//       icon.classList.add("fa-chevron-circle-up");
//       links.classList.remove("hidden");
//       links.classList.add("flex");
//     } else {
//       icon.classList.add("fa-chevron-circle-down");
//       icon.classList.remove("fa-chevron-circle-up");
//       links.classList.add("hidden");
//       links.classList.remove("flex");
//       for (link of all_links) {
//         if (link.classList.contains("flex")) {
//           link.classList.remove("flex");
//           link.classList.add("hidden");
//         }
//       }
//     }
//   });
// }
