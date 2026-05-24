import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, clearUserData } from '../redux/slices/userSlice';
import styles from './UserProfile.module.css';

export default function UserProfile({ userId = 1 }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.user);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserData(userId));
    }
  }, [userId, dispatch]);

  return (
    <div className={styles.container}>
      <h2>User Profile Example (Async)</h2>

      {loading && <p className={styles.loading}>Loading user data...</p>}

      {error && (
        <div className={styles.error}>
          <p>Error: {error}</p>
          <button onClick={() => dispatch(clearUserData())}>
            Clear Error
          </button>
        </div>
      )}

      {data && (
        <div className={styles.userData}>
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <button onClick={() => dispatch(clearUserData())}>
            Clear Data
          </button>
        </div>
      )}

      {!loading && !data && !error && (
        <p className={styles.empty}>Click fetch to load user data</p>
      )}
    </div>
  );
}
