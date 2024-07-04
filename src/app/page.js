"use client";

import { useEffect, useState } from "react";

const UserProfile = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        const res = await userResponse.json();
        setUsers(res);

        const postsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts`
        );
        const postRes = await postsResponse.json();

        setPosts(postRes);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (users.length === 0 || posts.length === 0) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-center mb-4">Dashboard</h2>
      <div>
        <h2 className="text-2xl font-bold mb-4">Users</h2>
        <div className="grid grid-cols-5 gap-4 flex-wrap items-center">
          {users?.map((user) => (
            <div className="border p-5 border-gray-200" key={user.id}>
              <p>{user.id}</p>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post) => (
            <div className="border min-h-40 p-5 border-gray-200" key={post.id}>
              <p>{post.id}</p>
              <p className="font-bold">{post.title}</p>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
