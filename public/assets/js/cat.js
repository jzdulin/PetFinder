var currentURL = window.location.origin;


$.ajax({
  url: currentURL + "/api/cats",
  method: "GET"
}).then = (function(response) {

  var dropdown = document.getElementById("dropDownCat");
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
