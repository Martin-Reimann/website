import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";

import "./index.css";

const about = document.getElementById("about");
const images = document.getElementsByClassName("image");
const menu = document.getElementById("menu");
const menu_links = document.getElementById("menu_links");
const all_links = document.getElementsByClassName("links");
const all_color = document.getElementsByClassName("color");
const all_bw = document.getElementsByClassName("bw");
const all_icons = document.getElementsByClassName("img-icon");

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
  const image = images[i];
  const links = image.nextElementSibling;
  const img_bw = all_bw[i];
  const img_color = all_color[i];
  image.addEventListener("click", (e) => {
    const icon = all_icons[i];
    if (icon.classList.contains("fa-chevron-circle-down")) {
      for (let i = 0; i < all_links.length; i++) {
        const link = all_links[i];
        if (link.classList.contains("flex")) {
          link.classList.remove("flex");
          link.classList.add("hidden");
        }
      }
      for (let i = 0; i < all_color.length; i++) {
        const img_color = all_color[i];
        const img_bw = all_bw[i];
        if (img_color.classList.contains("show")) {
          img_color.classList.remove("show");
          img_color.classList.add("hidden");
          img_bw.classList.remove("hidden");
        }
      }
      for (let i = 0; i < all_icons.length; i++) {
        const icon = all_icons[i];
        if (icon.classList.contains("fa-chevron-circle-up")) {
          icon.classList.add("fa-chevron-circle-down");
          icon.classList.remove("fa-chevron-circle-up");
        }
      }
      icon.classList.remove("fa-chevron-circle-down");
      icon.classList.add("fa-chevron-circle-up");

      links.classList.remove("hidden");
      links.classList.add("flex");
      console.log(img_bw);
      img_bw.classList.add("hidden");
      img_color.classList.remove("hidden");
      img_color.classList.add("show");
    } else {
      icon.classList.add("fa-chevron-circle-down");
      icon.classList.remove("fa-chevron-circle-up");
      links.classList.add("hidden");
      links.classList.remove("flex");
      img_bw.classList.remove("hidden");
      img_color.classList.add("hidden");
      img_color.classList.remove("show");
      for (let i = 0; i < all_links.length; i++) {
        const link = all_links[i];
        if (link.classList.contains("flex")) {
          link.classList.remove("flex");
          link.classList.add("hidden");
        }
      }
    }
  });
}
