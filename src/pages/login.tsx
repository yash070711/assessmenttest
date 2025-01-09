import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const router = useRouter();

  const handleLogin = () => {
    document.cookie = `user=${JSON.stringify({ username, role })}; path=/`;
    router.push('/');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg border-0 rounded-4" style={{ width: '100%', maxWidth: '450px' }}>
        <div className="card-body p-5">
          <h2 className="text-center text-primary mb-4">Login</h2>
          <div className="mb-4">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              id="username"
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="form-label">Role</label>
            <select
              id="role"
              className="form-select form-select-lg"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <button
            onClick={handleLogin}
            className="btn btn-primary btn-lg w-100 mt-3"
            disabled={!username || !role}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
