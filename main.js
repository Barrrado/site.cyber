
document.getElementById('menuButton').addEventListener('click', function () {
  // Verifica se a tela tem 640px ou mais
  if (window.matchMedia('(max-width: 640px)').matches) {
    var menu = document.getElementById('Menu1');
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  }
});
// Garante que o menu esteja visível em telas maiores que 640px
window.addEventListener('resize', function () {
  if (!window.matchMedia('(max-width: 641px)').matches) {
    var menu = document.getElementById('Menu1');
    menu.style.display = 'flex'; // Mantém o menu visível em telas maiores
  }
})
window.addEventListener('resize', function () {
  if (!window.matchMedia('(min-width: 641px)').matches) {
    var menu = document.getElementById('Menu1');
    menu.style.display = 'none'; // Mantém o menu visível em telas maiores
  }
})
const gM = document.querySelector(".galeria-modal");
const iGM = document.querySelector(".galeria-modal img");
function fecharGaleria(){
    gM.style.visibility = "hidden";
    iGM.style.transform = "scale(0)";
}

function abrirGaleria(src){
    gM.style.visibility = "visible";
    iGM.style.transform = "scale(1)";
    iGM.src = src
}

// Fechar o modal ao clicar fora da imagem
gM.addEventListener("click", function (event) {
  if (event.target === gM) { // Verifica se o clique foi fora da imagem
      fecharGaleria();
  }
});
//Carrosel
// Inicializar o Swiper ```javascript
document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel");
  let items = carousel.querySelectorAll(".item");
  let dotsContainer = document.querySelector(".dots");

  // Insert dots into the DOM
  items.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".dot");

  // Function to show a specific item
  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove("active");
      dots[idx].classList.remove("active");
      if (idx === index) {
        item.classList.add("active");
        dots[idx].classList.add("active");
      }
    });
  }
  // Function to automatically move to the next item
  function startAutoCarousel() {
    setInterval(() => {
      let index = [...items].findIndex((item) =>
        item.classList.contains("active")
      );
      showItem((index + 1) % items.length);
    }, 3000); // Altere o intervalo de tempo (em milissegundos) conforme necessário
  }

  // Event listeners for buttons
  document.querySelector(".prev").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index - 1 + items.length) % items.length);
  });

  document.querySelector(".next").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index + 1) % items.length);
  });

  // Event listeners for dots
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let index = parseInt(dot.dataset.index);
      showItem(index);
    });
  });
    // Start the automatic carousel
    startAutoCarousel();
  });
