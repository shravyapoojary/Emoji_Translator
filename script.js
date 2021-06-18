


'use strict';
const input=document.getElementById('input');
const btnTranslate=document.getElementById('btn-translate');

const output=document.getElementById('output')
const url='https://api.funtranslations.com/translate/emoji.json';

const TranslateUrl=function(text){
    return `${url}?text=${text}`;
}

const translate=async function(text){
    const data=await fetch(TranslateUrl(text));
    const result=await data.json();
     
    output.innerHTML=result.contents.translated;

}
btnTranslate.addEventListener('click',() => {
    let userText=input.value;
translate(userText);
// console.log(TranslateUrl(userText));
    // output.innerText=user.toUpperCase();
});

