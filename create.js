const btn = document.querySelector('#option1-cb');

btn.addEventListener('click', () => {
	const option = {
		method: 'POST',
		body: JSON.stringify(
			{
				"name": "Викторина 1",
				
				"cards": [
					{
						"question": "Что?",
						"options": ["yes", "no"],
						"answer": "yes"
					},
					{
						"question": "Где?",
						"options": ["yes", "no"],
						"answer": "yes"
					},
					{
						"question": "Когда?",
						"options": ["yes", "no"],
						"answer": "yes"
					}
				]
			}
		)
	}
	fetch('https://jsonplaceholder.typicode.com/users', option)
	.then(response => response.json())
	.then(json => console.log(json))
});