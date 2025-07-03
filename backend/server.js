// Import express module
const express = require('express'); // use express for easier code syntax for HTTP requests
const cors = require('cors');
const helpers = require('./helpers'); // load helper functions from the JS file i made for them

//whitelist all the domains

// Create an express application
const app = express();
app.use(cors());
app.use(express.json());

// Define the port number
const PORT = 8000;

app.post('/joinLoyaltyProgram', (req, res) => {
	let form_data = req.body;
	
	// Send back some JSON data when this route is accessed
	if (!form_data) {
		return res.status(404).json({
			message: 'Error: form data not received or received in unexoected format.',
		});
	}

	const now = new Date();
	form_data['time_joined'] = helpers.format_date(now);

	res.json(form_data);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});