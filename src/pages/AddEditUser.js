import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { addUser, updateUser } from '../services/api';
import UserForm from '../components/UserForm';

const AddEditUser = ({ onUserChange }) => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      if (state?.user) {
        await updateUser(state.user.id, data);
      } else {
        await addUser(data);
      }
      onUserChange(); // Notify parent to refresh the user list
      navigate('/');
    } catch (error) {
      alert('Failed to save user');
    }
  };

  return (
    <div>
      <h2>{state?.user ? 'Edit User' : 'Add User'}</h2>
      <UserForm initialData={state?.user} onSubmit={handleSubmit} />
    </div>
  );
};

export default AddEditUser;
