import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoItem from '../../components/TodoItem/TodoItem';

class TodoList extends Component {
	render() {
		return (
			<div>
				<ul>
					<TodoItem />
				</ul>
				<form>
					<input type="text" />
					<button type="submit" onClick={this.props.addToDo} >Add ToDo</button>
				</form>
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
		addToDo: () => dispatch({ 
			type: 'ADD_TODO'
		}),
		removeToDo: () => dispatch({
			type: 'REMOVE_TODO'
		}),
		saveToDo: () => dispatch({
			type: 'SAVE_TODO'
		})
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);