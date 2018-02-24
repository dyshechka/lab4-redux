import React, {Component} from 'react';
import TodoInputWrapper from "../containers/TodoInputWrapper";
import {Link} from "react-router-dom";

class AddTodoForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <add-add-todo-form>
                <TodoInputWrapper onSubmit={(text) => this.props.onAddTodo(text)}/>
                <div className="row align-center mb-3">
                    <div className="col custom-flex-container div-width">
                        <Link to="/">Go back to list</Link>
                    </div>
                </div>
            </add-add-todo-form>
        );
    }
}

export default AddTodoForm;
