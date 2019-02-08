$(document).ready(function() {

  $(".devourBtn").on("click", function() {
    console.log("Eaten");
    
    const burgerId = $(this).attr("data-id");
    console.log(burgerId);

    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: "PUT"
    }).then(function (foodData) {
      location.reload();
    });

  })
  
  $(".trashBtn").on("click", function() {
    console.log("TRASHED");

    const burgerId = $(this).attr("data-id");

    $.ajax({
      url: `/api/burgers/${burgerId}`,
      method: "DELETE"
    }).then(function(foodData) {
      location.reload();
    });
    
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  $("#submitBtn").on("click", function(event) {
    event.preventDefault();
    console.log("clicked");

    const burgerInfo = {
      burger_name: $("#burgerInput").val().trim()
    }
    console.log(burgerInfo);

    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: burgerInfo
    }).then(function(foodData) {
      location.reload();
    });

  });

})