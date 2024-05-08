# Stateless RESTful API Example: To-Do List Application
This project demonstrates the implementation of a stateless RESTful API for a to-do list application. In a stateless architecture, the server does not maintain any client session state between requests. Each request is independent and contains all the information needed for the server to understand and process it.

### Overview
This API provides basic functionality for managing to-do items. It includes endpoints for creating, retrieving, updating, and deleting to-do items.

### Endpoints:
1. ***GET /todos:*** Retrieves a list of to-do items.
2. ***POST /todos:*** Creates a new to-do item.
3. ***PUT /todos/:id:*** Updates an existing to-do item.
4. ***DELETE /todos/:id:*** Deletes a to-do item by its ID.
   
## How Server Maintains No Client Session State
In this API, the server doesn't maintain any state about client sessions. Each request from the client to the server contains all the information needed for the server to understand and process the request. Here's how the statelessness is demonstrated in the context of this to-do list application:

### Example Scenario:

**Creating a to-do item:**

Client sends a POST request to /todos with the data for the new to-do item.
Server receives the request, creates the new to-do item, and sends back a response confirming that the item was created.
The client receives the response and knows that the new to-do item has been successfully created.

**Updating a to-do item:**

Client sends a PUT request to /todos/:id with the ID of the to-do item to update and the updated data.
Server receives the request, updates the specified to-do item, and sends back a response confirming that the item was updated.
The client receives the response and knows that the to-do item has been successfully updated.

**Deleting a to-do item:**

Client sends a DELETE request to /todos/:id with the ID of the to-do item to delete.
Server receives the request, deletes the specified to-do item, and sends back a response confirming that the item was deleted.
The client receives the response and knows that the to-do item has been successfully deleted.
In each interaction, the server processes the request and sends back responses without maintaining any session state about the client.

### Technologies Used

Node.js

Express.js

body-parser

### Getting Started
1. Clone this repository.
  
2. Install dependencies using `npm install`.
   
3. Start the server using `npm start`.
   
4. The server will be running on `http://localhost:3500` by default.
