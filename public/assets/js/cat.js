var currentURL = window.location.origin;

var catId = window.location.search.split("=");


$.ajax({
  url: "/api/cats",
  method: "GET"
}).then (function(response) {

  var dropdown = document.getElementById("breeds");
    dropdown.length = 0;

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
  });


// Ajax call for cat data from API
$.ajax({
  url: "/api/cats/" + catId,
  method: "GET"
}).then (function(response) {
  console.log(response);

});

$("CATBREEDDIV").html(
  "<div><h5>" + response.breed + "</div></h5>"
);

$("CATIMAGES").html(
  "<div><img src='" + response.img1+ "'>"
);

$("CATWEIGHTDIV").html(
  "<div><h5>" + response.weight + "</div></h5>"
);
$("CATLIFESPANDIV").html(
  "<div><h5>" + response.life_span + "</div></h5>"
);
