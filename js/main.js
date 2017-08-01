$( document ).ready(function() {
    $vid = $('.video');
    $("video").mediaelementplayer({
        startLanguage: 'en'
    });

    const getCurrentTime = () => {
        console.log($video.currentTime);
    };

    const setCurrentTime =(video,time)=> {
        const vid = video;
        video.currentTime = time;
    }

});