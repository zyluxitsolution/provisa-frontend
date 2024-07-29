// components/CardComponent.tsx

import React from "react";
import { Link } from "react-router-dom";

interface CardComponentProps {
  image: string;
  title: string;
  description?: string;
  link: string; // Route to the page the card leads to.
}

const CardComponent: React.FC<CardComponentProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <Link
      to={link}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 "
    >
      <div className="relative w-full h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center">{title}</h3>
        {description && <p className="mt-2 text-gray-600">{description}</p>}
      </div>
    </Link>
  );
};

export default CardComponent;
