function encryptPublic() {
    var originalText = document.getElementById("originalText").value;
    var publicKey = document.getElementById("publickey").value;
    var result = rsaEncrypt(originalText, publicKey);
    document.getElementById("resultText").value = result;
}

function decryptPublic() {
    var encryptedText = document.getElementById("resultText").value;
    var publicKey = document.getElementById("publickey").value;
    var result = rsaDecrypt(encryptedText, publicKey);
    document.getElementById("originalText").value = result;
}

function encryptPrivate() {
    var originalText = document.getElementById("originalText").value;
    var privateKey = document.getElementById("privatekey").value;
    var result = rsaEncrypt(originalText, privateKey);
    document.getElementById("resultText").value = result;
}

function decryptPrivate() {
    var encryptedText = document.getElementById("resultText").value;
    var privateKey = document.getElementById("privatekey").value;
    var result = rsaDecrypt(encryptedText, privateKey);
    document.getElementById("originalText").value = result;
}

function randomMatrix() {
    var size = document.getElementById("sizeofbits").value;
    var keyPair = generateRSAKeyPair(size);
    document.getElementById("publickey").value = keyPair.publicKey;
    document.getElementById("privatekey").value = keyPair.privateKey;
}

function rsaEncrypt(text, key) {
    /*
    
    Váš kód
    
    */
}

function rsaDecrypt(text, key) {
    /*
    
    Váš kód
    
    */
}

function generateRSAKeyPair(size) {
    /*
    
    Váš kód
    
    */
}
