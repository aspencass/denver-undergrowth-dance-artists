import React, { useState } from "react";
import { Label, TextInput, Button } from "flowbite-react";

function ResourceForm({ addResource }) {
  // resource form data

  const [resourceFormData, setResourceFormData] = useState({
    title: "",
    description: "",
    date: "",
    image: "",
    location_name: "",
    address: "",
    email: "",
    website: "",
    social: "",
  });

  //   errors
  const [errors, setErrors] = useState([]);

  //   resource post
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResourceFormData({ ...resourceFormData, [name]: value });
  };

  function onResourceSubmit(e) {
    e.preventDefault();

    fetch("/resources", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...resourceFormData, ongoing: true }),
    }).then((res) => {
      if (res.ok) {
        res.json().then(addResource);
      } else {
        //Display errors
        res
          .json()
          .then((data) =>
            setErrors(Object.entries(data.errors).map((e) => `${e[0]} ${e[1]}`))
          );
      }
    });
  }


  return (
    <div className="gap-6 flex flex-col items-center bg-[url('./assets/nude.png')] bg-cover h-max w-screen pb-48">
      <h1 class="text-center text-6xl font-extrabold w-50 tracking-wide">
        Add your class, performance, workshop, funding opportunity, audition,
        rehearsal space, <br />
        Denver Dance Resource here!
      </h1>

      {/* resource submit form  */}
      {errors ? errors.map((e) => <div>{e}</div>) : null}
      <form onSubmit={onResourceSubmit}>
        <div className="font-bold gap-10 flex flex-row items-center mt-6">
          <div className="mb-2 block">
            <Label htmlFor="title" value="Resource Heading:" />
          </div>
          <TextInput
            type="text"
            name="title"
            value={resourceFormData.title}
            onChange={handleChange}
          />
        </div>
        <div className="font-bold gap-10 flex flex-row items-center mt-6">
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description:" />
          </div>
          <TextInput
            type="text"
            name="description"
            value={resourceFormData.description}
            onChange={handleChange}
          />
        </div>
        <div className="font-bold gap-10 flex flex-row items-center mt-6">
          <div className="mb-2 block">
            <Label htmlFor="date" value="Date:" />
          </div>
          <TextInput
            type="number"
            name="date"
            value={resourceFormData.date}
            onChange={handleChange}
          />
        </div>
        <div className="font-bold gap-10 flex flex-row items-center mt-6">
          <div className="mb-2 block">
            <Label htmlFor="image" value="Image:" />
          </div>
          <TextInput
            type="text"
            name="image"
            value={resourceFormData.image}
            onChange={handleChange}
          />
        </div>
        <div className="font-bold gap-10 flex flex-row items-center mt-6">
          <div className="mb-2 block">
            <Label htmlFor="location_name" value="Location Name:" />
          </div>
          <TextInput
            type="text"
            name="location_name"
            value={resourceFormData.location_name}
            onChange={handleChange}
          />
        </div>
        <div className="font-bold gap-10 flex flex-row items-center mt-6">
          <div className="mb-2 block">
            <Label htmlFor="address" value="Address:" />
          </div>
          <TextInput
            type="text"
            name="address"
            value={resourceFormData.address}
            onChange={handleChange}
          />
        </div>
        <div className="font-bold gap-10 flex flex-row items-center mt-6">
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email:" />
          </div>
          <TextInput
            type="text"
            name="email"
            value={resourceFormData.email}
            onChange={handleChange}
          />
        </div>
        <div className="font-bold gap-10 flex flex-row items-center mt-6">
          <div className="mb-2 block">
            <Label htmlFor="website" value="Website:" />
          </div>
          <TextInput
            type="text"
            name="website"
            value={resourceFormData.website}
            onChange={handleChange}
          />
        </div>
        <div className="font-bold gap-10 flex flex-row items-center mt-6">
          <div className="mb-2 block">
            <Label htmlFor="social" value="Social:" />
          </div>
          <TextInput
            type="text"
            name="social"
            value={resourceFormData.social}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          class="bg-[#fffc52] text-black pr-6 pl-6 pt-4 pb-4 text-xl mt-6 font-bold"
        >
          Add Resource
        </Button>

      </form>

      {errors
        ? errors.map((e) => <h2 style={{ color: "red" }}>{e.toUpperCase()}</h2>)
        : null}
    </div>
  );
}

export default ResourceForm;
