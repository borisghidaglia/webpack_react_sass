import React, { Component } from 'react';

import FirstLevelComponent from './FirstLevelComponent/FirstLevelComponent.js'

import styles from './App.scss'
// import url from './App.scss'
import CSSModules from "react-css-modules";

class App extends Component {
  render() {
    return (
        <div styleName="container">
            <div styleName="narrow">
            <div styleName="header"></div>
                <h1 className="title" styleName="color">I'm the app</h1>
                <FirstLevelComponent/>
            </div>
        </div>
    );
  }
}

export default CSSModules(App, styles, {allowMultiple: true});
