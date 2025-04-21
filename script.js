function toggleMode() {
  const body = document.body
  body.classList.toggle("light")
  const img = document.querySelector("#profile img")

  if (body.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Kelvin Medeiros versão light")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Kelvin Medeiros versão dark")
  }
}
