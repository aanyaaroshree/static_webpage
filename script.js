const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const captureBtn = document.getElementById("captureBtn");

const logList = document.getElementById("logList");
let logcount=0;
function addLog(message) {
    if(logcount >= 6) {
        logList.removeChild(logList.firstChild);
        logcount--;
    }
const logItem = document.createElement("li");


logItem.textContent = message;

logList.appendChild(logItem);
logcount++;

}

startBtn.addEventListener("click", () => {
addLog("Button [Start] Clicked");
});

stopBtn.addEventListener("click", () => {
addLog("Button [Stop] Clicked");
});
captureBtn.addEventListener("click", () => {
addLog("Button [Capture] Clicked");
});