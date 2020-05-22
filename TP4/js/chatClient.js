let msg = document.getElementById('chat-message').value;


let websocket;
let login = prompt('Entrez votre login')

// Create the chat websocket.
createWebSocket();

//------------------------------------------------------------------------------
//--- createWebSocket ----------------------------------------------------------
//------------------------------------------------------------------------------
// Function to load the received (Ajax) chat users.
function createWebSocket() {
websocket = new WebSocket('ws://localhost:12345');