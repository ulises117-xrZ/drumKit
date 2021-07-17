let divContains = document.querySelectorAll('.key');
console.log(divContains);

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
    // console.log(e);
    // console.log(audio);
    divContains.forEach(function(item) {
        let codigoPadre =item.getAttribute("data-key");
        if(e.keyCode == codigoPadre){
        item.classList.add("keyis-pressed");
        window.addEventListener('keyup', function(e) {
            item.classList.remove("keyis-pressed");
            });
        }
    });
    audio.classList.toggle('keyis-pressed');
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
}
);
