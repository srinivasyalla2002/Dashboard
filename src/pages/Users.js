//Users.js
import React from 'react';
import { dummyData } from '../data/dummyData';
import '../styles/Users.css';

const Users = () => {
  return (
    <div className="users">
      <div className="kpis">
        <div className="kpi">
          <h3>Total Users</h3>
          <p>{dummyData.totalUsers}</p>
        </div>
        <div className="kpi">
          <h3>Users Active in Last 24 Hours</h3>
          <p>{dummyData.usersActive24h}</p>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className='edit-button'>Edit</button>
                <button className='ban-button'>Ban</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
