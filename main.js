/* Abrir e fechar o menu*/

const nav = document.querySelector('#header nav')
const alternancia = document.querySelectorAll('nav .alternancia')

for (const elemento of alternancia) {
  elemento.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('div ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Mudar o header da pagina quando der scroll*/
function changeHeaderScroll() {
  const header = document.querySelector('#header')
  const navAltura =
    header.offsetHeight /* offsetHeight vai verificar a altura do header*/

  if (this.window.scrollY >= navAltura) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Botão para voltar ao topo*/
function backToTop() {
  const backToTopButton = document.querySelector(`.back-to-top`)
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  backToTop(), changeHeaderScroll()
})
