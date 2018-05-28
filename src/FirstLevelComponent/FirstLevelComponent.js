import React, { Component } from 'react';

import SecondLevelComponent from './SecondLevelComponent/SecondLevelComponent.js'

import CSSModules from "react-css-modules";
import styles from './FirstLevelComponent.scss';

class FirstLevelComponent extends Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div styleName="container">
                <h2 className="subtitle" styleName="color">I'm the FirstLevelComponent</h2>
                <SecondLevelComponent />
                <SecondLevelComponent />
                <SecondLevelComponent />
            </div>
        )
    }
}

export default CSSModules(FirstLevelComponent, styles, {allowMultiple: true});
