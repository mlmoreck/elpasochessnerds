// Import express module
const express = require('express');
const cors = require('cors');

//whitelist all the domains

// Create an express application
const app = express();
app.use(cors());
app.use(express.json());

// Define the port number
const PORT = 8000;

const users = [
	{ id: 1, name: 'John Doe' },
	{ id: 2, name: 'Jane Doe' },
	{ id: 3, name: 'Jim Doe' },
];

// Define a route for GET requests to the root URL ('/')
app.get('/', (req, res) => {
	res.json({
		message: 'Welcome to my Express server!',
    data: {key: 'value'}
	});
});

// Define a route for GET requests to the root URL ('/')
// app.post('/:id', (req, res) => {
// 	// console.log(req.params.id);
// 	const id = req.params.id; //cats rats bats dogs 1 2 3
// 	const user = users.find((user) => user.id === parseInt(id));
// 	// Send back some JSON data when this route is accessed
// 	if (!user) {
// 		return res.status(404).json({
// 			message: 'User not found',
// 		});
// 	}
// 	res.json({
// 		user,
// 	});
// });

app.post('/joinLoyaltyProgram', (req, res) => {
	let form_data = req.body;
	
	// Send back some JSON data when this route is accessed
	if (!form_data) {
		return res.status(404).json({
			message: 'Error: form data not received or received in unexoected format.',
		});
	}

	const now = new Date();
	form_data['time_joined'] = format_date(now);

	res.json(form_data);
});

function format_date(date){
	const options = {
		year: '2-digit',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		timeZoneName: 'long',
		timeZone: 'America/Denver'
	};

	const formatter = new Intl.DateTimeFormat('en-US', options);
	const formattedDate = formatter.format(date);
	
	return formattedDate;
}

// Start the server and listen on the specified port
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});