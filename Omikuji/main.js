window.onload = function() {
    const imgSrc = new Array ('daikiti.png','tyukiti.png','kiti.png','kyou.png','daikyou.png');
    const resetSrc = 'omikuji2.png';

    const startBtn = document.getElementById('start-btn');
    const resetBtn = document.getElementById('reset-btn');
    const omikujiImg = document.getElementById('omikuji-img');

    startBtn.onclick = function() {
        const random = Math.floor(Math.random() * imgSrc.length);
        omikujiImg.src = imgSrc[random];
    }

    resetBtn.onclick = function() {
        omikujiImg.src = resetSrc;
    }
}