import React, { Component } from 'react';

interface State {
  fahrenheit: string;
  celsius: string;
}

class TemperatureConverter extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      fahrenheit: '',
      celsius: '',
    };
  }

  // Method to handle Fahrenheit input change
  handleFahrenheitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fahrenheit = event.target.value;
    this.setState({ fahrenheit, celsius: this.convertFahrenheitToCelsius(fahrenheit) });
  };

  // Method to handle Celsius input change
  handleCelsiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const celsius = event.target.value;
    this.setState({ celsius, fahrenheit: this.convertCelsiusToFahrenheit(celsius) });
  };

  // Convert Fahrenheit to Celsius
  convertFahrenheitToCelsius(fahrenheit: string): string {
    const f = parseFloat(fahrenheit);
    return isNaN(f) ? '' : ((f - 32) * 5 / 9).toFixed(2);
  }

  // Convert Celsius to Fahrenheit
  convertCelsiusToFahrenheit(celsius: string): string {
    const c = parseFloat(celsius);
    return isNaN(c) ? '' : (c * 9 / 5 + 32).toFixed(2);
  }

  render() {
    return (
      <div>
        <h1>Temperature Converter</h1>
        <div>
          <label>
            Fahrenheit:
            <input
              type="number"
              value={this.state.fahrenheit}
              onChange={this.handleFahrenheitChange}
            />
          </label>
        </div>
        <div>
          <label>
            Celsius:
            <input
              type="number"
              value={this.state.celsius}
              onChange={this.handleCelsiusChange}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default TemperatureConverter;
