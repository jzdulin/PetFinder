$(document).ready(function () {
    $('.modal').modal();
  $(".catLoad").hide();
  // Side Nav Tean infi
  $('.sidenav').sidenav();
  //Floating Contact Git hub 
  $('.fixed-action-btn').floatingActionButton({
    direction :"right",
    hoverEnabled: false
  });
  //Tooltip For Contact info Name
  $('.tooltipped').tooltip({
    position: "top",
    margin:5
  });
  
    function populateCats() {
      $.ajax({
        url: "/api/cats/",
        method: "GET"
      }).then(function (response) {
  
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
          // carouselItem.attr("href", "#");
          carouselItem.text(response[i].breed);
  
          var carouselImage = $("<img>");
          carouselImage.attr("src", response[i].img1);
          carouselImage.attr("alt", response[i].breed);
          carouselImage.attr("value", response[i].id);
          carouselImage.addClass("cat-image", response[i].id);
          // carouselImage.attr("data-caption", response[i].breed);
  
          // carouselImage.attr("class", "tooltipped");
          // carouselImage.attr("data-position", "top");
          // carouselImage.attr("data-tooltip", response[i].breed);
         
  
          carouselImage.appendTo(carouselItem);
          carouselItem.appendTo(catCarousel);
        }
        
        $(".carousel").carousel();
        // $('.tooltipped').tooltip();
      
      });
     
    }
  
    populateCats();
  
    $(document).on("click", ".cat-image", function () {
      $(".catLoad").show();
  
      // var catId = window.location.search.split("=")[1];
      var catId = $(this).attr("value");
      console.log("cat id: " + catId);
  
      $.ajax({
        url: "/api/cats/" + catId,
        method: "GET"
      }).then(function (response) {
  
        console.log(response);
        $(".breed-title").html(response.breed);
        $(".cat-img1").html("<img class='responsive-img' src='" + response.img1 + "'>");
        $(".cat-img2").html("<img class='responsive-img' src='" + response.img2 + "'>");
        $(".cat-img3").html("<img class='responsive-img' src='" + response.img3 + "'>");
        $(".life_span").text(response.life_span);
        $(".weight").text(response.weight);
        $(".history").html(response.history);
        $(".personality").html(response.personality);
        $(".health").html(response.health);
        $(".care").html(response.care);
        $(".children_animals").html(response.children_animals);
  
        // $(".lifeSpan-holder").html("<h5>Life Span: </h5>" + response.life_span + "<br>");
        // $(".weight-holder").html("<h5>Weight: </h5>"+ response.weight + "<br>");
      });
  
      // $(".slider").slider();
      // $(".collapsible").collapsible();
      // //
      // $('.carousel').carousel();
      // //
      $.ajax({
        url: "/api/comments/" + catId,
        method: "GET"
      }).then(function(response) {
        var posts = response;
        console.log(response);
        $(".comment-container").html("")
        for (i = 0; i < response.length; i++) {
          console.log(catId)
          console.log(response[0].CatId)
          var postsToAdd = []
          if (catId == response[i].CatId){
            var newPost = $("<span>")
            var dateString = moment(response[i].createdAt).format("MM-DD-YYYY HH:mm");
            console.log(dateString)
            newPost.html("<p>" + dateString + "<p><p>" + response[i].name + "<p>" + "<p>" + response[i].comment + "</p> <hr>");
            $(".comment-container").append(newPost)
            // test = $(".comment-container").val()
            // if (test === "") {
            //   $(".comment-container").html("No comments have been posted for this breed.")
            // }
            
          }
        }
      }); 
  
        $(".slider").slider();
        $(".collapsible").collapsible();
  
  
      var elem = document.querySelector(".collapsible.expandable");
      var instance = M.Collapsible.init(elem, {
        accordion: false
      }); // Close accordion Materialize function
  
    }); // Close click handler/AJAX call for cat info
  }); // Close document.ready
  
  function populateBreed() {
  
    $.ajax({
      url: "/api/cats/",
      method: "GET"
    }).then(function (response) {
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
  
  var nameInput = $("#name");
  var commentInput = $("#comment");
  var postIdSelect = $("#breedChoices");
  
  $("#submit").on("click", function handleFormSubmit(event) {
    event.preventDefault();
    $(".catLoad").show();
    
    // Wont submit the post if we are missing a body or a title
    if (!nameInput.val().trim() || !commentInput.val().trim() || !postIdSelect.val()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      name: nameInput.val().trim(),
      comment: commentInput.val().trim(),
      CatId: postIdSelect.val()
    };
    $("#name").val("")
    $("#comment").val("")
  
    console.log(newPost);
    submitPost(newPost);
    var catId = newPost.CatId;
    console.log(catId)
  
    $.ajax({
      url: "/api/comments/" + catId,
      method: "GET"
    }).then(function(response) {
      var posts = response;
      console.log(response);
      $(".comment-container").html("")
      for (i = 0; i < response.length; i++) {
        console.log(catId)
        console.log(response[0].CatId)
        var postsToAdd = []
        if (catId == response[i].CatId){
          var newPost = $("<span>")
          var dateString = moment(response[i].createdAt).format("MM-DD-YYYY HH:mm");
          console.log(dateString)
          newPost.html("<p>" + dateString + "<p><p>" + response[i].name + "<p>" + "<p>" + response[i].comment + "</p> <hr>");
          $(".comment-container").append(newPost)    
        }
      }
      // $("#name").text("");
      // $("#comment").text("");
    });
     
  }) 
  
  function submitPost(Post) {
    $.post("/api/comments/", Post, function () {
      // window.location.href = "/";
    });
  }