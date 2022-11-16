import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { useParams } from "react-router-dom";

function CardDetails() {
  const [resource, setResource] = useState({ contact: {}, category: {} });
  const params = useParams();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  useEffect(() => {
    fetch(`/resources/${params.id}`)
      .then((res) => res.json())
      .then((data) => setResource(data));
  }, []);

  // conditional code
  if (!resource) {
    return "Loading...";
  }

  return (
    <>
      <div>
        <div className="bg-[url('./assets/nude.png')] bg-cover pb-96">
          {/* grid container  */}
          <div className="grid-container5">
            {/* grid left side with image  */}
            <div className="grid-child9">
              <img
                src={resource.image}
                alt={resource.title}
                class="rounded-lg"
              />
            </div>

            {/* grid right side with information */}
            <div class="grid-child10">
              <div class="text-8xl font-extrabold w-50">{resource.title}</div>
              <div class="text-4xl text-left font-bold italic leading-relaxed tracking-wide pt-10">
                Resource Type: {resource.category.name}
              </div>
              <div class="pt-10 text-2xl text-left leading-relaxed tracking-wide">
                <strong>Description: </strong>
                {resource.description}
                <br />
                <strong>Location: </strong>
                {resource.location_name}, {resource.address}
                <br />
                <strong>Contact: </strong>
                {resource.email}
                <br />
              </div>

              <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                  <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center pt-10">
                    <SocialIcon url={resource.website} />
                    <SocialIcon url={resource.social} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardDetails;
