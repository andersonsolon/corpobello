/*  abre e fecha o menu quando clicar no icone: menu e x */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* mudar o header da página quando der scroll */
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add("scroll");
  } else {
    // menor que a altura do header
    header.classList.remove("scroll");
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
);

/* Botão voltar para o topo */
const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll("main section[id]");
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  }
}

/* When Scroll */
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});

/* Dynamic Testimonial Elements */

const fragment = document.createDocumentFragment();
const testimonialElements = [
  {
    id: 1,
    description:
      "excelente clínica com ótimo atendimento, as meninas são bem atenciosas e o preço é bem acessível, eu recomendo",
    name: "Luciane Martins",
  },
  {
    id: 2,
    description:
      "Clínica de estética corporal e facial com ótimos tratamentos e excelente custo benefício.",
    name: "Elisa Lourenço Canal",
  },
  {
    id: 3,
    description: "Melhor clínica de estética da região",
    name: "Kaio Gomes",
  },
  {
    id: 4,
    description:
      "Profissionais super competentes e tratamentos estéticos funcionais!",
    name: "Flavia Perles Costa",
  },
  {
    id: 5,
    description: `Genteee.... Ainda existe essa clínica...rsrsrs... num bom
    sentido. Conheci a muitos anos atrás e frequentei por uns
    dois meses. Fui muito bem atendida, tive ótimos resultados.
    Foi uma experiencia bem agradável na época.`,
    name: "Zelolsan",
  },
  {
    id: 6,
    description: "Eu indico, pessoal excelente, preços ótimos",
    name: "Maria Derani Porto dos Reis",
  },
  {
    id: 7,
    description:
      "Sou suspeita para falar... sou cliente a mais de 20 anos. Ótimo atendimento. AMOOOOOO",
    name: "Simone Batistel",
  },
  {
    id: 8,
    description: "Já frequento a bastante anos excelente atendimento.",
    name: "Leila Ferreira Santos Morais",
  },
];

for (const [index, element] of testimonialElements.entries()) {
  const container = document.createElement("div");
  container.id = element.id;
  container.className = "testimonial swiper-slide";

  const blockquote = document.createElement("blockquote");
  const p = document.createElement("p");
  const span = document.createElement("span");
  const cite = document.createElement("cite");

  span.innerHTML = "&ldquo;";
  p.appendChild(span);
  p.appendChild(document.createTextNode(element.description));

  blockquote.appendChild(p);
  cite.innerHTML = element.name;
  blockquote.appendChild(cite);

  container.appendChild(blockquote);
  container.setAttribute("role", "group");
  container.setAttribute(
    "aria-label",
    `${index + 1} / ${testimonialElements.length}`
  );

  fragment.appendChild(container);
}

document.getElementById("swiper-content").appendChild(fragment);
