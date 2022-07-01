const eyes = document.querySelectorAll(".eye")

document.addEventListener("mousemove", (e) => {
  eyes.forEach((eye) => {
    const position = eye.getBoundingClientRect()

    const aX = position.left + eye.offsetWidth / 2
    const aY = position.top + eye.offsetHeight / 2

    const bX = e.clientX
    const bY = e.clientY

    const distace = Math.sqrt(Math.pow(bX - aX, 2) + Math.pow(bY - aY, 2))

    let r =
      distace < eye.offsetHeight / 2 - 60 ? distace : eye.offsetHeight / 2 - 60

    const theta = Math.atan2(bY - aY, bX - aX)
    const finalX = aY + r * Math.cos(theta)
    const finalY = aX + r * Math.sin(theta)
    const pupil = eye.querySelector("div")
    pupil.style.transform = `translate(${finalX - aY}px, ${finalY - aX}px)`
  })
})
