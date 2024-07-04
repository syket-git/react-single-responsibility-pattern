import React from 'react';

const UsersList = ({ users }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <div className="grid grid-cols-5 gap-4 flex-wrap items-center">
        {users.map((user) => (
          <div className="border p-5 border-gray-200" key={user.id}>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
