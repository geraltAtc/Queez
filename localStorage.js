function saveToLocalStorage() {
	// Сначала получаем данные от пользователя
	const question = document.getElementById('question').value;
	const option1 = document.getElementById('option1').value;
	const option2 = document.getElementById('option2').value;
	const option3 = document.getElementById('option3').value;
	const option4 = document.getElementById('option4').value;
// Создаём объект с данными
	const quizData = {
		name: question,
		options: [option1, option2, option3, option4]
	};
// Преобразуем объект в JSON и сохраняем в localStorage
	localStorage.setItem('quizData', JSON.stringify(quizData));
}

function sendToBackend() {
	// Получаем данные из localStorage
	const quizData = JSON.parse(localStorage.getItem('quizData'));

	// Отправляем данные на бэкэнд
	fetch('https://jsonplaceholder.typicode.com/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(quizData)
	})
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.log(error));
}