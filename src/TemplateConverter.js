import React, { Component } from 'react'

class TemplateConverter extends Component {
    state = {
        inputText: "",
        outputText: "",
        variableName: "returnHtml",
    };

    constructor(props) {
        super(props);
        console.log("Start TemplateConverter");
    }

    /**
     * 원본 텍스트를 자바스크립트에서 사용하기 위한
     * 텍스트로 변환합니다.
     * @param {string} text 원본 텍스트
     * @returns 자바스크립트 변수로 변환
     */
    convert = (text) => {
        let textLines = text.split(/\r?\n/);
        let resultLines = [];
        textLines.forEach(line => {
            resultLines.push(this.state.variableName + " += '" + line + "';");
        });
        return resultLines.join("\n");
    };

    handleClickConvertButton = () => {
        this.setState({
            outputText: this.convert(this.state.inputText)
        });
    };

    handleChangeInputText = (event) => {
        this.setState({
            inputText: event.target.value
        })
    };

    render() {
        return (
           <div>
               <h2>템플릿 컨버터</h2>
               <textarea cols="30" rows="10" value={this.state.inputText} onChange={this.handleChangeInputText}></textarea>
               <button onClick={this.handleClickConvertButton}>변환</button>
               <textarea cols="30" rows="10" value={this.state.outputText} readOnly></textarea>
           </div>
       );
    }
}

export default TemplateConverter;