let quizID = 123;

document.getElementById('vict-start-btn').addEventListener('click', () => {
	window.location.href += '/' + quizID;
})