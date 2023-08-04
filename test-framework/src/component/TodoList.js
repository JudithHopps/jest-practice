import { useEffect, useState } from 'react';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setTodoList(json))
      .catch(() => {
        setErrorMsg('에러 발생... ');
      });
  }, []);

  return (
    <>
      <h1>TodoList</h1>

      {errorMsg ? (
        <h5>{errorMsg}</h5>
      ) : (
        <ul>
          {todoList.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? 'line-through' : undefined,
              }}
            >
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
