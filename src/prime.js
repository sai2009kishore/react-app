import React from 'react';

class PrimeCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0, message: "Enter a number to check if it is Prime" };
    }

    render() {
        return (
            <div>
                <input type="number" name="num" value={this.state.number} autoFocus onChange={this.handleChange}></input>
                <p>{this.state.message}</p>
            </div>
        );
    }

    handleChange = (event) => {
        const val = this.isPrime(event.target.value);
        this.setState({ number: event.target.value, message: val});
    }

    isPrime = (number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return "Not Prime";
            }
        }
        return "Prime";
    }
}

export default PrimeCalculator;