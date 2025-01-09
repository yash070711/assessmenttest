import { useState } from 'react';

export default function Admin() {
  const [url, setUrl] = useState<string>('');
  const [roles, setRoles] = useState<string>('');

  const addResource = async () => {
    await fetch('/api/resources', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, roles: roles.split(',') }),
    });
    setUrl('');
    setRoles('');
    alert('Resource added successfully');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg border-0 rounded-4" style={{ width: '100%', maxWidth: '450px' }}>
        <div className="card-body p-5">
          <h2 className="text-center text-primary mb-4">Admin Panel</h2>
          <div className="mb-4">
            <label htmlFor="url" className="form-label">Resource URL</label>
            <input
              id="url"
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter resource URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="roles" className="form-label">Roles (comma-separated)</label>
            <input
              id="roles"
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter roles"
              value={roles}
              onChange={(e) => setRoles(e.target.value)}
            />
          </div>
          <button
            onClick={addResource}
            className="btn btn-primary btn-lg w-100 mt-3"
            disabled={!url || !roles}
          >
            Add Resource
          </button>
        </div>
      </div>
    </div>
  );
}
