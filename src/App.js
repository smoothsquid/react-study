import './App.css';
import RemCalculator from './RemCalculator';
import { Component } from 'react';

class App extends Component {
    state = {
        menuList: {
            home: true,
            showRemCalculator: false,
        }
    }

    showMenu = (menuName) => {
        let menuList = this.state.menuList;
        Object.keys(menuList).forEach(key=>{
            menuList[key] = false;
        })
        this.setState({
            menuList: menuList
        })
        switch (menuName) {
            case "remCalculator":
                this.setState({
                    menuList: {
                        ...this.state.menuList,
                        showRemCalculator: true
                    }
                })
                break;
            default:
                this.setState({
                    menuList: {
                        ...this.state.menuList,
                        home: true
                    }
                })
                break;
        }
    };

    showHome = () => {
        this.showMenu("home");
    };

    showRemCalculator = () => {
        this.showMenu("remCalculator");
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Welcome
                </header>
                <ul>
                    <li className="Link" onClick={this.showHome}>Home</li>
                    <li className="Link" onClick={this.showRemCalculator}>rem 계산기</li>
                </ul>
                {   
                    this.state.menuList.home
                    ?(<div>Hello</div>)
                    :(<div></div>)
                }
                {
                    this.state.menuList.showRemCalculator
                    ?<RemCalculator/>
                    :(<div></div>)
                }
            </div>
        )
    }
}

export default App;
