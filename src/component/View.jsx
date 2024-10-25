import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function View() {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.user.users.find((user) => user.id === parseInt(id))
  );

  if (!user) return <p>User not found.</p>;

  return (
    <div className="container mt-4">
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}
