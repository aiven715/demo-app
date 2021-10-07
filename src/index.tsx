import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Users, { User } from "./Users";

import "./index.css";
import "./tailwind.css";

import { makeUsers } from "./api";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const fetchUsers = useCallback(() => {
    const users = makeUsers(10);
    setUsers(users);
  }, []);

  return (
    <>
      {users.length > 0 && <Users items={users} />}
      <Button onClick={fetchUsers} />
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <div className="w-screen h-screen flex items-center justify-center bg-gray-900">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
