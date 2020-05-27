import asyncio
import websockets


clients = []

async def clientHandler(websocket, path):
    clients.append(websocket)
    while True:
        try:
            message = await websocket.recv()  ###Récupérer le message du client
            for client in clients:
                print("Serveur: "+message)
                await client.send(message)   ###Envoie du message à chaque client
        except websockets.ConnectionClosed:    ###Connection terminée
            clients.remove(websocket)
            break

server = websockets.serve(clientHandler, "localhost", 12345)
asyncio.get_event_loop().run_until_complete(server)
asyncio.get_event_loop().run_forever()
