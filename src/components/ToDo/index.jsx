import React, { useState } from 'react';

const ToDo = () => {
  // todos başlanğıcda boş bir array ilə başlayır
  const [todos, setTodos] = useState([]);
  // yeni todo'nun istifadə edəcəyi usestate
  const [newTodo, setNewTodo] = useState('');

  // Yeni bir todo əlavə etmək üçün arrov funksiyası
  const addTodo = () => {
    // əgər yeni todos boş deyilsə əlavə edir
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo(''); // yeni todo əlavə etdikdən sonra input təmizlənir
    }
  };

  // Bir todo'nu silmək üçün istifadə olunur
  const removeTodo = (index) => {
    const newTodoList = [...todos];
    newTodoList.splice(index, 1);
    setTodos(newTodoList);
  };

  return (
    <div>
      <h2>Todo List</h2>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Sil</button>
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Əlavə et</button>
      </div>
    </div>
  );
};

export default ToDo
