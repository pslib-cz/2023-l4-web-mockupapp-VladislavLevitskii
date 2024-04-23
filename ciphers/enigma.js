function encrypt() {
    var originalText = document.getElementById("originalText").value.toUpperCase();
    var plugboard = document.getElementById("plugboard").value.toUpperCase();
    var rotor1 = parseInt(document.getElementById("selectenigma1").value);
    var rotor2 = parseInt(document.getElementById("selectenigma2").value);
    var rotor3 = parseInt(document.getElementById("selectenigma3").value);
    var position1 = parseInt(document.getElementById("selectenigma4").value.split(" ")[0]) - 1;
    var position2 = parseInt(document.getElementById("selectenigma5").value.split(" ")[0]) - 1;
    var position3 = parseInt(document.getElementById("selectenigma6").value.split(" ")[0]) - 1;
    var ring1 = parseInt(document.getElementById("selectenigma7").value.split(" ")[0]) - 1;
    var ring2 = parseInt(document.getElementById("selectenigma8").value.split(" ")[0]) - 1;
    var ring3 = parseInt(document.getElementById("selectenigma9").value.split(" ")[0]) - 1;

    var result = "";

    /*
    
    Váš kód
    
    */

    document.getElementById("resultText").value = result;
}

function plugboardReplace() {
    /*
    
    Váš kód
    
    */
}

function enigmaEncrypt() {
    /*
    
    Váš kód
    
    */
}

function enigmaDecrypt() {
    /*
    
    Váš kód
    
    */
}


function reflect() {
    /*
    
    Váš kód
    
    */
}
