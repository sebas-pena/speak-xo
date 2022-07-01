const eyes = document.querySelectorAll(".eye > div")

const position = eyes[0].getBoundingClientRect()
document.addEventListener("mousemove", (e) => {
  const x = e.clientX
  const y = e.clientY
  console.clear()
  console.log(position)
  console.log("x", x, "y", y)
})
