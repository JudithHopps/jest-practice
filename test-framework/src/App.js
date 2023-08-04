import TodoList from './component/TodoList';
import Hello from './component/Hello';
import Mypage from './component/Mypage';
import Timer from './component/Timer';
import UserList from './component/UserList';
import Login from './component/Login';

const user = {
  name: 'Judith',
  age: 20,
};

const users = ['Tom', 'Ace', 'Mike'];

function App() {
  return (
    <div className="App">
      <Hello user={user} />
      <Timer />
      <Mypage />
      <Login />
      <UserList users={users} />
      <TodoList />
    </div>
  );
}

export default App;
