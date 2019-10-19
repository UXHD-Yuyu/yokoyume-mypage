window.omload = function() {
    const imgsrc = new Array('daikiti.png','tyukiti.png','kiti.png','kyou.png','daikyou.png');

    const startBtn = document.getElementById('start-Btn');
    const resetBtn = document.getElementById('reset-btn');
    const omikujiImg = document.getElementById('omikuji-img');

    startBtn.onclick = function() {
        const random = math.floor(math.random() * imgsrc.length);
        omikujiImg.src[random];

        if (random == 0) {
            alert('良い一日になりそうだ!');
        } else if (random == 4) {
            alert('嫌な予感がする');
        }
    }

    resetBtn.onclick = function() {
        omikujiImg.src = resetSrc;
    }
}

function();