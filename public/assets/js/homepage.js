$(document).ready(function() {

  function populateCats() {
  
    $.ajax({
      url: "/api/cats/",
      method: "GET"
    }).then(function(response) {
      console.log(response);
      

      var carousel = document.getElementById("catCarousel");
      let defaultOption = document.createElement("a");
      carousel.appendChild(defaultOption);

      for (var i = 0; i < response.length; i++) {
        
        var option = document.createElement("a");
        option.setAttribute("class", "carousel-item");
        option.setAttribute("href", response[i].img1);

        var catImage = document.createElement("img");
        catImage.setAttribute("src", response[i].img1);
      

      }

      // var dropdown = document.getElementById("breedChoices");

      // let defaultOption = document.createElement("option");
      // defaultOption.text = "Choose Breed";

      // dropdown.appendChild(defaultOption);
      // dropdown.selectedIndex = 0;

      // for (var i = 0; i < response.length; i++) {
      //   var option = document.createElement("option");
      //   option.setAttribute("class", "dropdown-item");
      //   option.text = response[i].breed;
      //   option.value = response[i].id;
      //   dropdown.appendChild(option);
      // }

    });
  }

  populateCats();






});