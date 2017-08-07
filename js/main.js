$( document ).ready(function() {
    const vid = document.querySelector(".video");
    const textContent = document.getElementsByClassName("text-content")[0];
    const spans = textContent.getElementsByTagName("span");
    $("video").mediaelementplayer({
        startLanguage: 'en'
    });
    // Event which fires everytime the video updates itself
    vid.ontimeupdate =()=> {
        let currentVidTime = (vid.currentTime);
        for (let i = 0; i < spans.length; i++) {
            let spanStartTime = spans[i].getAttribute("data-time-start");
            let spanEndTime = spans[i].getAttribute("data-time-end");
            if (currentVidTime >= spanStartTime && currentVidTime <= spanEndTime) {
                spans[i].className = "text-current";
            } else {
                spans[i].className = "";
            }
        }

        // Clicking the text content will change the current progress of the video
        textContent.addEventListener("click", (e) => {
            if (e.target.tagName === "SPAN") {
                vid.currentTime = e.target.getAttribute("data-time-start");
            }
        });
    }
});