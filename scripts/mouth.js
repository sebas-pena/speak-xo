const canvas = document.getElementById("mouth")
const ctx = canvas.getContext("2d")
const canvasWidth = canvas.width
const canvasHeight = canvas.height
const middleX = canvasWidth / 2
const middleY = canvas.height / 2
ctx.lineWidth = 3
ctx.strokeStyle = "black"

const moveMouth = () => {
  setInterval(() => {
    const x = Math.random() * 40
    const y = Math.random() * 30
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx.beginPath()
    ctx.moveTo(0, middleY)
    ctx.quadraticCurveTo(middleX - x, middleY - y, canvasWidth, middleY)
    ctx.moveTo(0, middleY)
    ctx.quadraticCurveTo(middleX - x, middleY + y, canvasWidth, middleY)
    ctx.stroke()
  }, 60)
}

moveMouth()
