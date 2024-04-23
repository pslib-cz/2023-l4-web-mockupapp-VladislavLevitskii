function encrypt() {
    var originalText = document.getElementById("originalText").value.toUpperCase();
    var key = document.getElementById("keyplayfair").value.toUpperCase();
    var result = "";
    var keyMatrix = generateKeyMatrix(key);

    /*
    
    Váš kód
    
    */

    document.getElementById("resultText").value = result;
}

function decrypt() {
    /*
    
    Váš kód
    
    */
}

// Funkce pro generování Playfair matice z klíče
function generateKeyMatrix(key) {
    var keyMatrix = [];
    var keyWithoutDuplicates = removeDuplicates(key + alphabet); // Odstranění duplicitních znaků z klíče
    var index = 0;

    /*
    
    Váš kód
    
    */

    return keyMatrix;
}

function removeDuplicates() {
    /*
    
    Váš kód
    
    */
}

// Funkce pro šifrování páru písmen
function encryptPair() {
    /*
    
    Váš kód
    
    */
}

// Funkce pro nalezení pozice písmene v Playfair matici
function findPositionInMatrix() {
    /*
    
    Váš kód
    
    */
}

// Funkce pro generování náhodného klíče
function generateRandomKey() {
    /*
    
    Váš kód
    
    */
}
