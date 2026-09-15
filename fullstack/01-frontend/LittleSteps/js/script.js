document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");
  const formMessage = document.querySelector("#formMessage");
  const backToTop = document.querySelector("#backToTop");
  const year = document.querySelector("#year");

  year.textContent = new Date().getFullYear();

  // Máscara simples para telefone
  const telefone = document.querySelector("#telefone");
  telefone.addEventListener("input", (event) => {
    let value = event.target.value.replace(/\D/g, "").slice(0, 11);
    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    }
    event.target.value = value;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    formMessage.textContent = "Mensagem pronta! Em um site publicado, ela será enviada para a equipe.";
    form.reset();
    form.classList.remove("was-validated");
  });

  const toggleBackToTop = () => {
    backToTop.classList.toggle("show", window.scrollY > 500);
  };

  window.addEventListener("scroll", toggleBackToTop);
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Fecha o menu mobile após clicar em um link
  document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.querySelector("#menuPrincipal");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});
