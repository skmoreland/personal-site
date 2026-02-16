import React, { useState } from "react";

function Experience(props) {
  const { title, subtitle, description, link } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="pt-4 space-y-2 lg:space-y-0 ">
      <div className="flex items-center justify-between">
        <a href={link} rel="noreferrer" target="_blank">
          <div className="items-end text-left ">
            <h2 className="font-title text-2xl">{title}</h2>
            <h2 className="font-body text-xl">{subtitle}</h2>
          </div>
        </a>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-6 h-6 flex items-center justify-center text-xl font-bold hover:bg-gray-200"
        >
          {isExpanded ? "−" : "+"}
        </button>
      </div>
      {isExpanded && description}
    </div>
  );
}

export default Experience;
