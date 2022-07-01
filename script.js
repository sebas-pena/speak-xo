const synth = window.speechSynthesis
const textForm = document.querySelector("#text-input__form")
const textInput = document.querySelector("#text-input")
const voiceOptionsCtn = document.querySelector("#voice-option__ctn")
const pitchInput = document.querySelector("#pitch")
const rateInput = document.querySelector("#rate")

let voices = []
let voiceSelected = null

voiceOptionsCtn.addEventListener("change", (e) => {
	voiceSelected = e.target.value
})

let pitch
pitchInput.addEventListener("change", (e) => {
	pitch = e.target.value
	console.log(pitch)
	console.log(rate)
})
let rate
rateInput.addEventListener("change", (e) => {
	rate = e.target.value
	console.log(rate)
})

const getVoices = () => {
	voices = synth.getVoices()
	voices.forEach((voice, i) => {
		const option = document.createElement("option")
		option.textContent = voice.name
		option.setAttribute("value", i)
		voiceOptionsCtn.appendChild(option)
	})
}

if (synth.onvoiceschanged !== undefined) {
	synth.onvoiceschanged = getVoices
}

textForm.addEventListener("submit", (e) => {
	if (synth.speaking) return
	e.preventDefault()
	const text = textInput.value

	const utterance = new SpeechSynthesisUtterance(text)
	utterance.voice = voices[voiceSelected] || voices[0]
	utterance.pitch = pitch || 1
	utterance.rate = rate || 1

	synth.speak(utterance)
	textInput.value = ""

	const stopMouth = moveMouth()

	utterance.onend = () => {
		stopMouth()
	}
})
