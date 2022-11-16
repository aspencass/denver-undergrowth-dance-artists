import React, { useState } from "react";
import ResourceCard from "./ResourceCard";
import Search from "./Search";

function ResourcePage({ resources }) {
  const [searchTerm, setSearchTerm] = useState("");

  const displayedResources = resources.filter(resource => {
    return resource.description.toLowerCase().includes(searchTerm.toLowerCase());
   })

  return (
    <>
    <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <div className="bg-[url('./assets/nude.png')] bg-cover bg-repeat">
        <div className="justify-center content-start grid grid-row gap-10">
          {displayedResources.map((resource) => (
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