# 🧮 Project Calculator 🧮

## 📋 Inleiding

> 💡 **Doel:** Maak een volledig functionele calculator webapp met een mooie, overzichtelijke interface en verschillende rekenfuncties.

Een calculator is een perfecte manier om je JavaScript, HTML en CSS vaardigheden te combineren. We gaan een professionele calculator bouwen die niet alleen goed werkt, maar er ook fantastisch uitziet!

![Calculator Preview](https://i.imgur.com/Calculator-Example.png)

## 🏗️ Project Structuur

### 📁 Bestandenorganisatie

```
Project-Calculator/
├── index.html          # Hoofdpagina
├── css/
│   ├── style.css        # Hoofdstijlen
│   └── responsive.css   # Responsieve styling
├── js/
│   ├── calculator.js    # Calculator logica
│   └── utils.js         # Hulpfuncties
└── assets/
    └── images/          # Afbeeldingen (optioneel)
```

## 🎯 HTML Structuur

### 1️⃣ Basis HTML Template

```html
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🧮 Mijn Calculator</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <div class="container">
        <!-- Calculator Container -->
        <div class="calculator">
            <!-- Display -->
            <div class="display">
                <div class="previous-operand" id="previous-operand"></div>
                <div class="current-operand" id="current-operand">0</div>
            </div>
            
            <!-- Buttons -->
            <div class="buttons">
                <!-- Functie knoppen -->
                <button class="btn clear" onclick="clearDisplay()">C</button>
                <button class="btn clear" onclick="clearEntry()">CE</button>
                <button class="btn operation" onclick="deleteLast()">⌫</button>
                <button class="btn operation" onclick="calculate('/')" data-operation="/">÷</button>
                
                <!-- Cijfer knoppen -->
                <button class="btn number" onclick="appendNumber('7')">7</button>
                <button class="btn number" onclick="appendNumber('8')">8</button>
                <button class="btn number" onclick="appendNumber('9')">9</button>
                <button class="btn operation" onclick="calculate('*')" data-operation="*">×</button>
                
                <button class="btn number" onclick="appendNumber('4')">4</button>
                <button class="btn number" onclick="appendNumber('5')">5</button>
                <button class="btn number" onclick="appendNumber('6')">6</button>
                <button class="btn operation" onclick="calculate('-')" data-operation="-">-</button>
                
                <button class="btn number" onclick="appendNumber('1')">1</button>
                <button class="btn number" onclick="appendNumber('2')">2</button>
                <button class="btn number" onclick="appendNumber('3')">3</button>
                <button class="btn operation" onclick="calculate('+')" data-operation="+">+</button>
                
                <button class="btn number zero" onclick="appendNumber('0')">0</button>
                <button class="btn number" onclick="appendNumber('.')">.</button>
                <button class="btn equals" onclick="executeCalculation()">=</button>
            </div>
        </div>
        
        <!-- Extra Functies -->
        <div class="extra-functions">
            <h3>🔧 Extra Functies</h3>
            <div class="function-grid">
                <button class="btn-extra" onclick="calculateSquare()">x²</button>
                <button class="btn-extra" onclick="calculateSquareRoot()">√x</button>
                <button class="btn-extra" onclick="calculatePercentage()">%</button>
                <button class="btn-extra" onclick="toggleSign()">±</button>
            </div>
        </div>
    </div>
    
    <script src="js/calculator.js"></script>
    <script src="js/utils.js"></script>
</body>
</html>
```

## 🎨 CSS Styling

### 1️⃣ Hoofdstijlen (style.css)

```css
/* Reset en basis styling */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 400px;
    width: 100%;
}

/* Calculator styling */
.calculator {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Display styling */
.display {
    background: #2d3748;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 20px;
    min-height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}

.previous-operand {
    color: #a0aec0;
    font-size: 1rem;
    min-height: 1.2rem;
}

.current-operand {
    color: white;
    font-size: 2rem;
    font-weight: bold;
    word-wrap: break-word;
    word-break: break-all;
}

/* Button grid */
.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
}

/* Button styling */
.btn {
    padding: 20px;
    border: none;
    border-radius: 12px;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    user-select: none;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* Number buttons */
.btn.number {
    background: #f7fafc;
    color: #2d3748;
    border: 2px solid #e2e8f0;
}

.btn.number:hover {
    background: #edf2f7;
    border-color: #cbd5e0;
}

/* Operation buttons */
.btn.operation {
    background: #4299e1;
    color: white;
}

.btn.operation:hover {
    background: #3182ce;
}

/* Clear buttons */
.btn.clear {
    background: #fc8181;
    color: white;
}

.btn.clear:hover {
    background: #f56565;
}

/* Equals button */
.btn.equals {
    background: #48bb78;
    color: white;
    grid-column: span 2;
}

.btn.equals:hover {
    background: #38a169;
}

/* Zero button (spans 2 columns) */
.btn.zero {
    grid-column: span 2;
}

/* Extra functions styling */
.extra-functions {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.extra-functions h3 {
    color: #2d3748;
    margin-bottom: 15px;
    text-align: center;
}

.function-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.btn-extra {
    padding: 15px;
    border: none;
    border-radius: 10px;
    background: #805ad5;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn-extra:hover {
    background: #7c3aed;
    transform: translateY(-2px);
}
```

### 2️⃣ Responsieve Styling (responsive.css)

```css
/* Tablet styling */
@media (max-width: 768px) {
    .container {
        max-width: 350px;
    }
    
    .btn {
        padding: 18px;
        font-size: 1.1rem;
    }
    
    .current-operand {
        font-size: 1.8rem;
    }
}

/* Mobile styling */
@media (max-width: 480px) {
    body {
        padding: 10px;
    }
    
    .container {
        max-width: 320px;
    }
    
    .calculator,
    .extra-functions {
        padding: 15px;
    }
    
    .btn {
        padding: 15px;
        font-size: 1rem;
    }
    
    .current-operand {
        font-size: 1.6rem;
    }
    
    .function-grid {
        grid-template-columns: 1fr;
    }
}
```

## ⚙️ JavaScript Functionaliteit

### 1️⃣ Calculator Logica (calculator.js)

```javascript
// Calculator state
let currentOperand = '0';
let previousOperand = '';
let operation = null;
let waitingForNewOperand = false;

// Display elements
const currentOperandElement = document.getElementById('current-operand');
const previousOperandElement = document.getElementById('previous-operand');

// Update display
function updateDisplay() {
    currentOperandElement.textContent = currentOperand;
    
    if (operation != null) {
        previousOperandElement.textContent = `${previousOperand} ${getOperationSymbol(operation)}`;
    } else {
        previousOperandElement.textContent = '';
    }
}

// Get operation symbol for display
function getOperationSymbol(op) {
    const symbols = {
        '+': '+',
        '-': '-',
        '*': '×',
        '/': '÷'
    };
    return symbols[op] || op;
}

// Append number to current operand
function appendNumber(number) {
    if (waitingForNewOperand) {
        currentOperand = number;
        waitingForNewOperand = false;
    } else {
        if (number === '.' && currentOperand.includes('.')) {
            return; // Prevent multiple decimal points
        }
        
        currentOperand = currentOperand === '0' ? number : currentOperand + number;
    }
    
    updateDisplay();
}

// Set operation
function calculate(nextOperation) {
    const inputValue = parseFloat(currentOperand);
    
    if (previousOperand === '') {
        previousOperand = inputValue;
    } else if (operation) {
        const currentValue = previousOperand || 0;
        const newValue = performCalculation(currentValue, inputValue, operation);
        
        currentOperand = String(newValue);
        previousOperand = newValue;
    }
    
    waitingForNewOperand = true;
    operation = nextOperation;
    updateDisplay();
}

// Execute calculation (equals button)
function executeCalculation() {
    const inputValue = parseFloat(currentOperand);
    
    if (previousOperand !== '' && operation) {
        const currentValue = previousOperand;
        const newValue = performCalculation(currentValue, inputValue, operation);
        
        currentOperand = String(newValue);
        previousOperand = '';
        operation = null;
        waitingForNewOperand = true;
        
        updateDisplay();
    }
}

// Perform the actual calculation
function performCalculation(firstOperand, secondOperand, operation) {
    switch (operation) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            if (secondOperand === 0) {
                alert('Delen door nul is niet mogelijk!');
                return firstOperand;
            }
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}

// Clear display completely
function clearDisplay() {
    currentOperand = '0';
    previousOperand = '';
    operation = null;
    waitingForNewOperand = false;
    updateDisplay();
}

// Clear current entry only
function clearEntry() {
    currentOperand = '0';
    updateDisplay();
}

// Delete last character
function deleteLast() {
    if (currentOperand.length > 1) {
        currentOperand = currentOperand.slice(0, -1);
    } else {
        currentOperand = '0';
    }
    updateDisplay();
}

// Extra functions
function calculateSquare() {
    const value = parseFloat(currentOperand);
    currentOperand = String(value * value);
    waitingForNewOperand = true;
    updateDisplay();
}

function calculateSquareRoot() {
    const value = parseFloat(currentOperand);
    if (value < 0) {
        alert('Wortel van een negatief getal is niet mogelijk!');
        return;
    }
    currentOperand = String(Math.sqrt(value));
    waitingForNewOperand = true;
    updateDisplay();
}

function calculatePercentage() {
    const value = parseFloat(currentOperand);
    currentOperand = String(value / 100);
    waitingForNewOperand = true;
    updateDisplay();
}

function toggleSign() {
    if (currentOperand !== '0') {
        if (currentOperand.startsWith('-')) {
            currentOperand = currentOperand.slice(1);
        } else {
            currentOperand = '-' + currentOperand;
        }
        updateDisplay();
    }
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9' || event.key === '.') {
        appendNumber(event.key);
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        calculate(event.key);
    } else if (event.key === 'Enter' || event.key === '=') {
        executeCalculation();
    } else if (event.key === 'Escape') {
        clearDisplay();
    } else if (event.key === 'Backspace') {
        deleteLast();
    }
});

// Initialize display
updateDisplay();
```

### 2️⃣ Hulpfuncties (utils.js)

```javascript
// Utility functions for the calculator

// Format number for display
function formatNumber(number) {
    // Handle very long numbers
    if (number.toString().length > 12) {
        return parseFloat(number).toExponential(6);
    }
    
    // Handle decimal places
    if (number % 1 !== 0) {
        return parseFloat(number.toFixed(8));
    }
    
    return number;
}

// Check if number is valid
function isValidNumber(value) {
    return !isNaN(value) && isFinite(value);
}

// Add animation to buttons
function addButtonAnimation() {
    const buttons = document.querySelectorAll('.btn, .btn-extra');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    addButtonAnimation();
});

// History functionality (optional enhancement)
let calculationHistory = [];

function addToHistory(calculation, result) {
    calculationHistory.push({
        calculation: calculation,
        result: result,
        timestamp: new Date()
    });
    
    // Keep only last 10 calculations
    if (calculationHistory.length > 10) {
        calculationHistory.shift();
    }
}

function showHistory() {
    if (calculationHistory.length === 0) {
        alert('Geen rekengeschiedenis beschikbaar.');
        return;
    }
    
    let historyText = 'Rekengeschiedenis:\n\n';
    calculationHistory.forEach((item, index) => {
        historyText += `${index + 1}. ${item.calculation} = ${item.result}\n`;
    });
    
    alert(historyText);
}

// Memory functions (optional enhancement)
let memoryValue = 0;

function memoryStore() {
    memoryValue = parseFloat(currentOperand);
    showMessage('Getal opgeslagen in geheugen');
}

function memoryRecall() {
    currentOperand = String(memoryValue);
    waitingForNewOperand = true;
    updateDisplay();
    showMessage('Getal uit geheugen opgehaald');
}

function memoryClear() {
    memoryValue = 0;
    showMessage('Geheugen gewist');
}

function memoryAdd() {
    memoryValue += parseFloat(currentOperand);
    showMessage('Getal toegevoegd aan geheugen');
}

// Show temporary message
function showMessage(message) {
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4299e1;
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        z-index: 1000;
        font-size: 14px;
    `;
    
    document.body.appendChild(messageElement);
    
    // Remove after 2 seconds
    setTimeout(() => {
        document.body.removeChild(messageElement);
    }, 2000);
}
```

## 🎯 Functionaliteiten Overzicht

### ✅ Basis Functies

| 🔢 Functie | Beschrijving |
|------------|--------------|
| **Cijfers 0-9** | Invoer van getallen |
| **Decimalen** | Kommagetallen ondersteuning |
| **Basis operaties** | +, -, ×, ÷ |
| **Gelijk-teken** | Berekening uitvoeren |
| **Clear (C)** | Alles wissen |
| **Clear Entry (CE)** | Huidige invoer wissen |
| **Backspace** | Laatste cijfer verwijderen |

### 🚀 Geavanceerde Functies

| ⚙️ Functie | JavaScript Code | Beschrijving |
|------------|-----------------|--------------|
| **Kwadraat** | `x * x` | Getal tot de macht 2 |
| **Wortel** | `Math.sqrt(x)` | Vierkantswortel |
| **Percentage** | `x / 100` | Percentage berekening |
| **Plus/Min** | `±` | Teken omdraaien |
| **Toetsenbord** | Event listeners | Sneltoetsen ondersteuning |

## 🎨 Styling Tips

### 1️⃣ Kleurenschema's

```css
/* Donker thema */
.dark-theme {
    --bg-color: #1a202c;
    --card-bg: #2d3748;
    --text-color: #ffffff;
    --accent-color: #4299e1;
}

/* Licht thema */
.light-theme {
    --bg-color: #f7fafc;
    --card-bg: #ffffff;
    --text-color: #2d3748;
    --accent-color: #4299e1;
}
```

### 2️⃣ Animaties

```css
/* Button hover animaties */
.btn {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Display typing effect */
.current-operand {
    animation: typewriter 0.3s ease-in-out;
}

@keyframes typewriter {
    from { opacity: 0; }
    to { opacity: 1; }
}
```

## 🔧 Uitbreidingsmogelijkheden

### 1️⃣ Wetenschappelijke Functies

```javascript
// Trigonometrische functies
function calculateSin() {
    const value = parseFloat(currentOperand);
    currentOperand = String(Math.sin(value * Math.PI / 180));
    updateDisplay();
}

function calculateCos() {
    const value = parseFloat(currentOperand);
    currentOperand = String(Math.cos(value * Math.PI / 180));
    updateDisplay();
}

function calculateTan() {
    const value = parseFloat(currentOperand);
    currentOperand = String(Math.tan(value * Math.PI / 180));
    updateDisplay();
}
```

### 2️⃣ Geschiedenis Functie

```javascript
// Berekeningen opslaan
function saveCalculation(expression, result) {
    const history = JSON.parse(localStorage.getItem('calculatorHistory') || '[]');
    history.push({
        expression: expression,
        result: result,
        date: new Date().toLocaleString()
    });
    localStorage.setItem('calculatorHistory', JSON.stringify(history));
}
```

### 3️⃣ Thema Schakelaar

```javascript
// Thema wisselen
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Thema laden
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});
```

## 📱 Responsive Design

### 📊 Breakpoints

| 📱 Device | Breedte | Aanpassingen |
|-----------|---------|--------------|
| **Desktop** | > 768px | Volledige layout |
| **Tablet** | 481-768px | Kleinere buttons |
| **Mobile** | < 480px | Gestapelde layout |

## 🎯 Beste Praktijken

### ✅ Do's

- ✅ Gebruik semantische HTML
- ✅ Voeg toetsenbord ondersteuning toe
- ✅ Maak het responsive
- ✅ Valideer gebruikersinvoer
- ✅ Voeg foutafhandeling toe
- ✅ Test op verschillende apparaten

### ❌ Don'ts

- ❌ Vergeet niet error handling
- ❌ Maak buttons te klein op mobile
- ❌ Gebruik eval() voor berekeningen
- ❌ Vergeet accessibility
- ❌ Maak het te complex

## 🚀 Extra Challenges

### 🏆 Niveau 1: Basis
- [ ] Werkende calculator met basis operaties
- [ ] Mooie styling
- [ ] Responsive design

### 🏆 Niveau 2: Gemiddeld
- [ ] Toetsenbord ondersteuning
- [ ] Geavanceerde functies (√, x², %)
- [ ] Animaties en overgangen

### 🏆 Niveau 3: Gevorderd
- [ ] Wetenschappelijke functies
- [ ] Geschiedenis opslaan
- [ ] Thema schakelaar
- [ ] Unit converter

## 💡 Tips voor Succes

> 🎯 **Pro Tip:** Begin eenvoudig en bouw stap voor stap uit. Een werkende basis calculator is beter dan een incomplete geavanceerde versie!

1. **📐 Plan je design eerst** - Schets je layout voordat je begint te coderen
2. **🧪 Test vaak** - Test elke functie direct na implementatie
3. **📱 Mobile-first** - Begin met mobile design en schaal op
4. **🎨 Consistente styling** - Gebruik een duidelijk kleurenschema
5. **⌨️ Denk aan accessibility** - Voeg toetsenbord ondersteuning toe

---

*Veel plezier met het bouwen van je calculator! 🧮✨*
