import { useEffect, useState } from 'react';

export default function UserList({ users }) {
  const [isVisibleTitle, setIsVisibleTitle] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisibleTitle(true);
    }, 1500);
  }, []);

  return (
    <>
      {isVisibleTitle && <h2>UserList</h2>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  );
}
