import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [user, setUser] = useState<{ username: string; role: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const cookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('user='));

    if (cookie) {
      setUser(JSON.parse(decodeURIComponent(cookie.split('=')[1])));
    }
  }, []);

  const handleLogout = () => {
    document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    setUser(null);
    router.push('/login');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Welcome to the Portal</h1>

      {user ? (
        <div className="text-center">
          <p className="mb-3">
            Logged in as <strong>{user.username}</strong> (<span className="badge bg-info text-dark">{user.role}</span>)
          </p>
          <div className="d-grid gap-2 d-md-block">
            <button className="btn btn-primary me-2" onClick={() => router.push('/candidate')}>
              Go to Candidate
            </button>
            <button className="btn btn-secondary me-2" onClick={() => router.push('/candidate/expertise')}>
              Go to Candidate Expertise
            </button>
            {user.role === 'admin' && (
              <button className="btn btn-warning me-2" onClick={() => router.push('/admin')}>
                Go to Admin Panel
              </button>
            )}
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-3">You are not logged in.</p>
          <button className="btn btn-primary" onClick={() => router.push('/login')}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}
