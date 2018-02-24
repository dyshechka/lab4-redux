import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import TodoItem from "./TodoItem";
import TodoTotal from "./TodoTotal";

class TodoForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <todo-form>
                <div className="row align-center mb-3">
                    <div className="col custom-flex-container div-width">
                        <Link to="/add" className="btn btn-info full-width-btn">Add</Link>
                    </div>
                </div>
                <TodoTotal
                    count={this.props.todos.length}
                ></TodoTotal>
                <div className="row align-center">
                    <div className="col div-width">
                        {this.props.todos.map( todo =>
                            <TodoItem
                                key={todo.text}
                                todo={todo}
                                onComplete={(todo) => this.props.onCompleteTodo(todo)}
                            />
                        )}
                    </div>
                </div>
            </todo-form>
        );
    }
}

export default TodoForm;
