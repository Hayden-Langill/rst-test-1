const clicker = document.getElementById('button')
let timesClicked = 0
const goal = document.getElementById('goal')
const code = document.getElementById('input')

clicker.addEventListener('click', add)

const image1 = document.getElementById('image1')
image1.style.visibility = 'hidden'
const image2 = document.getElementById('image2')
image2.style.visibility = 'hidden'

function add () {
	if (timesClicked >= 50 && timesClicked < 300) { /*  once you hit 50 you click for x2 the   amount */
		timesClicked++
	} else if (timesClicked >= 300 && timesClicked < 1000) { //  once you hit 300 you click for x4 the amount
	  timesClicked++
	  timesClicked++
	  timesClicked++
	} else if (timesClicked >= 1000) {
		timesClicked++
	  timesClicked++
	  timesClicked++
		timesClicked++
	  timesClicked++
	}	
	if (code.value === 'Summer' && timesClicked < 500) {
		timesClicked = 500
	}
	//base start without boost
	timesClicked++
  document.getElementById('total').innerHTML = timesClicked;
	if (timesClicked >= 0 && timesClicked <= 10) {
	  goal.innerHTML = 10 - timesClicked
	} else if (timesClicked >= 10 && timesClicked <= 25) {
		document.getElementById('body').style.backgroundColor = 'red'
		goal.innerHTML = 25 - timesClicked
	} else if (timesClicked >= 25 && timesClicked <= 100) {
		document.getElementById('body').style.backgroundColor = 'purple'
		goal.innerHTML = 100 - timesClicked
	} else if (timesClicked >= 100 && timesClicked <= 1000) { //unlocks stuff for each goal
    image1.style.visibility = 'visible'
		goal.innerHTML = 1000 - timesClicked
	} else if (timesClicked >= 1000 && timesClicked <= 2000) {
		goal.innerHTML = 5000 - timesClicked
		image2.style.visibility = 'visible'
		document.getElementById('body').style.backgroundColor = 'blue'
	}
	if (timesClicked == 10000) {
		var audio = new Audio('Legends.webm') //If player gets 10,000 clicks it plays this song
audio.play()
	}
}
