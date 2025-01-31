const userMessage = document.getElementById('user-message');
const botMessage = document.getElementById('bot-message');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const botResponses = {
    'hello': 'Hi! How can I assist you today?',
    'how are you': 'I\'m doing well, thanks for asking!',
    'what is your purpose': 'I\'m here to provide information and answer your questions to the best of my abilities.',
    'default': 'Sorry, I didn\'t understand that. Can you please rephrase your question?'
};

sendButton.addEventListener('click', () => {
    const userText = userInput.value.toLowerCase();
    let botText = '';

    if (userText === '') {
        botText = 'Please enter a message.';
    } else if (botResponses[userText]) {
        botText = botResponses[userText];
    } else {
        botText = botResponses['default'];
    }

    userMessage.innerText = userText;
    botMessage.innerText = botText;
    userInput.value = '';
});
