# JavaScript Unit Testing with Jasmine

[![Build Status](https://github.com/hkevin01/javascript-unit-test-jasmine/workflows/Jasmine%20Tests/badge.svg)](https://github.com/hkevin01/javascript-unit-test-jasmine/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Jasmine](https://img.shields.io/badge/Testing-Jasmine-8A4182.svg)](https://jasmine.github.io/)

A comprehensive demonstration project for JavaScript unit testing using the Jasmine testing framework. This project showcases behavior-driven development (BDD) principles, testing best practices, and provides practical examples for learning effective testing strategies.

## 🎯 Project Overview

This repository serves as a complete guide and reference for JavaScript unit testing with Jasmine. It includes:

- **Real-world examples** of classes and functions with comprehensive test suites
- **Best practices** for organizing and structuring tests
- **Advanced testing patterns** including spies, mocks, and asynchronous testing
- **CI/CD integration** with GitHub Actions
- **Comprehensive documentation** and guides

## 🚀 Quick Start

### Prerequisites

- Web browser (Chrome, Firefox, Safari, or Edge)
- Git
- Node.js (optional, for npm scripts and CI/CD)

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:hkevin01/javascript-unit-test-jasmine.git
   cd javascript-unit-test-jasmine
   ```

2. **Open in browser:**
   ```bash
   # Open SpecRunner.html in your browser
   open SpecRunner.html
   # or
   firefox SpecRunner.html
   ```

3. **Or use a local server (recommended):**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Then open http://localhost:8000/SpecRunner.html
   ```

## 📁 Project Structure

```
javascript-unit-test-jasmine/
├── .github/                 # GitHub workflows and templates
│   ├── workflows/
│   │   └── test.yml        # CI/CD pipeline
│   └── ISSUE_TEMPLATE.md   # Bug report template
├── .copilot/               # GitHub Copilot configuration
│   └── copilot-instructions.md
├── assets/                 # Static assets
│   ├── css/
│   │   └── jasmine-custom.css  # Custom Jasmine styling
│   ├── images/             # Project images
│   └── lib/                # Third-party libraries
├── docs/                   # Documentation
│   ├── project-plan.md     # Project roadmap
│   └── testing-guide.md    # Comprehensive testing guide
├── spec/                   # Test specifications
│   ├── support/            # Test support files
│   └── *.spec.js          # Test files
├── src/                    # Source code
│   ├── models/
│   │   └── Person.js       # Person class example
│   ├── utils/              # Utility functions
│   └── Calculator.js       # Calculator class example
├── .gitignore             # Git ignore rules
├── SpecRunner.html        # Jasmine test runner
└── README.md              # This file
```

## 🧪 Example Classes

### Calculator Class
A comprehensive calculator with mathematical operations:
- Basic arithmetic (add, subtract, multiply, divide)
- Advanced operations (square root, power)
- Error handling (division by zero, negative square roots)
- Operation history tracking
- Power state management

### Person Class  
An object-oriented example demonstrating:
- Constructor patterns and property management
- Friend and hobby management
- Input validation and error handling
- String manipulation and formatting
- Complex object interactions

## 📚 Learning Path

### 1. **Basic Testing Concepts**
- Understanding describe and it blocks
- Writing your first test
- Basic matchers and assertions

### 2. **Intermediate Patterns**
- Setup and teardown with beforeEach/afterEach
- Testing error conditions
- Custom matchers

### 3. **Advanced Techniques**
- Spies and mocking
- Asynchronous testing
- Integration testing

### 4. **Best Practices**
- Test organization
- Performance considerations
- Maintainable test code

## 🔧 Testing Features Demonstrated

### Core Jasmine Features
- **Describe blocks** for test organization
- **It blocks** for individual specifications
- **Matchers** for assertions (`toEqual`, `toBe`, `toContain`, etc.)
- **Setup/Teardown** with before/after hooks
- **Spies** for function monitoring and mocking
- **Custom matchers** for domain-specific assertions

### Testing Patterns
- **AAA Pattern** (Arrange, Act, Assert)
- **Test isolation** and independence
- **Edge case testing**
- **Error condition testing**
- **Asynchronous code testing**

## 🎨 Custom Styling

The project includes custom CSS styling for the Jasmine test runner with:
- Modern, clean interface
- Responsive design for mobile devices
- Color-coded test results
- Progress indicators
- Enhanced readability

## 🔄 Continuous Integration

Automated testing with GitHub Actions:
- Runs tests on multiple Node.js versions (16.x, 18.x, 20.x)
- Generates coverage reports
- Validates code quality
- Automatic deployment of test results

## 📖 Documentation

- **[Project Plan](docs/project-plan.md)** - Complete project roadmap and objectives
- **[Testing Guide](docs/testing-guide.md)** - Comprehensive guide to writing tests with Jasmine
- **[GitHub Copilot Instructions](.copilot/copilot-instructions.md)** - AI assistance configuration

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- **[Jasmine Framework](https://jasmine.github.io/)** - For the excellent testing framework
- **[Evan Hahn's Tutorial](https://evanhahn.com/how-do-i-jasmine/)** - Original inspiration and guidance
- **[JavaScript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)** - For comprehensive testing guidelines

## 📞 Support

If you have questions or need help:

1. Check the [documentation](docs/)
2. Browse [existing issues](https://github.com/hkevin01/javascript-unit-test-jasmine/issues)
3. Create a [new issue](https://github.com/hkevin01/javascript-unit-test-jasmine/issues/new) using our template

## 🚀 Next Steps

Ready to start testing? Here's what you can do:

1. **Explore the examples** - Look at the Calculator and Person classes
2. **Run the tests** - Open SpecRunner.html and see tests in action
3. **Read the guides** - Check out our comprehensive testing documentation
4. **Write your own tests** - Use our examples as templates for your projects
5. **Contribute** - Help improve this learning resource

---

**Happy Testing! 🧪✨**
