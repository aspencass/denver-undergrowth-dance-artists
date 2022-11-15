import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "flowbite-react";

function ResourceCard({ resource }) {
  return (
    <>
      <div className="max-w-scren">
        <Card class="bg-[url('./assets/nude.png')] bg-cover p-2 rounded-lg transform transition duration-500 hover:scale-105 drop-shadow-xl border-[#fffc52] border-2 ml-20 mr-20 gap-10">
          <h5 className="text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            {resource.title}
          </h5>
          <p className="font-bold text-gray-900 dark:text-gray-400">
            {resource.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button class="bg-[#fffc52] text-gray-900 font-bold pr-6 pl-6 pt-4 pb-4 text-sm">
              <Link to={`/resources/${resource.id}`}>More Details</Link>
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default ResourceCard;
