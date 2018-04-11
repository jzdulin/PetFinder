$(document).ready(function() {


  function populateCats() {
  
    $.ajax({
      url: "/api/cats/",
      method: "GET"
    }).then(function(response) {
      console.log(response);
      
      
      var catCarousel = $("#catCarousel");
      // var carousel = document.getElementById("catCarousel");
      // let defaultOption = document.createElement("a");
      // carousel.appendChild(defaultOption);
      // .replace("public/", "")

      for (var i = 0; i < response.length; i++) {
        console.log(response[i]);


        var carouselItem = $("<a>");
        carouselItem.addClass("carousel-item");
        carouselItem.attr("href", response[i].img1);
        carouselItem.text(response[i].breed);

        var carouselImage = $("<img>");
        carouselImage.attr("src", response[i].img1);
        carouselImage.attr("alt", response[i].breed);

        carouselImage.appendTo(carouselItem);

        carouselItem.appendTo(catCarousel);

      }


      $('.carousel').carousel();

    });
  }

  populateCats();






});