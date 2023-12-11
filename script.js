let jokesArray = ["Why was the new IT official hospitalized? He accidentally touched the firewall.",
    " Why are the insurance and premiums for all app developers enormously high? Because they are always crashing down!",
    "There are 10 types of people in the world. Those who understand binary and those who don't.",
    "How did the good teacher teach computer programming to the impatient boy? He taught the kid bit by bit.",
    "Artificial Intelligence usually beats natural stupidity.",
    "Like car accidents, most hardware problems are due to driver error.",
    "I can't uninstall it, there seems to be some kind of 'Uninstall Shield'.",
    "Yo moma is like HTML: Tiny head, huge body.",
    "The more I C, the less I see.",
    "Life would be so much easier if we only had the source code.",
    "My software never has bugs. It just develops random features."];


let quotesArray = [
    { "Bill Gates": "The computer was born to solve problems that did not exist before." },
    { "Ralph Johnson": "Before software should be reusable, it should be usable." },
    { "Jon Franklin": "Simplicity, carried to the extreme, becomes elegance." },
    { "Terry Baker": "“A program is never less than 90% complete, and never more than 95% complete.”" },
    { "Grace Hopper": "Humans are allergic to change. They love to say, ‘We’ve always done it this way.’ I try to fight that. That’s why I have a clock on my wall that runs counterclockwise." },
    { "Albert Einstein": "Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant. Together they are powerful beyond imagination." },
    { "Doug Linder,": "A good programmer is someone who always looks both ways before crossing a one-way street." },
    { "Linus Torvalds": "Most of the good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program." },
    { "Robin Matthews": "Design is where science and art break even." }
];

let riddlesArray = [
    { "A glove.": "What has four fingers and a thumb, but isn't alive?" },
    { "Secret": "If you have me, you will want to share me. If you share me, you will no longer have me. What am I?" },
    { "Coin": "What has a head and a tail, but no body?" },
    { "The letter M": "What comes once in a minute, twice in a moment, but never in a thousand years?" },
    { "A barber": "I shave every day, but my beard stays the same. Who am I?" },
    { "The letter G": "What always ends everything?" },
    { "A coffin.": "The man who invented it doesn’t need it. The man who bought it doesn’t want it. The man who needs it doesn’t know. What is it?" },
    { "A sponge": "What is full of holes but still holds water? " },
    { "Are you asleep yet?": "What question can you never answer yes to?" },
    { "He was bald": "A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?" },
    { "Your shadow": "I follow you all the time and copy your every move, but you can’t touch or catch me. What am I?" }
];


let meme = document.querySelector(".memes");
let joke = document.querySelector(".jokes");
let quote = document.querySelector(".quotes");
let riddle = document.querySelector(".riddle");
let riddleAnswer = document.querySelector(".riddle-answer");
let memeBtn = document.querySelector("#memeId");
let jokeBtn = document.querySelector("#jokeId");
let quoteBtn = document.querySelector("#quoteId");
let riddleBtn = document.querySelector("#riddleId");
let riddleAnswerBtn = document.querySelector(".answer");

let questionState = false, riddleFlag = 0, answerState = false;

memeBtn.addEventListener("click", function () {
    clearAll();
    let randNum = Math.floor(Math.random() * 7) + 1;
    meme.innerHTML = '<img src="img/meme' + randNum + '.png" alt="meme" class="img">';
    questionState = false;
    answerState = false;
})

jokeBtn.addEventListener("click", function () {
    clearAll();
    let randNum = Math.floor(Math.random() * 11);
    joke.innerHTML = jokesArray[randNum];
    questionState = false;
    answerState = false;
})

quoteBtn.addEventListener("click", function () {
    clearAll();
    let randNum = Math.floor(Math.random() * 9);
    quote.innerHTML = Object.values(quotesArray[randNum]) + "<div style='margin-top:10px;'>- " + Object.keys(quotesArray[randNum]) + "</div>";
    questionState = false;
    answerState = false;
})

riddleBtn.addEventListener("click", function () {
    clearAll();
    let randNum = Math.floor(Math.random() * 11);
    riddle.innerHTML = Object.values(riddlesArray[randNum]);
    questionState = true;
    riddleFlag = randNum;
    answerState = false;
})

riddleAnswerBtn.addEventListener("click", function () {
    if (answerState == true) {
        alert("Answer is already showing");
    }
    if (questionState == true) {
        riddleAnswer.innerHTML = Object.keys(riddlesArray[riddleFlag]);
        answerState = true;
    } else {
        alert("See riddle first");
    }
})



let clearAll = () => {
    meme.innerHTML = "";
    joke.innerHTML = "";
    quote.innerHTML = "";
    riddle.innerHTML = "";
    riddleAnswer.innerHTML = "";
}