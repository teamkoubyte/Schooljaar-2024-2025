document.addEventListener("DOMContentLoaded", function() {
    function calculate(bewerking) {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        let result;

        if (isNaN(num1) || isNaN(num2)) {
            result = "Gelieven geldige cijfers te gebruiken";
        } else {
            switch (bewerking) {
                case 'optellen':
                    result = num1 + num2;
                    break;
                case 'aftrekken':
                    result = num1 - num2;
                    break;
                case 'vermenigvuldigen':
                    result = num1 * num2;
                    break;
                case 'delen':
                    result = num2 !== 0 ? num1 / num2 : "Je kan niet delen door 0";
                    break;
                default:
                    result = "Ongeldige bewerking";
            }
        }

        document.getElementById('resultaat').innerText = `Resultaat: ${result}`;
    }
    window.calculate = calculate;
});