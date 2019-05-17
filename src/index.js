import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from './screens/Landing';
import Post from './screens/Post'
import SinglePost from './screens/SinglePost'

ReactDOM.render(
    <Router>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/post' component={Post}/>
        <Route exact path='/singlepost/:id' component={SinglePost}/>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
