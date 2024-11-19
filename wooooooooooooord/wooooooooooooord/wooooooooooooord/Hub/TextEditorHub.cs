using Microsoft.AspNetCore.SignalR;

public class TextEditorHub : Hub
{
    // Método para enviar actualizaciones de texto a otros clientes
    public async Task SendTextUpdate(string updatedText)
    {
        // Envía la actualización a todos los clientes conectados excepto al que la envió
        await Clients.Others.SendAsync("ReceiveTextUpdate", updatedText);
    }
}
