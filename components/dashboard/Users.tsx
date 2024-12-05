'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  
}

function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('THIS IS THE USERS BEFORE setUsers:', users);

        const response = await fetch('/api/users');
        if (!response.ok) throw new Error('Failed to fetch users');

        const data = await response.json();
        setUsers(data); // Set the entire array of users
        console.log('THIS IS RESPONSE DATA', data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {users.length > 0 ? (
        users.map((user) => (
          <div
            key={user.id}
            className="flex flex-col max-w-[30%] w-full sm:w-[30%] ring-1 rounded-lg shadow-lg p-4"
          >
            <Image
              src={user.image}
              alt={user.name}
              height={80}
              width={80}
              className="rounded-full mx-auto"
            />
            <div className="mt-4 text-center">
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Users;
