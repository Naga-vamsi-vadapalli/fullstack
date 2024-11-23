import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ onAddUser }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    company: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users', user);
      onAddUser(response.data);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="company" value={user.company} onChange={handleChange} placeholder="Department" required />
      <button type="submit">Add User</button>
    </form>
  );
};


export default UserForm;
