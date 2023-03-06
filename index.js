// Install the express and contacts modules


// Create a Node.js server with Express
const express = require('express')
const app = express()

// Import the contacts module
const contacts = require('contacts')

// Create an API endpoint that returns the user's contacts
app.get('/api/contacts', (req, res) => {
  // Call the contacts module to retrieve the user's contacts
  const userContacts = contacts.getContacts()

  // Return the contacts as a JSON object
  res.json(userContacts)
})

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000')
})
