/**
 * Calculator Test Specifications
 * Comprehensive tests for the Calculator class demonstrating various Jasmine features
 */

describe('Calculator', function() {
    let calculator;

    beforeEach(function() {
        calculator = new Calculator();
        calculator.turnOn();
    });

    afterEach(function() {
        calculator.turnOff();
        calculator = null;
    });

    describe('Power Management', function() {
        it('should be off by default', function() {
            const newCalculator = new Calculator();
            expect(newCalculator.isPowerOn()).toBe(false);
        });

        it('should turn on when turnOn() is called', function() {
            const newCalculator = new Calculator();
            newCalculator.turnOn();
            expect(newCalculator.isPowerOn()).toBe(true);
        });

        it('should turn off when turnOff() is called', function() {
            calculator.turnOff();
            expect(calculator.isPowerOn()).toBe(false);
        });

        it('should throw error when performing operations while off', function() {
            calculator.turnOff();
            expect(function() {
                calculator.add(1, 2);
            }).toThrowError('Calculator is off');
        });
    });

    describe('Basic Arithmetic Operations', function() {
        describe('Addition', function() {
            it('should add two positive numbers', function() {
                const result = calculator.add(5, 3);
                expect(result).toEqual(8);
            });

            it('should add positive and negative numbers', function() {
                const result = calculator.add(10, -3);
                expect(result).toEqual(7);
            });

            it('should add two negative numbers', function() {
                const result = calculator.add(-5, -3);
                expect(result).toEqual(-8);
            });

            it('should handle decimal numbers', function() {
                const result = calculator.add(0.1, 0.2);
                expect(result).toBeCloseTo(0.3, 10);
            });

            it('should add zero correctly', function() {
                expect(calculator.add(5, 0)).toEqual(5);
                expect(calculator.add(0, 5)).toEqual(5);
                expect(calculator.add(0, 0)).toEqual(0);
            });
        });

        describe('Subtraction', function() {
            it('should subtract two positive numbers', function() {
                const result = calculator.subtract(10, 3);
                expect(result).toEqual(7);
            });

            it('should handle negative results', function() {
                const result = calculator.subtract(3, 10);
                expect(result).toEqual(-7);
            });

            it('should subtract negative numbers', function() {
                const result = calculator.subtract(5, -3);
                expect(result).toEqual(8);
            });
        });

        describe('Multiplication', function() {
            it('should multiply two positive numbers', function() {
                const result = calculator.multiply(6, 7);
                expect(result).toEqual(42);
            });

            it('should handle multiplication by zero', function() {
                expect(calculator.multiply(5, 0)).toEqual(0);
                expect(calculator.multiply(0, 5)).toEqual(0);
            });

            it('should handle negative numbers', function() {
                expect(calculator.multiply(-3, 4)).toEqual(-12);
                expect(calculator.multiply(-3, -4)).toEqual(12);
            });

            it('should handle decimal multiplication', function() {
                const result = calculator.multiply(0.5, 0.5);
                expect(result).toEqual(0.25);
            });
        });

        describe('Division', function() {
            it('should divide two positive numbers', function() {
                const result = calculator.divide(15, 3);
                expect(result).toEqual(5);
            });

            it('should handle division resulting in decimals', function() {
                const result = calculator.divide(10, 3);
                expect(result).toBeCloseTo(3.333, 3);
            });

            it('should throw error when dividing by zero', function() {
                expect(function() {
                    calculator.divide(10, 0);
                }).toThrowError('Division by zero is not allowed');
            });

            it('should handle negative division', function() {
                expect(calculator.divide(-10, 2)).toEqual(-5);
                expect(calculator.divide(10, -2)).toEqual(-5);
                expect(calculator.divide(-10, -2)).toEqual(5);
            });
        });
    });

    describe('Advanced Operations', function() {
        describe('Square Root', function() {
            it('should calculate square root of positive numbers', function() {
                expect(calculator.sqrt(9)).toEqual(3);
                expect(calculator.sqrt(16)).toEqual(4);
                expect(calculator.sqrt(25)).toEqual(5);
            });

            it('should handle square root of zero', function() {
                expect(calculator.sqrt(0)).toEqual(0);
            });

            it('should handle decimal square roots', function() {
                const result = calculator.sqrt(2);
                expect(result).toBeCloseTo(1.414, 3);
            });

            it('should throw error for negative numbers', function() {
                expect(function() {
                    calculator.sqrt(-4);
                }).toThrowError('Cannot calculate square root of negative number');
            });
        });

        describe('Power', function() {
            it('should calculate power of positive numbers', function() {
                expect(calculator.power(2, 3)).toEqual(8);
                expect(calculator.power(5, 2)).toEqual(25);
            });

            it('should handle power of zero', function() {
                expect(calculator.power(5, 0)).toEqual(1);
                expect(calculator.power(0, 5)).toEqual(0);
            });

            it('should handle negative exponents', function() {
                expect(calculator.power(2, -2)).toEqual(0.25);
            });

            it('should handle fractional exponents', function() {
                const result = calculator.power(9, 0.5);
                expect(result).toEqual(3);
            });
        });
    });

    describe('History Management', function() {
        it('should start with empty history', function() {
            const newCalculator = new Calculator();
            newCalculator.turnOn();
            expect(newCalculator.getHistory()).toEqual([]);
        });

        it('should record operations in history', function() {
            calculator.add(5, 3);
            calculator.multiply(2, 4);
            
            const history = calculator.getHistory();
            expect(history).toHaveLength(2);
            expect(history[0].operation).toBe('add');
            expect(history[0].result).toBe(8);
            expect(history[1].operation).toBe('multiply');
            expect(history[1].result).toBe(8);
        });

        it('should include operands in history', function() {
            calculator.add(5, 3);
            
            const history = calculator.getHistory();
            expect(history[0].operands).toEqual([5, 3]);
        });

        it('should include timestamp in history', function() {
            calculator.add(5, 3);
            
            const history = calculator.getHistory();
            expect(history[0].timestamp).toBeInstanceOf(Date);
        });

        it('should clear history when requested', function() {
            calculator.add(5, 3);
            calculator.multiply(2, 4);
            calculator.clearHistory();
            
            expect(calculator.getHistory()).toEqual([]);
        });

        it('should return last result', function() {
            calculator.add(5, 3);
            calculator.multiply(2, 4);
            
            expect(calculator.getLastResult()).toBe(8);
        });

        it('should return null for last result when no history', function() {
            expect(calculator.getLastResult()).toBeNull();
        });

        it('should clear history when turning on', function() {
            calculator.add(5, 3);
            calculator.turnOff();
            calculator.turnOn();
            
            expect(calculator.getHistory()).toEqual([]);
        });
    });

    describe('Error Handling', function() {
        it('should throw meaningful error messages', function() {
            calculator.turnOff();
            
            expect(function() {
                calculator.add(1, 2);
            }).toThrowError('Calculator is off');
            
            calculator.turnOn();
            
            expect(function() {
                calculator.divide(1, 0);
            }).toThrowError('Division by zero is not allowed');
            
            expect(function() {
                calculator.sqrt(-1);
            }).toThrowError('Cannot calculate square root of negative number');
        });
    });
});
