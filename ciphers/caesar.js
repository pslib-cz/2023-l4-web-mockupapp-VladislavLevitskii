function encrypt() {
    var shift = parseInt(document.getElementById("shiftAmount").value);
    var text = document.getElementById("originalText").value;
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        } else {
            result += text.charAt(i);
        }
    }
    document.getElementById("resultText").value = result;
}

function decrypt() {
    var shift = parseInt(document.getElementById("shiftAmount").value);
    var text = document.getElementById("originalText").value;
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 - shift + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 - shift + 26) % 26 + 97);
        } else {
            result += text.charAt(i);
        }
    }
    document.getElementById("resultText").value = result;
}