function ajaxRequest(type, url,callback)
{
    let xhr = new XMLHttpRequest();
    xhr.open(type,url);

    xhr.onload=() =>
    {
        switch (xhr.status)
        {
            case 200:
            case 201: console.log(xhr.responseText); callback(xhr.responseText);
            break;
            default: console.log('HTTP error:' + xhr.status);

        }
    };

    xhr.send();
}

function display(text)
{
    document.getElementById('timestamp').innerHTML='<span class="material-icons">watch_later</span> <strong>'+ text+ '</strong>';
}
setTimeout(ajaxRequest('GET','php/timestamp.php', display), 1000);

