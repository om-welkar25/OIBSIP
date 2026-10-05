const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");

const errorMessage = document.getElementById("errorMessage");

const celsiusResult = document.getElementById("celsiusResult");
const fahrenheitResult = document.getElementById("fahrenheitResult");
const kelvinResult = document.getElementById("kelvinResult");


convertBtn.addEventListener("click", function () {

    const temperature = Number(temperatureInput.value);
    const unit = unitSelect.value;

    // Clear previous error
    errorMessage.textContent = "";

    // Check empty or invalid input
    if (
        temperatureInput.value.trim() === "" ||
        !Number.isFinite(temperature)
    ) {
        errorMessage.textContent = "Please enter a valid temperature.";
        return;
    }


    let celsius;
    let fahrenheit;
    let kelvin;


    // Celsius input
    if (unit === "celsius") {

        if (temperature < -273.15) {
            errorMessage.textContent =
                "Temperature cannot be below absolute zero (-273.15°C).";
            return;
        }

        celsius = temperature;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = celsius + 273.15;
    }


    // Fahrenheit input
    else if (unit === "fahrenheit") {

        if (temperature < -459.67) {
            errorMessage.textContent =
                "Temperature cannot be below absolute zero (-459.67°F).";
            return;
        }

        fahrenheit = temperature;
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    }


    // Kelvin input
    else if (unit === "kelvin") {

        if (temperature < 0) {
            errorMessage.textContent =
                "Kelvin temperature cannot be below 0 K.";
            return;
        }

        kelvin = temperature;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;
    }


    // Display results
    celsiusResult.textContent =
        `${celsius.toFixed(2)} °C`;

    fahrenheitResult.textContent =
        `${fahrenheit.toFixed(2)} °F`;

    kelvinResult.textContent =
        `${kelvin.toFixed(2)} K`;

});