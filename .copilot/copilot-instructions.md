# GitHub Copilot Instructions for JavaScript Unit Testing with Jasmine

## Project Context
This is a JavaScript unit testing project using the Jasmine testing framework. The project demonstrates behavior-driven development (BDD) principles and various testing patterns.

## Code Style Guidelines

### JavaScript Standards
- Use ES6+ syntax where appropriate
- Follow camelCase naming conventions
- Use descriptive variable and function names
- Include JSDoc comments for functions and classes

### Jasmine Testing Patterns
- Use `describe()` blocks to group related tests (test suites)
- Use `it()` blocks for individual test specifications
- Write test descriptions in plain English that explain the expected behavior
- Use `beforeEach()` and `afterEach()` for setup and teardown
- Group assertions logically within test blocks

### Test Organization
- One test file per source file (e.g., `Calculator.js` → `CalculatorSpec.js`)
- Place test files in the `spec/` directory
- Use descriptive test names that explain what is being tested
- Follow the AAA pattern: Arrange, Act, Assert

## Preferred Testing Approaches

### Matchers to Use
```javascript
// Equality and truthiness
expect(value).toEqual(expected);
expect(value).toBe(expected);
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();

// Collections and strings
expect(array).toContain(item);
expect(string).toMatch(/pattern/);
expect(array).toHaveLength(3);

// Spies and function calls
expect(spy).toHaveBeenCalled();
expect(spy).toHaveBeenCalledWith(arg1, arg2);
expect(spy).toHaveBeenCalledTimes(2);
```

### Spy Usage Patterns
```javascript
// Spy on existing methods
spyOn(object, 'methodName');
spyOn(object, 'methodName').and.returnValue(mockValue);
spyOn(object, 'methodName').and.callThrough();

// Create spy functions
const spy = jasmine.createSpy('spyName');
const spy = jasmine.createSpy('spyName').and.returnValue(value);
```

### Async Testing
```javascript
// For promises
it('should handle async operations', async function() {
  const result = await asyncFunction();
  expect(result).toEqual(expectedValue);
});

// For callbacks with done()
it('should handle callbacks', function(done) {
  asyncFunction((result) => {
    expect(result).toEqual(expectedValue);
    done();
  });
});
```

## File Structure Preferences
- Source files in `src/` directory
- Test files in `spec/` directory with `Spec.js` suffix
- Utility functions in `src/utils/`
- Model classes in `src/models/`
- Test helpers in `spec/support/`

## Documentation Standards
- Include JSDoc comments for all public functions
- Write clear README files with setup instructions
- Document test scenarios and edge cases
- Provide examples of usage patterns

## Best Practices to Follow
1. Write tests first (TDD approach when applicable)
2. Keep tests simple and focused on one behavior
3. Use descriptive test names
4. Mock external dependencies
5. Test both positive and negative cases
6. Include edge case testing
7. Maintain test independence (no shared state)
8. Use setup/teardown methods to reduce duplication

## Avoid These Patterns
- Don't test implementation details, focus on behavior
- Don't write overly complex test setups
- Avoid testing multiple behaviors in a single test
- Don't ignore failing tests
- Avoid magic numbers or strings in tests
- Don't test framework code or third-party libraries

## Suggested Code Completions
When writing Jasmine tests, suggest:
- Proper describe/it block structure
- Appropriate matchers for the context
- Spy setup for function testing
- Async/await patterns for promises
- Custom matcher creation when needed
- Proper error testing with `toThrow()`
