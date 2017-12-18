let friends = [{ name: "Fred", photo: "#", scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]}];
let score;

function findFriend() {
  score = friends[0].scores[0];
  for (let j = 0; j < 10; j++) {
    score += friends[0].scores[j];
  };
  console.log(score);
}

findFriend();

module.exports = friends;
