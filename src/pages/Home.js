import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserList from '../components/UserList';
import { getUsers } from '../services/api'; // Assuming API service is set up

const Home = ({ refreshFlag, onUserChange }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data); // Assuming response.data contains the list of users
      } catch (error) {
        console.error('Failed to fetch users', error);
      }
    };
    fetchUsers();
  }, [refreshFlag]);

  const handleEdit = (user) => {
    navigate('/edit', { state: { user } });
  };

  return (
    <div>
      <button onClick={() => navigate('/add')}>Add User</button>
      <UserList users={users} onEdit={handleEdit} />
    </div>
  );
};

export default Home;
