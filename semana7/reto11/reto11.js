const inputText = document.querySelector("#input-text");
const btnTranslate = document.querySelector("#btn-translate");

btnTranslate.onclick = async function () {

    const encodedParams = new URLSearchParams();
    encodedParams.append("source_language", "en");
    encodedParams.append("target_language", "es");
    encodedParams.append("text", inputText.value);

    const response = await fetch("https://text-translator2.p.rapidapi.com/translate",
        {
            method: "POST",
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '87ee5cfc9amsh5ae31df712459aap1a1795jsnfa024c28690a',
                'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
            },
            body: encodedParams,
        }
    );
    const data = await response.json();
    console.log(data);
};