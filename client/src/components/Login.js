import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";

function Login({ updateUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const { username, password } = formData;

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    // Logs in user
    fetch(`/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user);
          history.push(`/users/${user.id}`);
        });
      } else {
        res.json().then((json) => setErrors(json.errors));
      }
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="bg-[url('./assets/nude.png')] bg-cover h-screen w-screen">
        <form onSubmit={handleSubmit} className="font-bold gap-4 flex flex-col items-center mt-0">
          <div>
            <div className="mb-2 block ">
              <Label value="Your username" />
            </div>
            <TextInput
              defaultValue = {username}
              placeholder="Username"
              required={true}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Your password" />
            </div>
            <TextInput
              defaultValue = {password}
              required={true}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>

          <Button
            type="submit"
            class="bg-[#fffc52] text-black pr-6 pl-6 pt-4 pb-4 text-xl"
          >
            Login!
          </Button>
        </form>
        {errors ? <div>{errors}</div> : null}
      </div>
    </>
  );
}

export default Login;
