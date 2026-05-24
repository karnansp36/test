import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from '../redux/slices/counterSlice';
import styles from './Counter.module.css';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);

  return (
    <div className={styles.container}>
      <h2>Counter Example</h2>
      <div className={styles.display}>
        <p>Count: <strong>{count}</strong></p>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Add 5
        </button>
        <button onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
}
