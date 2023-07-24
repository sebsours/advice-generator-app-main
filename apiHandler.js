async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice", {
        method: "GET"
    });

    const adviceObj = await response.json();
    document.getElementById("advice_id").innerText = adviceObj.slip.id;
    document.getElementById("advice_text").innerText = '"' + adviceObj.slip.advice + '"';

}

getAdvice();