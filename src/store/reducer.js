import * as actionTypes from './actions';

const initialState = {
	todoItems: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TODO:
			const newTodo = {
				id: Math.random(),
				description: action.description
			};
			return {
				...state, 
				todoItems: state.todoItems.concat(newTodo)
			}
		case actionTypes.REMOVE_TODO:
			const id = action.id;
			const newArray = [...state.todoItems];
			newArray.splice(id, 1);
			return {
				...state,
				todoItems: newArray
			}
		default: 
			return state;
	}
};

export default reducer;