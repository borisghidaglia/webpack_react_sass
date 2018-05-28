import React, { Component } from 'react';

import CSSModules from "react-css-modules";
import styles from './SecondLevelComponent.scss';

import android from './img/android.svg'

class SecondLevelComponent extends Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div styleName="container">
                <p className="text" styleName="color">SecondLevelComponent</p>
                <div styleName="image-container">
                    <img src={android}/>
                </div>
            </div>
        )
    }
}

export default CSSModules(SecondLevelComponent, styles, {allowMultiple: true});
