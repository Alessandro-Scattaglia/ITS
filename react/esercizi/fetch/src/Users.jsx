import { useState, useEffect } from "react";
import UserCard from "./UserCard";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [error, setErrors] = useState();

  // try {
  //   setIsLoading(true);

  // } catch () {

  // }
  // finally{
  //   setIsLoading(false);
  // }

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data) {
          setUsers(data);
        } else {
          setErrors("Qualcosa è andato storto");
        }
      });
  }, []);

  return (
    <div className="users">
      {isLoading && <p>Please wait....</p>}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      {error && <div className="warning">{error}</div>}
    </div>
  );
}
