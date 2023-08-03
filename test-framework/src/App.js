import Hello from './component/Hello';
import Timer from './component/Timer';

const user = {
  name: 'Judith',
  age: 20,
};
function App() {
  return (
    <div className="App">
      <Hello user={user} />
      <Timer />
    </div>
  );
}

export default App;
