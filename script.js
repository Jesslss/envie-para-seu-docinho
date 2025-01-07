const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const btnGroup = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "I love you more than you'll ever know!";
    gif.src = "https://i.imgur.com/ds0mU.gif";
    gif.style.width = "100%";
    gif.style.maxWidth = "500px";
    btnGroup.style.display = "none"; 
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    
    const margin = 150; 
    const maxX = window.innerWidth - noBtnRect.width - margin;
    const maxY = window.innerHeight - noBtnRect.height - margin;

    const randomX = Math.max(margin, Math.floor(Math.random() * maxX));
    const randomY = Math.max(margin, Math.floor(Math.random() * maxY));

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
