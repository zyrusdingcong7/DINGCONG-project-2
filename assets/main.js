const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

const newsletter = document.querySelector(".newsletter");
if (newsletter) {
  newsletter.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = newsletter.querySelector("input");
    if (input && input.checkValidity()) {
      const button = newsletter.querySelector("button");
      button.textContent = "✓";
      input.value = "";
      input.placeholder = "You're subscribed!";
    }
  });
}
