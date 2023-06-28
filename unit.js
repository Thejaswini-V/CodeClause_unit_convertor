function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var result = 0;

    if (inputUnit === "meter") {
        if (outputUnit === "kilometer") {
            result = inputValue / 1000;
        } else if (outputUnit === "mile") {
            result = inputValue / 1609.34;
        } else if (outputUnit === "millimeter") {
            result = inputValue * 1000;
        } else {
            result = inputValue;
        }
    } else if (inputUnit === "kilometer") {
        if (outputUnit === "meter") {
            result = inputValue * 1000;
        } else if (outputUnit === "mile") {
            result = inputValue / 1.60934;
        } else if (outputUnit === "millimeter") {
            result = inputValue * 1000000;
        } else {
            result = inputValue;
        }
    } else if (inputUnit === "mile") {
        if (outputUnit === "meter") {
            result = inputValue * 1609.34;
        } else if (outputUnit === "kilometer") {
            result = inputValue * 1.60934;
        } else if (outputUnit === "millimeter") {
            result = inputValue * 1609340;
        } else {
            result = inputValue;
        }
    } else if (inputUnit === "millimeter") {
        if (outputUnit === "meter") {
            result = inputValue / 1000;
        } else if (outputUnit === "kilometer") {
            result = inputValue / 1000000;
        } else if (outputUnit === "mile") {
            result = inputValue / 1609340;
        } else {
            result = inputValue;
        }
    }

    document.getElementById("result").innerHTML = result.toFixed(2)+" "+outputUnit;
}