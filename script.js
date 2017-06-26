function multiplier() {
  const M = document.getElementById('multiplier').value
  const answerBox = document.getElementById('answer')

  answerBox.innerHTML = 'Instead of a ' + M + ' ever thought about buying a'
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
