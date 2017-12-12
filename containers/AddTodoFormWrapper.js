import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodoForm from "../components/AddTodoForm";

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = {
    onAddTodo: addTodo
};

const AddTodoFormWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodoForm);

export default AddTodoFormWrapper
