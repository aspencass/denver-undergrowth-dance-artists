import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const { username, password } = formData;

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    fetch('/signup', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          history.push(`/users/${user.id}`);
        });
      } else {
        res.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  }
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData)

  return (
    <>
    <div className="bg-[url('./assets/nude.png')] bg-cover h-screen w-screen">
      <form onSubmit={onSubmit} className="font-bold gap-4 flex flex-col items-center mt-0">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username1" value="Your username" />
          </div>
          <TextInput
            id="username1"
            type="username"
            placeholder="Username"
            name="username"
            required={true}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            name="password"
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
            Sign up! 
          </Button>
      </form>
      {errors ? errors.map((e) => <div>{e[0] + ": " + e[1]}</div>) : null}
      </div>
    </>
  );
}

export default SignUp;
