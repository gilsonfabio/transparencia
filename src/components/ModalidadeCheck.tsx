import React, { useState, useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";
interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  address: Object;
  phone: string;
  website: string;
  company: object;
}

const App: React.FunctionComponent = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [ids, setIds] = useState<Array<number>>([]);

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const response = await fetch(url);
        const results = await response.json();
        setUsers(results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData(API_URL);
  }, []);

  const selectUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = parseInt(event.target.value);

    if (ids.includes(selectedId)) {
      const newIds = ids.filter((id) => id !== selectedId);
      setIds(newIds);
    } else {
      const newIds = [...ids];
      newIds.push(selectedId);
      setIds(newIds);
    }
  };

  return (
    <div>
        {users.map((user) => (
          <div key={user.id} >
            <span>{user.id}</span>
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>
              <input
                type="checkbox"
                value={user.id}
                onChange={selectUser}
                checked={ids.includes(user.id) ? true : false}
              />
            </span>
          </div>
        ))}

    </div>
  );
};