var price = document.getElementById("priceblock_ourprice").innerText;
chrome.runtime.sendMessage({price: price});