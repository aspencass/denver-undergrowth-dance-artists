import React, { useState, useEffect } from "react";
import { Label, TextInput, Button, Dropdown } from "flowbite-react";

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

  // state set for categories
  const [categories, setCategories] = useState([]);

  // function firstCategory({categories}) {
  //   const cname = categories.name;
  //   if (categories.id === 1) {
  //     return cname;
  //   } elsif (categories.id === 2) {
  //     return cname;
  //   } elsif (categories.id === 3) {
  //     return cname;
  //   } else if (categories.id === 4) {
  //     return cname;
  //   } else if (categories.id === 5) {
  //     return cname;
  //   } else if (categories.id === 6) {
  //     return cname;
  //   } else if (categories.id === 7) {
  //     return cname;
  //   } else if (categories.id === 8) {
  //     return cname;
  //   } else (categories.id === 9) {
  //     return cname;
  //   }

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

  // categories fetch
  useEffect(() => {
    fetch("/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="gap-6 flex flex-col items-center bg-[url('./assets/nude.png')] bg-cover h-max w-screen pb-48">
      <h1 class="text-center text-6xl font-extrabold w-50 tracking-wide">
        Add your class, performance, workshop, funding opportunity, audition,
        rehearsal space, <br />
        Denver Dance Resource here!
      </h1>

      <label>
        Type of Resource: <br />
        <select
          name="category"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        >
          <option >{categories[0].name}</option>
          <option value="Workshop">{categories[1].name}</option>
          <option value="Performance">{categories[2].name}</option>
          <option value="Rehearsal Space">{categories[3].name}</option>
          <option value="Funding Opportunity">{categories[4].name}</option>
          <option value="Audition">{categories[5].name}</option>
          <option value="Choreographic Opportunity">
            {categories[6].name}
          </option>
          <option value="Jobs & Internships">{categories[7].name}</option>
          <option value="Volunteering">{categories[8].name}</option>
        </select>
      </label>

      {/* resource submit form  */}
      {errors ? errors.map((e) => <div>{e}</div>) : null}
      <form onSubmit={onResourceSubmit}>
        <div className="font-bold gap-10 flex flex-row items-center mt-6">
          <div className="mb-2 block">
            <Label htmlFor="title" value="Heading:" />
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
