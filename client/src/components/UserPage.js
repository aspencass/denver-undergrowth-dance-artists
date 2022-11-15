import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Home from "./Home";

function UserPage() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(false);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetch(`/users/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setLoading(false);
        });
      } else {
        res.json().then((data) => setErrors(data.errors));
      }
    });
  }, []);

  if (loading) return <h1>Loading</h1>;
  if (errors) return <h1>{errors}</h1>;
  return (
    <div>
      <h1 class="text-center text-8xl font-extrabold w-50 tracking-wide p-20 bg-[url('./assets/nude.png')] bg-cover">
        hello {user.username}!
      </h1>
      <Home />
    </div>
  );
}

export default UserPage;
