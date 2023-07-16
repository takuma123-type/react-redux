import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  return <div className="App">
    <h1>Hello Redux</h1>
    <h3>カウント: {counter}</h3>
    <button onClick={() => dispatch(increment(7))}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>
    {isLogin ? <h3>ログインしています</h3> : <h3>ログインしていません</h3>}
    <button onClick={() => dispatch(login())}>ログイン or ログアウト</button>
  </div>
}

export default App;
