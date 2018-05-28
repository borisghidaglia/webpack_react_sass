
#### WARNING ! This repo has to be tested since it's the first time I setup a webpack project. I'll surely refine it if I find some bugs/problems/features while using it.

#### Important links
[https://github.com/gajus/react-css-modules](https://github.com/gajus/react-css-modules)
[webpack doc](https://webpack.js.org/concepts/)
[Sass doc](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
[React doc](https://reactjs.org/docs/hello-world.html)
# Simple webpack - React - Sass Template

Since it is quite painful to setup a fine dev/prod webpack tool, here is a template that could save you some time.

## What's in the box ?

1. **webpack** + **React** + **Sass** compiler
2.  **developement** mode : separate css files, plain js
3. **production** mode : one css file minified, uglyfied js

## Instructions
### Install
1.  Clone this repo and `cd` into it
2.  Run `npm install`
3.  Run `npm start`, **localhost:8080** will open up in your default browser

### Commands
`npm start` <br />
to run the **developement** mode - still at **localhost:8080**

`npm run build` <br />
to build your **production** app. Files will appear in the `dist/` directory.

### Component creation example with App.js
```
import React, { Component } from 'react';

import FirstLevelComponent from './FirstLevelComponent/FirstLevelComponent.js'

import styles from './App.scss'
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
```
#### What you should notice
Most of the code looks like pure React. However, in order to be able to use **react-css-modules**, don't forget to add these lines :
`import CSSModules from "react-css-modules";`
and
`export default CSSModules(App, styles, {allowMultiple: true});`
then, just add your css or scss files
`import styles from './App.scss'`

#### Advantages of react-css-modules
You are now able to use **styleName** as an attribute. **All the styles you'll use from the imported scss file are local**.
As an example, I used the class **container** in each component of this repo. You can notice that there is no conflict between them.

However, if you want to set **global** styles, just check how I did it the `src/style.scss`, or check the `react-css-modules` link above. To set these styles, use the **className** attribute.

### React Files Structure Proposition
React App's files are located in the `src/` directory.

The template include the main **App** and two components : **FirstLevelComponent** and **SecondLevelComponent**, as a way to illustrate a React structure. Also, you'll find index.html and index.js, in which we imported the App, and rendered it into the html template.

Files are organized as follow :
```
- index.js
- index.html
- App.js
- App.scss
- img/
| - react.png
- FirstLevelComponent/
| - FirstLevelComponent.js
| - FirstLevelComponent.scss
| - SecondLevelComponent/
| | - SecondLevelComponent.js
| | - SecondLevelComponent.scss
| | - img/
| | | - android.svg
```
#### Why do I think (for now) that it could be a good structure ?
It follows the idea of component. In this example, if you want to export a component, you just have to download its directory and you're good to go ! Moreover, within this directory you have all the child components that this app use. You don't want them ? So easy to get rid of them !
