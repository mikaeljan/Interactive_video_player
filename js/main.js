$( document ).ready(function() {
    const vid = document.querySelector(".video");
    const $spans = $('span[data-time]');

    $("video").mediaelementplayer({
        startLanguage: 'en'
    });

    $spans.removeClass('text-current')
    vid.ontimeupdate =()=>{
        let currentVidTime = vid.currentTime;
        // console.log(vid.currentTime);
        for (let i = 0; i < $spans.length; i++){
            let currentSpanTime = parseFloat($spans[i].getAttribute('data-time'))
            if (currentSpanTime){
                console.log(currentSpanTime);
                console.log(currentVidTime);
                // Kontrolovat ci currentSpanTime je <= ako currentVidTime - ak je tak ostane ak nie tak
                // je vacsi a musi ist na dalsi item - vsetky spany dostanu removeClass a ten konkretny dostane addClass
            }
        }
    }
});