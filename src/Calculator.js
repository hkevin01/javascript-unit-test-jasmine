/**
 * Calculator class demonstrating various mathematical operations
 * for unit testing with Jasmine
 */
class Calculator {
    constructor() {
        this.history = [];
        this.isOn = false;
    }

    /**
     * Turn the calculator on
     */
    turnOn() {
        this.isOn = true;
        this.history = [];
    }

    /**
     * Turn the calculator off
     */
    turnOff() {
        this.isOn = false;
    }

    /**
     * Check if calculator is on
     * @returns {boolean} True if calculator is on
     */
    isPowerOn() {
        return this.isOn;
    }

    /**
     * Add two numbers
     * @param {number} a - First number
     * @param {number} b - Second number
     * @returns {number} Sum of a and b
     */
    add(a, b) {
        if (!this.isOn) {
            throw new Error('Calculator is off');
        }
        
        const result = a + b;
        this.addToHistory('add', a, b, result);
        return result;
    }

    /**
     * Subtract two numbers
     * @param {number} a - First number
     * @param {number} b - Second number
     * @returns {number} Difference of a and b
     */
    subtract(a, b) {
        if (!this.isOn) {
            throw new Error('Calculator is off');
        }
        
        const result = a - b;
        this.addToHistory('subtract', a, b, result);
        return result;
    }

    /**
     * Multiply two numbers
     * @param {number} a - First number
     * @param {number} b - Second number
     * @returns {number} Product of a and b
     */
    multiply(a, b) {
        if (!this.isOn) {
            throw new Error('Calculator is off');
        }
        
        const result = a * b;
        this.addToHistory('multiply', a, b, result);
        return result;
    }

    /**
     * Divide two numbers
     * @param {number} a - Dividend
     * @param {number} b - Divisor
     * @returns {number} Quotient of a and b
     * @throws {Error} When dividing by zero
     */
    divide(a, b) {
        if (!this.isOn) {
            throw new Error('Calculator is off');
        }
        
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        
        const result = a / b;
        this.addToHistory('divide', a, b, result);
        return result;
    }

    /**
     * Calculate square root of a number
     * @param {number} a - Number to find square root of
     * @returns {number} Square root of a
     * @throws {Error} When calculating square root of negative number
     */
    sqrt(a) {
        if (!this.isOn) {
            throw new Error('Calculator is off');
        }
        
        if (a < 0) {
            throw new Error('Cannot calculate square root of negative number');
        }
        
        const result = Math.sqrt(a);
        this.addToHistory('sqrt', a, null, result);
        return result;
    }

    /**
     * Calculate power of a number
     * @param {number} base - Base number
     * @param {number} exponent - Exponent
     * @returns {number} Base raised to the power of exponent
     */
    power(base, exponent) {
        if (!this.isOn) {
            throw new Error('Calculator is off');
        }
        
        const result = Math.pow(base, exponent);
        this.addToHistory('power', base, exponent, result);
        return result;
    }

    /**
     * Get calculation history
     * @returns {Array} Array of calculation history
     */
    getHistory() {
        return [...this.history]; // Return a copy to prevent external modification
    }

    /**
     * Clear calculation history
     */
    clearHistory() {
        this.history = [];
    }

    /**
     * Get last calculation result
     * @returns {number|null} Last calculation result or null if no history
     */
    getLastResult() {
        return this.history.length > 0 ? this.history[this.history.length - 1].result : null;
    }

    /**
     * Add operation to history
     * @private
     * @param {string} operation - Operation name
     * @param {number} a - First operand
     * @param {number|null} b - Second operand (null for unary operations)
     * @param {number} result - Operation result
     */
    addToHistory(operation, a, b, result) {
        this.history.push({
            operation,
            operands: b !== null ? [a, b] : [a],
            result,
            timestamp: new Date()
        });
    }
}
