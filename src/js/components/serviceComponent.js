export default function service() {

  const btns = document.querySelectorAll('[data-btn]'),
    content = document.querySelectorAll('[data-content]')

  for (let i = 0; i < btns.length; i++) {
    let xRemplacer = / /gi;
    let nuevoValor = btns[i].dataset.btn.replace(xRemplacer, "");
    let valorBotom = btns[i].firstChild.nodeValue.replace(xRemplacer, "");



    btns[i].addEventListener('click', function(){
      const contenidoListas = document.querySelectorAll(`[data-btn='${btns[i].firstChild.nodeValue}']`)


      if ( valorBotom == nuevoValor ) {
        let valorTarget = document.querySelectorAll(`[data-content="${btns[i].firstChild.nodeValue}"]`)
        if (valorTarget[0].style.display === "none") {
          valorTarget[0].style.display = "block";
          contenidoListas[0].classList.add('arrow-bottom')
          contenidoListas[0].classList.remove('arrow-rigth')
        } else {
          contenidoListas[0].classList.remove('arrow-bottom')
          contenidoListas[0].classList.add('arrow-rigth')
          valorTarget[0].style.display = "none";
        }

        //for (let j = 0; j < content.length; j++) {}
      }
    })
  }
}