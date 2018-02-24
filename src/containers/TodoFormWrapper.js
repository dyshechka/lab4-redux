import { connect } from 'react-redux'
import { completeTodo } from '../actions'
import TodoForm from "../components/TodoForm";

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = {
    onCompleteTodo: completeTodo
};

const TodoFormWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoForm);

export default TodoFormWrapper
