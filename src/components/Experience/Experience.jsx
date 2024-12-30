import React from "react";

function Experience(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const description = props.description;

  return (
    <div className="pt-4 space-y-2 lg:space-y-0">
      <div className="items-baseline lg:flex lg:space-x-2">
        <h2 className="font-title text-2xl">{title}</h2>
        <h2 className="font-body text-xl">{subtitle}</h2>
      </div>
      {description}
    </div>
  );
}

export default Experience;
