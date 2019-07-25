import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoItem from '../../components/TodoItem/TodoItem';
import AddTodoItem from '../../components/AddTodoItem/AddTodoItem';
import * as actionTypes from '../../store/actions';

class TodoList extends Component {
	render() {
		return (
			<div>
				<ul>
					{this.props.todoItems.map(todoItem => (
						<TodoItem key={todoItem.id} description={todoItem.description} />
					))}
				</ul>
				<AddTodoItem todoItemAdded={this.props.addToDo} />
			</div>
		)
	}
};

const mapStateToProps = state => {
	return {
		todoItems: state.todoItems
	}
};

const mapDispatchToProps = dispatch => {
	return {
		addToDo: (description) => dispatch({ 
			type: actionTypes.ADD_TODO,
			description: description
		}),
		removeToDo: (id) => dispatch({
			type: actionTypes.REMOVE_TODO,
			id: id
		}),
		saveToDo: (id) => dispatch({
			type: actionTypes.SAVE_TODO,
			id: id
		})
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);