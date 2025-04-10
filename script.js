document.addEventListener("DOMContentLoaded", function () {
  const btnVoltar1 = document.getElementById("voltar");
  const btnAvancar1 = document.getElementById("avancar");
  const slides = document.querySelectorAll(".partes > div");
  const dots = document.querySelectorAll(".manual_btn");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });

    dots.forEach((dot, i) => {
      dot.style.backgroundColor = i === index ? "#7CCBE0" : "#a3a3a3";
    });
  }

  btnAvancar1.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  btnVoltar1.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
  });

  showSlide(0);

  const btnVoltarComent = document.getElementById("voltar_coment");
  const btnAvancarComent = document.getElementById("avancar_coment");
  const abasComentarios = document.querySelectorAll(".abas > .aba");
  const pageNumber = document.getElementById("pageNumber");
  let currentComentario = 0;

  function showComentario(index) {
    abasComentarios.forEach((aba, i) => {
      aba.style.display = i === index ? "block" : "none";
    });
    pageNumber.textContent = index + 1;
    btnVoltarComent.style.display = index === 0 ? "none" : "inline-flex";
    btnAvancarComent.style.display = index === 2 ? "none" : "inline-flex";
  }

  btnAvancarComent?.addEventListener("click", () => {
    currentComentario = (currentComentario + 1) % abasComentarios.length;
    showComentario(currentComentario);
  });

  btnVoltarComent?.addEventListener("click", () => {
    currentComentario = (currentComentario - 1 + abasComentarios.length) % abasComentarios.length;
    showComentario(currentComentario);
  });

  if (btnVoltarComent && btnAvancarComent) {
    btnVoltarComent.style.borderRadius = "50%";
    btnVoltarComent.style.width = "40px";
    btnVoltarComent.style.height = "40px";
    btnVoltarComent.style.display = "flex";
    btnVoltarComent.style.justifyContent = "center";
    btnVoltarComent.style.alignItems = "center";
    btnVoltarComent.style.backgroundColor = "#7CCBE0";
    btnVoltarComent.style.color = "white";
    btnVoltarComent.style.border = "none";
    btnVoltarComent.style.cursor = "pointer";
    
    btnAvancarComent.style.borderRadius = "50%";
    btnAvancarComent.style.width = "40px";
    btnAvancarComent.style.height = "40px";
    btnAvancarComent.style.display = "flex";
    btnAvancarComent.style.justifyContent = "center";
    btnAvancarComent.style.alignItems = "center";
    btnAvancarComent.style.backgroundColor = "#7CCBE0";
    btnAvancarComent.style.color = "white";
    btnAvancarComent.style.border = "none";
    btnAvancarComent.style.cursor = "pointer";
  }

  showComentario(currentComentario);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });
});