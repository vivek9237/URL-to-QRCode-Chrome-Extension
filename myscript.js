var qrcode = new QRCode (document.getElementById("qrcode"),{
width : 300,
height : 300
});

chrome.tabs.query ({active:true, lastFocusedWindow:true}, function (tabs){
var full_url = tabs[0].url;
qrcode.makeCode (full_url);
});