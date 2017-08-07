$( document ).ready(function() {
    vid = document.querySelector(".video");
    $spans = $('span[data-time]');

    $("video").mediaelementplayer({
        startLanguage: 'en'
    });

    $spans.removeClass('text-current')
    vid.ontimeupdate =(e)=>{
        currentTime = vid.currentTime;
        // console.log(vid.currentTime);
        for (let i = 0; i < $spans.length; i++){
            currentSpanTime = parseFloat($spans[i].getAttribute('data-time'))
            if (currentSpanTime){
                console.log(currentSpanTime);
                console.log(currentTime);
                // Kontrolovat ci currentSpanTime je <= ako currentVidTime - ak je tak ostane ak nie tak
                // je vacsi a musi ist na dalsi item - vsetky spany dostanu removeClass a ten konkretny dostane addClass
            }
        }
    }
});