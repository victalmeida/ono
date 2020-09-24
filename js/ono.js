var primeiraJogada = true;
var lighTheme = true;


function moveButton()
{

  if(primeiraJogada == false)
{
    setTimeout(posicao, 200);
}
else
{
    primeiraJogada = false;
    posicao();
}

}


function posicao ()
{

    var vertical = Math.floor(Math.random() * 70) + 10 ;
    var horizontal = Math.floor(Math.random() * 70) + 10; 
    document.getElementById('area').style.top = `${vertical}vh`;
    document.getElementById('area').style.left = `${horizontal}%`;
}

function venceu()
{
    stop();
    var audio = document.getElementById('clickAudio');
    audio.play();
    alert("Você conseguiu Clilclar no Botão !! ");
}


function changeTheme()
{
var text = document.getElementById('btnThema').firstChild;

if(text.data == 'Light Mode' )
{
    text.data = 'Dark Mode';
    document.body.style.backgroundImage = 'url(/assets/light.jpg)';
    document.getElementById('btnThema').style.backgroundColor = "rgb(30, 30, 31)";
    document.getElementById('btnThema').style.color = "rgb(255, 255, 255)";
    document.getElementById('header').style.color = "rgb(0, 0, 0)";
    document.getElementById('board').style.color = "rgb(0, 0, 0)";
    
   
}
else
{
    text.data = 'Light Mode';
    document.body.style.backgroundImage = 'url(/assets/dark.jpg)';
    document.getElementById('btnThema').style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById('btnThema').style.color = "rgb(0, 0, 0)";
    document.getElementById('header').style.color = "rgb(255, 255, 255)";
    document.getElementById('board').style.color = "rgb(255, 255, 255)";
    
}
}


function audio()
{
    var text = document.getElementById('btnThema').firstChild;

    if(text.data == 'Light Mode' )
    {
        var audio = document.getElementById('DarkAudio');
        audio.play();
    }
    else
    {
        var audio = document.getElementById('lightAudio');
        audio.play();
    }

      
}

function stop()
{

    var text = document.getElementById('btnThema').firstChild;

    if(text.data == 'Light Mode' )
    {
        var audio = document.getElementById('DarkAudio');
        audio.pause();
    }
    else
    {
        var audio = document.getElementById('lightAudio');
        audio.pause();
    }
      
}

function start()
{
    setTimeout(stop,30000);
    audio();
}