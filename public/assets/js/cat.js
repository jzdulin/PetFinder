$(document).ready(function() {
  $("select").formSelect();

 

  function populateBreed() {
  
    $.ajax({
      url: "/api/cats/",
      method: "GET"
    }).then(function(response) {
      console.log(response);

      var dropdown = document.getElementById("breedChoices");

      let defaultOption = document.createElement("option");
      defaultOption.text = "Choose Breed";

      dropdown.appendChild(defaultOption);
      dropdown.selectedIndex = 0;

      for (var i = 0; i < response.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("class", "dropdown-item");
        option.text = response[i].breed;
        option.value = response[i].id;
        dropdown.appendChild(option);
      }

      $("select").formSelect();
    });
  }

  populateBreed();


  $("#breedChoices").on("click", function(event) {
    // event.preventDefault();

  //Ajax call for individual cat data from API

  var currentURL = window.location.origin;

  var catId = window.location.search.split("=");

  console.log(catId);
  $.ajax({
    url: "/api/cats/" + catId,
    method: "GET"
  }).then (function(response) {
    console.log(response);

  });

  $(".card").html(
    "<div><h5>" + response.breed + "</div></h5>"
  );

  // $("CATIMAGES").html(
  //   "<div><img src='" + response.img1+ "'>"
  // );

  // $("CATWEIGHTDIV").html(
  //   "<div><h5>" + response.weight + "</div></h5>"
  // );
  // $("CATLIFESPANDIV").html(
  //   "<div><h5>" + response.life_span + "</div></h5>"
  // );
  });



});
