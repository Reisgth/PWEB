function maiusculas() {
    document.getElementById("minusculas").checked = false;
    document.getElementById("texto").value = document.getElementById("texto").value.toUpperCase();
}

function minusculas() {
    document.getElementById("maiusculas").checked = false;
    document.getElementById("texto").value = document.getElementById("texto").value.toLowerCase();
}