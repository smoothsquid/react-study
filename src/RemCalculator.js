import { Component } from "react";

class RemCalculator extends Component {

    static defaultProps = {
        title: "Rem Calculator"
    };
    state = {
        fontSize: 16,
        inputData: 0,
        result: 0,
    };
        // componentWillMount() {
    //     console.log('componentWillMount (deprecated)');
    // }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        // if (nextState.number % 5 === 0) return false;
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('componentWillUpdate');
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    calculateResult = () => {
        console.log("hello");
        this.setState({
            result: this.state.inputData / this.state.fontSize
        });
    };

    handleInputDataChange = (event) => {
        this.setState({
            inputData: event.target.value
        }, ()=>{
            this.calculateResult();
        });
    };

    handleFontSizeChange = (event) => {
        this.setState({
            fontSize: event.target.value
        });
    };
    render() {
        return (
            <div className="RemCalculator Content">
                <h1>{this.props.title}</h1>
                <div>
                    <label htmlFor="fontSize">Font Size</label>
                    <input
                        type="number"
                        id="fontSize"
                        value={this.state.fontSize}
                        onChange={this.handleFontSizeChange} />
                </div>
                <div>
                    <label htmlFor="insertedNumber">Size(px)</label>
                    <input
                        type="number"
                        id="insertedNumber"
                        value={this.state.inputData}
                        onChange={this.handleInputDataChange} />
                </div>
                <div>{this.state.result} rem</div>
                <button onClick={this.calculateResult}>Calculate</button>
            </div>
        )
    };
}

export default RemCalculator;
