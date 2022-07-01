const synth = window.speechSynthesis

let voices = []

const getVoices = () => {
  voices = synth.getVoices()
  console.log(voices)
}

getVoices()
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices
}
