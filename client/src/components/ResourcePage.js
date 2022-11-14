import React from "react";
import ResourceCard from "./ResourceCard";

function ResourcePage({ resources }) {
  return (
    <>
      <div className="bg-[url('./assets/nude.png')] bg-cover bg-repeat">
        <div className="justify-center content-start grid grid-row gap-10">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              resources={resources}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default ResourcePage;