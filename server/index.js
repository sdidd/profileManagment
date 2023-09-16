const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3001; // or any other port you prefer
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());
// Define an endpoint to handle POST requests for appending data to profiles.json
app.post('/api/addProfile', (req, res) => {
  const newData = req.body;

  // Read the existing data from profiles.json
  const existingData = JSON.parse(fs.readFileSync('public/profiles.json'));

  // Append the new data
  existingData.push(newData);

  // Write the updated data back to profiles.json
  fs.writeFileSync('public/profiles.json', JSON.stringify(existingData, null, 2));

  res.json({ message: 'Profile added successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
