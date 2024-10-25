import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Edit() {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.user.users.find((user) => user.id === parseInt(id))
  );
  const [name, setName] = useState(user?.name || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`User ${id} updated: ${name}`);
  };

  return (
    <div className="container mt-4">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}
