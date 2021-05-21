import './App.css';
import { Component } from 'react';
import Home from './Home';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import About from './About';
import RemCalculator from './RemCalculator';
import TemplateConverter from './TemplateConverter';

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
            <div className="app">
                <header className="app-header">
                    Welcome
                </header>
                <ul className="nav">
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink exact to="/rem" activeClassName="active">rem 계산기</NavLink></li>
                    <li><NavLink exact to="/converter" activeClassName="active">템플릿 변환기</NavLink></li>
                </ul>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/rem" component={RemCalculator}></Route>
                <Route exact path="/converter" component={TemplateConverter}></Route>
            </div>
        )
    }
}

export default App;
