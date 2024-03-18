//Hit button +1 
//Miss button -1
//Memory of total
//Get total
//Give a % to
//reset button

let score = Number(localStorage.getItem('score')) || 0;
let totalClicks = Number(localStorage.getItem('totalClicks')) || 0;
let percentageOfShots = Number(localStorage.getItem('percentageOfShots')) || 0;



document.getElementById('hit-shot-button').addEventListener('click', function() {
  total(+1);
});

document.getElementById('missed-shot-button').addEventListener('click', function() {
  total(-1);
});


document.getElementById('reset').addEventListener('click', function() {
  score = 0;
  totalClicks = 0;
  percentageOfShots = 0;

  localStorage.setItem('score', score); 
  localStorage.setItem('totalClicks', totalClicks); 
  localStorage.setItem('percentageOfShots', percentageOfShots); 

  document.getElementById('score-display').innerHTML = score;
  document.getElementById('totalScore').innerHTML = totalClicks;
  document.getElementById('percentage').innerHTML = percentageOfShots
});



function total(change) {
  score += change
  totalClicks++;
  percentageOfShots = (score / totalClicks) * 100;

  localStorage.setItem('score', score); 
  localStorage.setItem('totalClicks', totalClicks); 
  localStorage.setItem('percentageOfShots', percentageOfShots); 


  document.getElementById('score-display').innerHTML = score;
  document.getElementById('totalScore').innerHTML = totalClicks;
  document.getElementById('percentage').innerHTML = percentageOfShots

};