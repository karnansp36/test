import { useEffect, useRef, useState } from 'react';
import styles from './UseRefExample.module.css';

export default function UseRefExample() {
  const inputRef = useRef(null);
  const renderCountRef = useRef(0);
  const [value, setValue] = useState('');

  useEffect(() => {
    renderCountRef.current += 1;
  });

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleClear = () => {
    setValue('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.container}>
      <h2>useRef Example</h2>
      <p className={styles.note}>
        `useRef` stores a mutable value that persists across renders without causing re-renders.
      </p>
      <label htmlFor="inputField">Input Field:</label>

      <div className={styles.inputRow}>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type here..."
          className={styles.input}
          id="inputField"
        />
        <button onClick={handleFocus} className={styles.button}>
          Focus Input
        </button>
        <button onClick={handleClear} className={styles.buttonSecondary}>
          Clear
        </button>
      </div>

      <div className={styles.status}>
        <p>
          Current value: <strong>{value || 'empty'}</strong>
        </p>
        <p>
          Render count (via ref): <strong>{renderCountRef.current}</strong>
        </p>
      </div>
    </div>
  );
}
