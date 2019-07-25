import React, { Component } from 'react';

class AddTodoItem extends Component {
	state = {
		description: ''
	}

	inputChangedHandler = (event) => {
		this.setState({
			description: event.target.value
		});
	}

	buttonClickHandler = () => {
		this.props.todoItemAdded(this.state.description)
	}

	render() {
		return (
			<div className="AddTodoItem">
				<input type="text" placeholder="Add Todo here..." onChange={this.inputChangedHandler} />
				<button onClick={() => this.props.todoItemAdded(this.state.description)}>Add Todo</button>
			</div>
		)
	}
}

export default AddTodoItem;