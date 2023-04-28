const chatbotContainer = document.getElementById("chatbot-container");
const inputBox = document.getElementById("input-box");
const sendBtn = document.getElementById("send-btn");

function addUserMessage(message) {
  const messageElem = document.createElement("div");
  messageElem.classList.add("chatbot-message", "user-message");
  messageElem.textContent = message;
  chatbotContainer.appendChild(messageElem);
}

function addBotMessage(message) {
  const messageElem = document.createElement("div");
  messageElem.classList.add("chatbot-message", "bot-message");
  messageElem.textContent = message;
  chatbotContainer.appendChild(messageElem);
}

sendBtn.addEventListener("click", () => {
    const userMessage = inputBox.value;
    if (userMessage !== "") {
      addUserMessage(userMessage);
      inputBox.value = "";
  
      fetch(`http://127.0.0.1:5000/get?msg=${userMessage}`)
        .then((response) => response.json())
        .then((data) => {
          const botMessage = data.response;
          addBotMessage(botMessage);
        });
    }
  });
  function addUserMessage(message) {
    const messageElem = document.createElement("div");
    messageElem.classList.add("chatbot-message", "user-message");
    messageElem.textContent = message;
    chatbotContainer.appendChild(messageElem);
  
    if (message.toLowerCase() === "hi") {
      // Add response element
      const responseElem = document.createElement("div");
      responseElem.classList.add("chatbot-message", "bot-message");
      responseElem.textContent = "Hello, how can I help you today?";
      chatbotContainer.appendChild(responseElem);
  
      // Add options element
      const optionsElem = document.createElement("div");
      optionsElem.classList.add("chatbot-message", "bot-options");
      optionsElem.innerHTML = `
        <button type="button" class="bot-option">Help</button>
        <button type="button" class="bot-option">Contact Us</button>
      `;
      chatbotContainer.appendChild(optionsElem);
    }
  }

  function addBotMessage(message) {
    const messageElem = document.createElement("div");
    messageElem.classList.add("chatbot-message", "bot-message");
    messageElem.textContent = message;
  
    if (message === "help" || message === "contact us") {
      fetch(`http://127.0.0.1:5000/get?msg=${message}`)
        .then((response) => response.json())
        .then((data) => {
          const botMessage = data.response;
          const botMessageElem = document.createElement("div");
          botMessageElem.classList.add("chatbot-message", "bot-message");
          botMessageElem.textContent = botMessage;
          chatbotContainer.appendChild(botMessageElem);
        });
    } else {
      chatbotContainer.appendChild(messageElem);
    }
  }
  
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches("#help-btn")) {
      addBotMessage("help");
    } else if (target.matches("#contact-btn")) {
      addBotMessage("contact us");
    }
  });
  
  