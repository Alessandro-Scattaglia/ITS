import { useState, useEffect } from "react";

export default function UserList({ user }) {
  const { name, username, email } = user;

  return (
    <div className="user-card">
      <h5>{name}</h5>
      <p>{username}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
}
