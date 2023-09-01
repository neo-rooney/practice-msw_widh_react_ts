import { useState } from "react";
import { getUsers } from "../api/user";

export const useUser = () => {
  const [users, setUsers] = useState<any[]>();

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data.data);
  };

  return { users, fetchUsers };
};
