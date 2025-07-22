function carregar() {
  var msg = document.getElementById("mensagem")
  var img = document.getElementById("imagem")
  var corT = document.getElementById("titulo")
  var corC = document.getElementById("copy")
  var saudar = document.getElementById("comprimento")
  var data = new Date()
  var hora = data.getHours()
  var min = data.getMinutes()
  
  if(min <= 9) {
    msg.innerHTML = `Agora são ${hora}:0${min}`
  } else {
    msg.innerHTML = `Agora são ${hora}:${min}`
  }

  if(hora >= 0 && hora <= 4) {
    img.src = "noite.png"
    document.body.style.background = "#2c3a47"
    corT.style.color = "white"
    corC.style.color = "white"
    saudar.innerHTML = "Vai dormir, já á tarde!"
  } else if(hora > 4 && hora <= 11 ) {
    img.src = "manhã.png"
    document.body.style.background = "#f8edd6"
    saudar.innerHTML = "Bom dia!"
  } else if(hora > 11 && hora <= 17) {
    img.src = "tarde.png"
    document.body.style.background = "#f8edd6"
    saudar.innerHTML = "Boa tarde!"
  } else {
    img.src = "noite.png"
    document.body.style.background = "#2c3a47"
    saudar.innerHTML = "Boa noite!"
    corT.style.color = "white"
    corC.style.color = "white"
  }
}
