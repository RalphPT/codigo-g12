// const inputText = document.querySelector("#input-text");
// const btnTranslate = document.querySelector("#btn-translate");
//select
const targetLanguage = document.querySelector("#target-language");
const sourceLanguage = document.querySelector("#source-language")
//textarea
const sourceText = document.querySelector("#source-text");
const targetText = document.querySelector("#target-text")
//button
const btnTranslate = document.querySelector("#btn-translate")

//btnTranslate.onclick ||
sourceText.onkeypress = async function () {
    //Si están vacíos rompen la función
    if (!sourceLanguage.value || !targetLanguage.value || !sourceText.value)
      return;
  
    const encodedParams = new URLSearchParams();
    encodedParams.append("source_language", sourceLanguage.value);//primer select
    encodedParams.append("target_language", targetLanguage.value);//segundo select
    encodedParams.append("text", sourceText.value);//primer text area
  
    const response = await fetch(
      "https://text-translator2.p.rapidapi.com/translate",
      {
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key": "87ee5cfc9amsh5ae31df712459aap1a1795jsnfa024c28690a",
            "X-RapidAPI-Host": "text-translator2.p.rapidapi.com"
        },
        body: encodedParams,
      }
    );
    const data = await response.json();
  
    targetText.value = data.data.translatedText;
  };

//Se usa un asincrono
async function getLanguages() {
    const response = await fetch("https://text-translator2.p.rapidapi.com/getLanguages",
        {
            headers: {
                'X-RapidAPI-Key': '87ee5cfc9amsh5ae31df712459aap1a1795jsnfa024c28690a',
                'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
            },
        }
    );
    const data = await response.json();
    renderLanguages(data.data.languages, sourceLanguage);
    renderLanguages(data.data.languages, targetLanguage);
}

getLanguages();

function renderLanguages(languages, select) {
    languages.forEach((language) => {
        select.innerHTML += `<option value="${language.code}">${language.name}</option>`;
    });
}
// btnTranslate.onclick = async function () {

//     const encodedParams = new URLSearchParams();
//     encodedParams.append("source_language", "en");
//     encodedParams.append("target_language", "es");
//     encodedParams.append("text", inputText.value);

//     const response = await fetch("https://text-translator2.p.rapidapi.com/translate",
//         {
//             method: "POST",
//             headers: {
//                 "content-type": "application/x-www-form-urlencoded",
//                 "X-RapidAPI-Key": "87ee5cfc9amsh5ae31df712459aap1a1795jsnfa024c28690a",
//                 "X-RapidAPI-Host": "text-translator2.p.rapidapi.com"
//             },
//             body: encodedParams,
//         }
//     );
//     const data = await response.json();
//     console.log(data);
// };