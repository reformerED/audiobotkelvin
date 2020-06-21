const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Please, I'm sorry. I am a robot. I do not understand that.";

    if (message.includes('What is your name')) {
      speech.text = "I'm Kelvin. It is a pleasure to make your acquintance.";
    }

    if (message.includes("what's your name")) {
      speech.text = "My name is Kelvin. It is a pleasure to make your acquintance.";
    }

    if (message.includes('how are you')) {
      speech.text = "I am fine, thanks. How are you?";
    }

    if (message.includes('Fine')) {
      speech.text = "Nice to hear that. How can I assist you today?";
    }

    if (message.includes('Weather')) {
      speech.text = "Of course. Where are you currently?";
    }

    if (message.includes('What is a noun')) {
      speech.text = "A noun is a name of a person, animal, place or thing.";
    }

    if (message.includes('Owerri')) {
      speech.text = "It is 18 degrees and sunny.";
    }

    if (message.includes('Hi')) {
      speech.text = "Hi, nice to meet you. How are you today?";
    }

    if (message.includes('Hello')) {
      speech.text = "Hello, nice to meet you. How are you today?";
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener('click', () =>{
  recorder.start();
});