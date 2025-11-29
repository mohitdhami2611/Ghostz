import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

const Navbar = () => {
  const { authUser } = useAuthStore();

  return (
    <div>
      <h1>hello</h1>
      <p>{authUser ? `Logged in as: ${authUser.username}` : "Not Logged In"}</p>
    </div>
  );
};

export default Navbar;
