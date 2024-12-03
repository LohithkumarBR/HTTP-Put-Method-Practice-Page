let requestBodyEl = document.getElementById("requestBody");
let sendPutRequestBtnEl = document.getElementById("sendPutRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let userInputEl = document.getElementById("userInput");

function sendPutHTTPRequest() {
    let userId = userInputEl.value;
    let url = "https://gorest.co.in/public-api/users/" + userId;
    let requestBody = requestBodyEl.value;
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer "
        },
        body: requestBody
    };

    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            loadingEl.classList.add("d-none");
            requestStatusEl.classList.remove("d-none");

            let requestStatus = data.code;
            let httpResponse = JSON.stringify(data);
            requestStatusEl.textContent = requestStatus;
            httpResponseEl.textContent = httpResponse;
        });
}

sendPutRequestBtnEl.addEventListener("click", sendPutHTTPRequest);