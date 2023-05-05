const themeRadios = document.querySelectorAll("input[name='options']");

themeRadios.forEach(selector => {
  selector.addEventListener("change", () => {
    if (selector.value === "option1") {
      document.body.classList.remove("theme-2");
      document.body.classList.remove("theme-3");
    } else if (selector.value === "option2") {
      document.body.classList.add("theme-2");
      document.body.classList.remove("theme-3");
    } else if (selector.value === "option3") {
      document.body.classList.add("theme-3");
      document.body.classList.remove("theme-2");
    }
  });
});




