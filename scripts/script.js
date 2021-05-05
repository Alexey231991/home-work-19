const texts = document.querySelector('.texts')
const btn = document.querySelector('.btn')
const messages = document.querySelector('.messages')
const phrases = ['Ну привет!', 'Понятно', 'Интересно...', 'И что было дальше?']

btn.addEventListener('click', async function () {
    
    const inputText = texts.value
    
    if (!inputText) return

    const message = document.createElement('div');
   
    message.classList.add('message');

    message.innerText = inputText

    messages.append(message);

    
    texts.value = '';

    await sleep(randomInteger(1, 3));

    const botMessage = document.createElement('div');
    botMessage.classList.add('message');
    botMessage.classList.add('fromBot');

    if (inputText.includes('Ой, все')) {
        botMessage.innerText = 'Пока!'
        btn.disabled = true
    } else {
        botMessage.innerText = phrases[randomInteger(0, phrases.length - 1)];
    }

    messages.append(botMessage);
})

function sleep(sec) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, sec * 1000)
    })
}


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}