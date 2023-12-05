// 1. Código JS para fala em texto:
var SpeechRecognition = window.webkitSpeechRecognition;
// 2. defina a função de início e escreva o código para ela:
var recognitio = new SpeechRecognition();
// 3. Este resultado é a conversão de nossa fala em texto
var Textbox = document.getElementById("textbox");

function start()
{
    Textbox.innerHTML = "";
    SpeechRecognition.start();
}
recognition.onresult = function(event)
{
    console.log(event);
    var Content = event.results[0][0].transcript;
    Textbox.innerHTML = Content;
    console.log(Content);
    if(Content =="selfie")
    {
        console.log("tirando selfie --- ");
        speak();
    }
}

    

