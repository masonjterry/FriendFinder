$("#button").on("click", function(event) {

  event.preventDefault();

  let newFriend = {
    name: $("#name").val().trim(),
    photo: $("#image").val().trim(),
    scores: [parseInt($("#statement1").val()), parseInt($("#statement2").val()), parseInt($("#statement3").val()), parseInt($("#statement4").val()), parseInt($("#statement5").val()), parseInt($("#statement6").val()), parseInt($("#statement7").val()), parseInt($("#statement8").val()), parseInt($("#statement9").val()), parseInt($("#statement10").val())]
  };

  $.post("http://localhost:8080/survey", newFriend).done(function(data) {
    console.log(newFriend);
    alert("Added to friend group!");
  });

module.exports = newFriend;

});
