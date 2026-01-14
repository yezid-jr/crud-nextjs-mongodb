"use client";

import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/backend/coder")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {users.map((u: any) => (
          <li key={u._id}>{u.nombre} - {u.correo}</li>
        ))}
      </ul>
    </div>
  );
}
