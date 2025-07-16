# Testing Guide for JavaScript Unit Testing with Jasmine

## Overview
This guide provides comprehensive instructions for writing and running tests using Jasmine in this project.

## Getting Started

### Prerequisites
- Basic knowledge of JavaScript
- Understanding of testing concepts
- Node.js installed (optional, for npm scripts)

### Running Tests
1. **Browser Method**: Open `SpecRunner.html` in your web browser
2. **Command Line**: Run `npm test` (if Node.js is set up)

## Writing Tests

### Basic Test Structure
```javascript
describe('Component Name', function() {
    it('should do something specific', function() {
        // Arrange
        const input = 'test input';
        
        // Act
        const result = functionUnderTest(input);
        
        // Assert
        expect(result).toEqual('expected output');
    });
});
```

### Test Organization

#### Describe Blocks (Test Suites)
- Group related tests together
- Use clear, descriptive names
- Can be nested for better organization

```javascript
describe('Calculator', function() {
    describe('addition', function() {
        it('should add two positive numbers', function() {
            // test implementation
        });
        
        it('should handle negative numbers', function() {
            // test implementation
        });
    });
    
    describe('division', function() {
        it('should divide numbers correctly', function() {
            // test implementation
        });
        
        it('should throw error when dividing by zero', function() {
            // test implementation
        });
    });
});
```

#### It Blocks (Specifications)
- Each `it` block should test one specific behavior
- Write descriptive test names
- Follow the format: "should [expected behavior]"

### Common Matchers

#### Equality Matchers
```javascript
expect(value).toEqual(expected);        // Deep equality
expect(value).toBe(expected);           // Same object reference
expect(value).not.toEqual(unexpected);  // Negation
```

#### Truthiness Matchers
```javascript
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();
expect(value).toBeDefined();
```

#### String and Array Matchers
```javascript
expect(string).toContain('substring');
expect(string).toMatch(/pattern/);
expect(array).toContain(item);
expect(array).toHaveLength(3);
```

#### Exception Matchers
```javascript
expect(function() {
    riskyFunction();
}).toThrow();

expect(function() {
    riskyFunction();
}).toThrowError('Specific error message');
```

### Setup and Teardown

#### beforeEach and afterEach
```javascript
describe('MyClass', function() {
    let instance;
    
    beforeEach(function() {
        instance = new MyClass();
    });
    
    afterEach(function() {
        instance = null;
    });
    
    it('should initialize properly', function() {
        expect(instance).toBeDefined();
    });
});
```

#### beforeAll and afterAll
```javascript
describe('Database Tests', function() {
    beforeAll(function() {
        // Expensive setup that runs once
        setupDatabase();
    });
    
    afterAll(function() {
        // Cleanup that runs once
        teardownDatabase();
    });
});
```

### Spies and Mocking

#### Basic Spies
```javascript
describe('Event Handler', function() {
    it('should call callback when event occurs', function() {
        const callback = jasmine.createSpy('callback');
        const handler = new EventHandler(callback);
        
        handler.triggerEvent();
        
        expect(callback).toHaveBeenCalled();
    });
});
```

#### Spying on Existing Methods
```javascript
describe('User Service', function() {
    it('should log user activity', function() {
        const user = new User();
        spyOn(user, 'log');
        
        user.performAction();
        
        expect(user.log).toHaveBeenCalledWith('action performed');
    });
});
```

#### Spy Return Values
```javascript
describe('API Client', function() {
    it('should handle API response', function() {
        const apiClient = new ApiClient();
        spyOn(apiClient, 'makeRequest').and.returnValue(Promise.resolve({data: 'test'}));
        
        const result = apiClient.getData();
        
        expect(result).toBeDefined();
    });
});
```

### Testing Asynchronous Code

#### Promises with async/await
```javascript
describe('Async Function', function() {
    it('should resolve with correct data', async function() {
        const result = await asyncFunction();
        expect(result).toEqual('expected data');
    });
    
    it('should reject with error', async function() {
        try {
            await failingAsyncFunction();
            fail('Expected function to throw');
        } catch (error) {
            expect(error.message).toContain('expected error');
        }
    });
});
```

#### Callbacks with done()
```javascript
describe('Callback Function', function() {
    it('should call callback with result', function(done) {
        callbackFunction(function(result) {
            expect(result).toBeDefined();
            done();
        });
    });
});
```

### Custom Matchers

#### Creating Custom Matchers
```javascript
beforeEach(function() {
    jasmine.addMatchers({
        toBeWithinRange: function() {
            return {
                compare: function(actual, min, max) {
                    return {
                        pass: actual >= min && actual <= max,
                        message: `Expected ${actual} to be between ${min} and ${max}`
                    };
                }
            };
        }
    });
});

it('should be within range', function() {
    expect(5).toBeWithinRange(1, 10);
});
```

## Best Practices

### Test Organization
1. **One test file per source file**
2. **Group related tests in describe blocks**
3. **Use clear, descriptive test names**
4. **Keep tests independent**

### Test Writing
1. **Follow AAA pattern** (Arrange, Act, Assert)
2. **Test one thing at a time**
3. **Use meaningful assertions**
4. **Test both positive and negative cases**

### Code Coverage
1. **Aim for high coverage** (>90%)
2. **Focus on critical code paths**
3. **Don't sacrifice quality for coverage**

### Performance
1. **Keep tests fast**
2. **Use beforeEach for common setup**
3. **Mock external dependencies**
4. **Avoid unnecessary test data**

## Common Patterns

### Testing Classes
```javascript
describe('Person', function() {
    let person;
    
    beforeEach(function() {
        person = new Person('John', 'Doe');
    });
    
    describe('constructor', function() {
        it('should set first name', function() {
            expect(person.firstName).toBe('John');
        });
        
        it('should set last name', function() {
            expect(person.lastName).toBe('Doe');
        });
    });
    
    describe('getFullName', function() {
        it('should return full name', function() {
            expect(person.getFullName()).toBe('John Doe');
        });
    });
});
```

### Testing Error Conditions
```javascript
describe('Calculator', function() {
    describe('divide', function() {
        it('should throw error when dividing by zero', function() {
            const calculator = new Calculator();
            
            expect(function() {
                calculator.divide(10, 0);
            }).toThrowError('Division by zero');
        });
    });
});
```

### Testing Event Handlers
```javascript
describe('Button Component', function() {
    it('should call onClick handler when clicked', function() {
        const handler = jasmine.createSpy('clickHandler');
        const button = new Button(handler);
        
        button.click();
        
        expect(handler).toHaveBeenCalled();
    });
});
```

## Debugging Tests

### Common Issues
1. **Async tests timing out**: Use proper async patterns
2. **Spy not being called**: Check method names and timing
3. **Unexpected values**: Use console.log for debugging
4. **Test interference**: Ensure proper cleanup

### Debugging Tips
1. **Use fit() and fdescribe()** to focus on specific tests
2. **Add console.log statements** for debugging
3. **Check the browser console** for errors
4. **Use browser dev tools** for breakpoints

## Resources
- [Jasmine Documentation](https://jasmine.github.io/)
- [Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [MDN JavaScript Testing](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
