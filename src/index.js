import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";

import "./index.css";

function close(icon, links) {
  links.classList.remove("max-h-96");
  links.classList.add("max-h-0");
  icon.classList.remove("fa-minus-circle");
  icon.classList.add("fa-plus-circle");
}

function open(icon, links) {
  links.classList.remove("max-h-0");
  links.classList.add("max-h-96");
  icon.classList.remove("fa-plus-circle");
  icon.classList.add("fa-minus-circle");
}

for (element of document.getElementsByClassName("section")) {
  element.addEventListener("click", (e) => {
    const icon = e.currentTarget.getElementsByClassName("expand")[0];
    const links = e.currentTarget.nextElementSibling;

    if (icon.classList.contains("fa-minus-circle")) {
      close(icon, links);
    } else if (icon.classList.contains("fa-plus-circle")) {
      for (element of document.getElementsByClassName("section")) {
        const icon = element.getElementsByClassName("expand")[0];
        const links = element.nextElementSibling;

        if (icon.classList.contains("fa-minus-circle")) {
          close(icon, links);
        }
      }

      open(icon, links);
    }
  });
}
