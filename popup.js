chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    document.getElementById("price").innerHTML = "The price is " + message.price;
});
