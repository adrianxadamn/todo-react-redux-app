import React, { Component } from 'react';

class AddTodoItem extends Component {
	state = {
		description: ''
	}

	submitFormHandler = (event) => {
		event.preventDefault();
		this.props.todoItemAdded(this._inputElement.value)
		this._inputElement.value = '';
	}

	render() {
		return (
			<form className="AddTodoItem" onSubmit={this.submitFormHandler}>
				<input type="text" placeholder="Add Todo here..." ref={(a) => this._inputElement = a}  />
				<button>Add Todo</button>
			</form>
		)
	}
}

export default AddTodoItem;