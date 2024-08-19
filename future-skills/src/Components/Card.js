import React from 'react';

const Card=({ title, description })=> {
  return (
    <div className="border border-gray-300 rounded-[8px] p-4 bg-gray-50 shadow-md w-full md:w-80 mx-auto">
      <h3 className="font-bold text-lg mb-3 pb-2 border-b-2 border-gray-200">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
