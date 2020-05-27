let websocket;
let login = prompt('Entrez votre login');

createWebSocket();

function createWebSocket() 
{
  websocket = new WebSocket('ws://localhost:12345');

  let button=document.getElementById("but");
  button.onclick=sendMessage;

}

function sendMessage(event)
{
    event.preventDefault();
    let text = document.getElementById("message").value;
    websocket.send(login+" : "+text);
    document.getElementById('message').value='';
}


websocket.onmessage = function(event) {
  let chat= document.getElementById("areaMessage");
  chat.setAttribute("disabled", false);
  chat.append(event.data+"\n");
  chat.setAttribute("disabled", true);
  console.log('Message envoyé');

}

websocket.onopen = function(event) {
  console.log('Connexion établie');
}



// websocket.onclose = function() {
//    console.log('Communication terminée');
//    websocket.send(login + 'disconnect');

// }











