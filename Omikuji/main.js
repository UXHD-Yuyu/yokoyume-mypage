window.onload = function() {
    const imgSrc = new Array('img/daikiti.png','img/tyukiti.png','img/kiti.png','img/kyou.png','img/daikyou.png');
    const resetSrc = 'img/omikuji.png';

    const startBtn = document.getElementById('start-Btn');
    const resetBtn = document.getElementById('reset-btn');
    const omikujiImg = document.getElementById('omikuji-img');

    startBtn.onclick = function() {
        const random = Math.floor(Math.random() * imgSrc.length);
        omikujiImg.src = imgSrc[random];

        if (random == 0){
            alert('良い一日になりそうだ!');
        } else if (random == 4) {
            alert('嫌な予感がする');
        } else {
            alert('noploblem');
        }
    }

    resetBtn.onclick = function() {
        omikujiImg.src = resetSrc;
    }
}

function();