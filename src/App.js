import React from 'react';

import TodoList from './containers/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todo App
        <TodoList />
      </header>
    </div>
  );
}

export default App;
