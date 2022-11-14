import React, { useState } from "react";
import { Label, TextInput, Button } from "flowbite-react";

function ResourceForm({ addResource }) {
  // resource form data

  const [resourceFormData, setResourceFormData] = useState({
    name: "",
    title: "",
    description: "",
    date: "",
    image: "",
    location_name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  //   contact form data

  // const [contactFormData, setContactFormData] = useState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     website: "",
  //     social: "",
  // });

  // category form data

  // const [categoryFormData, setCategoryFormData] = useState({
  //     name: "",
  // });

  //   errors
  const [errors, setErrors] = useState([]);

  //   resource post
  const handleResourceChange = (e) => {
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

  // category post
  // const handleCategoryChange = (e) => {
  //     const { name, value } = e.target;
  //     setCategoryFormData({ ...categoryFormData, [name]: value });
  // };

  // function onCategorySubmit(e) {
  //     e.preventDefault();

  //     fetch("/categories", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ ...categoryFormData, ongoing: true }),
  //     }).then((res) => {
  //     res.json().then(addCategory);
  //     });
  // }

  // contact post
  // const handleContactChange = (e) => {
  //     const { name, value } = e.target;
  //     setContactFormData({ ...contactFormData, [name]: value });
  // };

  // function onContactSubmit(e) {
  //     e.preventDefault();

  //     fetch("/contacts", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ ...contactFormData, ongoing: true }),
  //     }).then((res) => {
  //     res.json().then(addContact);
  //     });
  // }

  return (
    <div className="gap-6 flex flex-col items-center bg-[url('./assets/nude.png')] bg-cover h-max w-screen">
      <h1 class="text-center text-6xl font-extrabold w-50 tracking-wide">
        Add your class, performance, workshop, funding opportunity, audition,
        rehearsal space, <br />
        Denver Dance Resource here!
      </h1>
      {/* category submit form  */}
      {/* <form onSubmit={onCategorySubmit}>
                <div className="font-bold gap-10 flex flex-row items-center mt-6">
                <div className="mb-2 block">
                    <Label htmlFor="name" value="Resource Type:" />
                </div>
                <TextInput
                    type="text"
                    name="name"
                    value={categoryFormData.name}
                    onChange={handleCategoryChange}
                />
                </div>
            </form> */}

      {/* resource submit form  */}
      {errors ? errors.map((e) => <div>{e}</div>) : null}
      <form onSubmit={onResourceSubmit}>
        {/* <div className="font-bold gap-10 flex flex-row items-center mt-6">
          <div className="mb-2 block">
            <Label htmlFor="name" value="Resource Type:" />
          </div>
          <TextInput
            type="text"
            name="name"
            key={resourceFormData.category.id}
            value={resourceFormData.category.name}
            onChange={handleResourceChange}
          />
        </div> */}
        
        <div className="font-bold gap-10 flex flex-row items-center mt-6">
          <div className="mb-2 block">
            <Label htmlFor="title" value="Resource Heading:" />
          </div>
          <TextInput
            type="text"
            name="title"
            value={resourceFormData.title}
            onChange={handleResourceChange}
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
            onChange={handleResourceChange}
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
            onChange={handleResourceChange}
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
            onChange={handleResourceChange}
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
            onChange={handleResourceChange}
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
            onChange={handleResourceChange}
          />
        </div>
        <div className="font-bold gap-10 flex flex-row items-center mt-6">
          <div className="mb-2 block">
            <Label htmlFor="city" value="City:" />
          </div>
          <TextInput
            type="text"
            name="city"
            value={resourceFormData.city}
            onChange={handleResourceChange}
          />
        </div>
        <div className="font-bold gap-10 flex flex-row items-center mt-6">
          <div className="mb-2 block">
            <Label htmlFor="state" value="State:" />
          </div>
          <TextInput
            type="text"
            name="state"
            value={resourceFormData.state}
            onChange={handleResourceChange}
          />
        </div>
        <div className="font-bold gap-10 flex flex-row items-center mt-6">
          <div className="mb-2 block">
            <Label htmlFor="zip" value="Zip:" />
          </div>
          <TextInput
            type="number"
            name="zip"
            value={resourceFormData.zip}
            onChange={handleResourceChange}
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

      {/* contact submit form  */}
      {/* <form onSubmit={onContactSubmit}>
                <div class="gap-6 flex flex-col items-center bg-[url('./assets/nude.png')] bg-cover h-screen w-screen">
                <h1 class="text-6xl font-extrabold w-50">Contact Information:</h1>
                <div className="font-bold gap-10 flex flex-row items-center mt-6">
                    <div className="mb-2 block">
                    <Label htmlFor="name" value="Name:" />
                    </div>
                    <TextInput
                    type="text"
                    name="name"
                    value={contactFormData.name}
                    onChange={handleContactChange}
                    />
                </div>

                <div className="font-bold gap-10 flex flex-row items-center mt-6">
                    <div className="mb-2 block">
                    <Label htmlFor="email" value="Email:" />
                    </div>
                    <TextInput
                    type="text"
                    name="email"
                    value={contactFormData.email}
                    onChange={handleContactChange}
                    />
                </div>

                <div className="font-bold gap-10 flex flex-row items-center mt-6">
                    <div className="mb-2 block">
                    <Label htmlFor="phone" value="Phone:" />
                    </div>
                    <TextInput
                    type="number"
                    name="phone"
                    value={contactFormData.phone}
                    onChange={handleContactChange}
                    />
                </div>

                <div className="font-bold gap-10 flex flex-row items-center mt-6">
                    <div className="mb-2 block">
                    <Label htmlFor="website" value="Website:" />
                    </div>
                    <TextInput
                    type="text"
                    name="website"
                    value={contactFormData.website}
                    onChange={handleContactChange}
                    />
                </div>

                <div className="font-bold gap-10 flex flex-row items-center mt-6">
                    <div className="mb-2 block">
                    <Label htmlFor="social" value="Social:" />
                    </div>
                    <TextInput
                    type="text"
                    name="social"
                    value={contactFormData.social}
                    onChange={handleContactChange}
                    />
                </div> */}
      {/* </div> */}
      {/* </form> */}
    </div>
  );
}

export default ResourceForm;
