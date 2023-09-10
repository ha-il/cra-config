import React, { ChangeEvent, useState } from 'react';

const todos: [] = [];

function Todos() {
  const [newTodo, setNewTodo] = useState('');

  const saveUserInput = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTodo(e.target.value);
  const createTodo = () => {};

  return (
    <form onSubmit={createTodo}>
      <input value={newTodo} onChange={saveUserInput} />
      <button type="submit">create</button>
      {todos?.map((id, todo) => <li key={id}>{todo}</li>)}
    </form>
  );
}
export default Todos;
