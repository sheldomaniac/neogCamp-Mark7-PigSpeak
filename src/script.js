var btnTranslate = document.querySelector("#btnTranslate");
var inputTextArea = document.getElementById("inputTextArea")
var outputTextArea = document.querySelector("#outputTextArea")

var serverURL = "https://api.funtranslations.com/translate/pig-latin.json";

function getTranslation(text){
    return serverURL + "?text="+ text;
}

function errorHandler(error){
    console.log("An error has occured. Please check later");
}

function translator(){
    
    var textInput = inputTextArea.value;


    fetch(getTranslation(textInput))
        .then(response=>response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            var preTranslatedText = json.contents.text;
            var textLanguage = json.contents.translation;
            outputTextArea.innerHTML = translatedText;
        })
        
        .catch(errorHandler);
    
}  

btnTranslate.addEventListener("click", translator);