import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from "./Header";
import TodoFormWrapper from "../containers/TodoFormWrapper";
import AddTodoFormWrapper from "../containers/AddTodoFormWrapper";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div className="container">
                    <Header/>
                    <Route exact path="/" component={TodoFormWrapper}/>
                    <Route path="/add" component={AddTodoFormWrapper}/>
                </div>
            </Router>
        );
    }
}

export default App;
