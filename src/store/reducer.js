const initialState = {
	todoItems: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				todoItems: state.todoItems
			}
		default: 
			return state;
	}
};

export default reducer;