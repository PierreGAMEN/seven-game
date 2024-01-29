document.addEventListener('DOMContentLoaded', () => {
    const valeurDisplay = document.getElementById('valeur');
    const maxLength = 6; // Set your desired maximum length
    const code = 173011
    const greenLight = document.querySelector('.led-green');
    const redLight = document.querySelector('.led-red');
    const container = document.querySelector('#content-calculatrice')
    const bip = document.querySelector('.bip')

    // Function to clear the display value
    function clearValue() {
        valeurDisplay.textContent = '0';
    }

    const buttonBip = (element) => {
        element.style.display = "block"
        setTimeout(() => {
        element.style.display = "none"
        }, 500)
    }

    function codeWorks() {
        const enteredCode = parseInt(valeurDisplay.textContent);
        if (!isNaN(enteredCode) && enteredCode === code) {
            valeurDisplay.textContent = 'Good';
            greenLight.style.backgroundColor = "green"
            setTimeout(() => {
                greenLight.style.backgroundColor = ""
                valeurDisplay.textContent = '0';
                window.location.href = '/final';
            }, 3000);
        } else {
            valeurDisplay.textContent = 'Error';
            redLight.style.backgroundColor = "red"
            setTimeout(() => {
                valeurDisplay.textContent = '0';
                redLight.style.backgroundColor = ""
            }, 2000);
        }
    }

    function addValue(value) {
        if (valeurDisplay.textContent.length >= maxLength) {
            valeurDisplay.textContent = 'Error';
            redLight.style.backgroundColor = "red"
            setTimeout(() => {
                valeurDisplay.textContent = '0';
                redLight.style.backgroundColor = "";
            }, 2000);
        }

        if (valeurDisplay.textContent === '0') {
            valeurDisplay.textContent = value;
        } else {
            valeurDisplay.textContent += value;
        }
    }

    // Event listener for AC (clear) button
    document.getElementById('clearButton').addEventListener('click', clearValue);

    // Event listeners for digit buttons
    const digitButtons = document.querySelectorAll('.digitButton');
    digitButtons.forEach(button => {
        button.addEventListener('click', () => {addValue(button.textContent); buttonBip(bip)} );
    });

    // Event listener for *
    document.getElementById('multiplyButton').addEventListener('click', codeWorks);

        // Create a button with the class 'buttonOut'
        const buttonOut = document.createElement('div');
        buttonOut.className = 'buttonOut';
        buttonOut.innerText = 'Revenir à la vue précédente';
    
        // Append the button to an element with the class 'container'
        container.appendChild(buttonOut);
    
        // Add a click event listener to the button
        buttonOut.addEventListener('click', () => {
            window.location.href = '/epreuve4';
        });
});
