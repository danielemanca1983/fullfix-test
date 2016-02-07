$.getJSON("home.json", function (slideData) {
    var slides = slideData.slides;
    var $slideTemplate = $(".templates .slide");

    var $slideItems = slides.map(function (current) {
        var $newSlide = $slideTemplate.clone();
        $(".slide-title", $newSlide).text(current.title);
        $(".thumb", $newSlide).css("background-image", "url(" + current.image + ")");
        $(".slide-url", $newSlide).attr("href", current.url);
        return $newSlide;
    });

    $(".home-slider").html($slideItems);

    $('.home-slider').flickity({
      prevNextButtons: false,
      contain: true
    });
});