const requestURL='https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
	const headers = {
		'Content-Type': 'application/json'
	}

	return fetch(url, {
		method: method,
		body: JSON.stringify(body),
		headers: headers
	}).then(response => {
		if (response.ok) {
		return response.json()
		}

		return response.json().then(error => {
			const e = new Error('Alarm')
			e.data = error
			throw e
		})
	})
}

// sendRequest('GET', requestURL)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))

const body = {
	name: 'Alex',
	age: 19
}

sendRequest('POST', requestURL, body)
	.then(data => console.log(data))
	.catch(err => console.log(err))