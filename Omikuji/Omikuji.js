window.omload = function(a) {
    const imgsrc = new Array('img/daikiti.png','img/tyukiti.png','img/kiti.png','img/kyou.png','img/daikyou.png');

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
}