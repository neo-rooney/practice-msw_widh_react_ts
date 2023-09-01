import { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";

export default function UserList() {
  const { users, fetchUsers } = useUser();
  useEffect(() => {
    const fetchData = async () => {
      await fetchUsers();
    };

    fetchData();
  }, []);

  return (
    <div>
      {users?.length
        ? users?.map((item) => <div key={item.id}>{item.name}</div>)
        : "없어요"}
    </div>
  );
}
