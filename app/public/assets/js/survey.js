$("#button").on("click", function(event) {

  event.preventDefault();

  $.ajaxSetup({ traditional: true });

  if ($("#name").val() === "" || $("#image").val() === "") {
    alert("Please fill out all forms!");
  } else {

    let newFriend = {
      name: $("#name").val().trim(),
      photo: $("#image").val().trim(),
      scores: [
        $("#statement1").val(),
        $("#statement2").val(),
        $("#statement3").val(),
        $("#statement4").val(),
        $("#statement5").val(),
        $("#statement6").val(),
        $("#statement7").val(),
        $("#statement8").val(),
        $("#statement9").val(),
        $("#statement10").val(),
      ]
    };

    console.log('data sent to api', newFriend);

    $.post("/api/friends", newFriend).done(function(data) {
      alert(data.name + " is your match");
      alert("Added to friend group!");
    });
}
});
